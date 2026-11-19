import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

// ---------- 8-bit sound effects (off until the visitor turns them on) ----------
let soundOn = false;
let audio;
const COIN = [[988, 0, 0.08], [1319, 0.08, 0.25]];
const LEVEL_UP = [[523, 0, 0.1], [659, 0.1, 0.1], [784, 0.2, 0.1], [1047, 0.3, 0.3]];

function play(notes) {
  if (!soundOn) return;
  try {
    audio ??= new AudioContext();
    const t0 = audio.currentTime;
    notes.forEach(([freq, at, dur]) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.04, t0 + at);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      osc.connect(gain).connect(audio.destination);
      osc.start(t0 + at);
      osc.stop(t0 + at + dur);
    });
  } catch {
    // no WebAudio: stay silent
  }
}

export function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onClick = (e) => {
      if (e.target.closest("a, button") && !e.target.closest(".sound-toggle")) play(COIN);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const toggle = () => {
    soundOn = !on;
    setOn(soundOn);
    play(COIN);
  };

  return (
    <button
      className="sound-toggle"
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Turn sound effects off" : "Turn sound effects on"}
    >
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span>{on ? "SFX ON" : "SFX OFF"}</span>
    </button>
  );
}

// ---------- boot screen: any key or click starts the game ----------
export function LoadingScreen() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) return;
    const start = () => setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", start);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", start);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="boot"
          role="dialog"
          aria-label="Start screen. Press any key or click to enter."
          onClick={() => setOpen(false)}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.35 }}
        >
          <div className="boot-title">FARREL<span>.EXE</span></div>
          <div className="boot-bar"><i /></div>
          <div className="boot-start">PRESS ANY KEY</div>
          <div className="boot-hint">or click to start</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------- Konami code: up up down down left right left right B A ----------
const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
const CONFETTI = ["#ff4fa3", "#3de6ff", "#ffd23f", "#7cff6b"];

export function Konami() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    let seq = [];
    let timer;
    const onKey = (e) => {
      seq = [...seq, e.key.length === 1 ? e.key.toLowerCase() : e.key].slice(-KONAMI.length);
      if (seq.join() !== KONAMI.join()) return;
      play(LEVEL_UP);
      setPieces(
        Array.from({ length: 48 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          dx: (Math.random() - 0.5) * 240,
          delay: Math.random() * 0.4,
          color: CONFETTI[i % CONFETTI.length],
        }))
      );
      clearTimeout(timer);
      timer = setTimeout(() => setPieces([]), 3200);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, []);

  if (!pieces.length) return null;

  return (
    <div className="confetti" aria-hidden="true">
      <div className="cheat-toast">★ CHEAT CODE ACTIVATED ★</div>
      {pieces.map((p) => (
        <i
          key={p.id}
          style={{ left: `${p.left}%`, background: p.color, animationDelay: `${p.delay}s`, "--dx": `${p.dx}px` }}
        />
      ))}
    </div>
  );
}

const ranks = ["NOOB", "EXPLORER", "BUILDER", "CODER", "BOSS", "LEGEND"];

// Game HUD: scroll = XP. Level up every 20% of the page.
export function Hud() {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);
  const [toast, setToast] = useState(null);
  const level = Math.min(Math.floor(pct / 20), 5);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.round(Math.min(Math.max(v, 0), 1) * 100);
    const nextLevel = Math.min(Math.floor(next / 20), 5);
    setPct(next);
    if (nextLevel > level) {
      setToast(`LEVEL UP! LV.${nextLevel + 1} ${ranks[nextLevel]}`);
      play(LEVEL_UP);
    }
  });

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <>
      <div className="hud" aria-hidden="true">
        <span className="hud-lv">LV.{level + 1} {ranks[level]}</span>
        <div className="hud-bar"><i style={{ width: `${pct}%` }} /></div>
        <span className="hud-score">SCORE {String(pct * 137).padStart(6, "0")}</span>
      </div>
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            className="hud-toast"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            ★ {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const roles = ["Mobile App Developer", "Web Builder", "Tech Enthusiasm", "Lifelong Learner"];

export function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="role-rotator" aria-live="polite">
      <span className="role-prefix">class →</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          className="role-text"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

const items = ["React", "Supabase", "Figma", "Express.js", "Java", "JavaScript", "UI Design"];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i}>
            {item} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
