import { useEffect } from "react";
import "./ParticlesBackground.css";

export default function ParticlesBackground() {
  useEffect(() => {
    const bg = document.querySelector(".background");
    const create = () => {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.setProperty("--start-x", `${Math.random() * 100}vw`);
      p.style.setProperty("--start-y", `${Math.random() * 100}vh`);
      p.style.setProperty("--end-x", `${Math.random() * 200 - 100}vw`);
      p.style.setProperty("--end-y", `${Math.random() * 200 - 100}vh`);
      bg.appendChild(p);
      setTimeout(() => p.remove(), 4000);
    };
    const interval = setInterval(create, 150);
    for (let i = 0; i < 5; i++) create();
    return () => clearInterval(interval);
  }, []);

  return <div className="background" />;
}
