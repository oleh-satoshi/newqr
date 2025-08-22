"use client";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

export default function ParticlesAnimation() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false, zIndex: 0 },
        detectRetina: true,
        fpsLimit: 60,
        smooth: true,

        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            onDiv: { enable: false, selectors: [], mode: [] },
            resize: true
          }
        },

        particles: {
          number: { value: 80 },
          color: {
            value: [
              "#FFD700", "#FFC300", "#FFB347", "#FFD166",
              "#FFFFFF", "#E3F2FD", "#BBDEFB", "#90CAF9"
            ]
          },
          shape: {
            type: ["circle","star"],
            options: { 
              star: { sides: 5, inset: 2 }
            }
          },

          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: false
            }
          },

          opacity: {
            value: { min: 0.3, max: 0.7 },
            animation: {
              enable: true,
              speed: 0.005,
              decay: 0,
              startValue: "random",
              sync: false,
              destroy: "min"
            }
          },

          shadow: {
            enable: false
          },

          links: { enable: false },

          move: {
            enable: true,
            direction: "none",
            random: true,
            outModes: { default: "bounce" },
            speed: { min: 0.05, max: 0.15 },
            straight: false,
            drift: 0,
            gravity: { enable: false },
            attract: { enable: false, rotate: { x: 0, y: 0 } }
          },

          wobble: {
            enable: false
          },

          twinkle: { particles: { enable: false } },

          zIndex: { value: { min: 0, max: 2 } }
        },

        pauseOnBlur: true,
        pauseOnOutsideViewport: true
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "50vh",
        zIndex: 1,
        pointerEvents: "none"
      }}
    />
  );
}
