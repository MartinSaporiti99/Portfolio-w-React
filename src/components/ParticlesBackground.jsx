import { useEffect, useRef } from "react";
import "./ParticlesBackground.css";

export default function ParticlesBackground() {
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;

    const particles = [];
    const maxParticles = 60;
    let animationId;

    const particlePool = [];
    const getParticle = () => {
      if (particlePool.length > 0) {
        return particlePool.pop();
      }
      const particle = document.createElement("div");
      particle.className = "particle";
      return particle;
    };

    const releaseParticle = (particle) => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
      particlePool.push(particle);
    };

    const createParticle = () => {
      if (particles.length >= maxParticles) return;

      const particle = getParticle();
      const startX = Math.random() * (window.innerWidth + 200) - 100;
      const startY = Math.random() * (window.innerHeight + 200) - 100;

      const baseSpeed = 0.1 + Math.random() * 0.8;
      const angle = Math.random() * Math.PI * 2;
      const speedVariation = 0.5 + Math.random() * 1.5;

      const movementType = Math.random();
      let vx, vy;

      if (movementType < 0.7) {
        vx = Math.cos(angle) * baseSpeed * speedVariation;
        vy = Math.sin(angle) * baseSpeed * speedVariation;
      } else {
        vx = Math.cos(angle) * baseSpeed * 0.3;
        vy = Math.sin(angle) * baseSpeed * 0.3;
      }

      const life = 10000 + Math.random() * 12000;

      const size = 0.8 + Math.random() * 2.5;
      const opacity = 0.6 + Math.random() * 0.4;

      const particleData = {
        element: particle,
        x: startX,
        y: startY,
        vx: vx,
        vy: vy,
        life: life,
        maxLife: life,
        size: size,
        baseOpacity: opacity,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        floatOffset: Math.random() * Math.PI * 2,
        speedMultiplier: speedVariation,
      };

      particle.style.left = startX + "px";
      particle.style.top = startY + "px";
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.opacity = opacity;

      bg.appendChild(particle);
      particles.push(particleData);
    };

    const updateParticles = () => {
      const time = Date.now() * 0.001;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        const floatX = Math.sin(time * 0.5 + p.floatOffset) * 0.3;
        const floatY = Math.cos(time * 0.3 + p.floatOffset) * 0.2;

        p.life -= 16;

        const lifeFactor = Math.max(0, p.life / p.maxLife);
        const twinkle = 0.8 + Math.sin(time * 2 + p.floatOffset) * 0.2;
        const opacity = lifeFactor * p.baseOpacity * twinkle;

        const pulse = 1 + Math.sin(time * 1.5 + p.floatOffset) * 0.1;
        const currentSize = p.size * pulse;

        p.element.style.transform = `translate3d(${p.x + floatX}px, ${
          p.y + floatY
        }px, 0) scale(${pulse})`;
        p.element.style.opacity = opacity;
        p.element.style.width = currentSize + "px";
        p.element.style.height = currentSize + "px";

        if (
          p.life <= 0 ||
          p.x < -50 ||
          p.x > window.innerWidth + 50 ||
          p.y < -50 ||
          p.y > window.innerHeight + 50
        ) {
          releaseParticle(p.element);
          particles.splice(i, 1);
        }
      }
    };

    const animate = () => {
      updateParticles();

      if (Math.random() < 0.12 && particles.length < maxParticles) {
        createParticle();
      }

      animationId = requestAnimationFrame(animate);
    };

    for (let i = 0; i < 25; i++) {
      createParticle();
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      particles.forEach((p) => releaseParticle(p.element));
      particles.length = 0;
    };
  }, []);

  return <div ref={bgRef} className="background" />;
}
