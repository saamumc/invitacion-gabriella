import React, { useMemo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// --- CONFIGURACIÓN DE LOS MOÑOS ---
const createBows = (num) => {
  return Array.from({ length: num }).map((_, i) => ({
    id: i,
    // Tamaños tiernos (ni muy grandes ni muy chiquitos)
    size: Math.random() * (65 - 25) + 25, 
    x: Math.random() * 100, 
    y: Math.random() * 100, 
    duration: Math.random() * (18 - 12) + 12, // Movimiento suave
    delay: Math.random() * 8, 
    // Paleta de colores súper tierna (rosas, melocotón y dorado)
    color: [
      "#db93a5", // Fucsia suave
      "#f0c9d1", // Rosa claro (bebé)
      "#D4AF37", // Dorado elegante
      "#fbc2c8", // Melocotón tierno
    ][Math.floor(Math.random() * 4)],
  }));
};

const AnimatedBackground = () => {
  const bows = useMemo(() => createBows(22), []); // 22 moños flotando (cantidad perfecta)

  return (
    <BackgroundWrapper>
      {bows.map((bow) => (
        <BowShape
          key={bow.id}
          as={motion.svg}
          viewBox="0 0 100 100" // Lienzo del moño
          width={bow.size}
          height={bow.size}
          style={{
            left: `${bow.x}%`,
            top: `${bow.y}%`,
          }}
          // --- ANIMACIÓN PARA QUE PAREZCAN FLOTAR EN EL VIENTO ---
          animate={{
            y: [0, -180, 0], // Suben suavemente
            x: [0, Math.random() * 30 - 15, 0], // Se mecen un poco de lado
            rotate: [-15, 15, -15], // Giran como si el viento los moviera
            opacity: [0, 0.85, 0], // Aparecen y desaparecen sutilmente
            scale: [1, 1.1, 1], // Palpitan un poquitito
          }}
          transition={{
            duration: bow.duration,
            repeat: Infinity,
            delay: bow.delay,
            ease: "easeInOut",
          }}
        >
          {/* --- DIBUJO DEL MOÑO COQUETTE (Tierno y detallado) --- */}
          <g fill={bow.color}>
            {/* Cinta cayendo izquierda */}
            <path d="M 45 55 C 35 70, 20 85, 15 95 C 25 90, 35 92, 40 95 C 45 80, 48 70, 50 60 Z" />
            {/* Cinta cayendo derecha */}
            <path d="M 55 55 C 65 70, 80 85, 85 95 C 75 90, 65 92, 60 95 C 55 80, 52 70, 50 60 Z" />
            
            {/* Lazo gordito izquierdo */}
            <path d="M 50 50 C 30 15, 2 30, 10 55 C 15 75, 40 65, 50 50 Z" />
            {/* Lazo gordito derecho */}
            <path d="M 50 50 C 70 15, 98 30, 90 55 C 85 75, 60 65, 50 50 Z" />
            
            {/* Nudo central del moño */}
            <rect x="41" y="42" width="18" height="16" rx="8" />
          </g>

          {/* --- DETALLES DE BRILLO PARA DARLE VOLUMEN Y TERNURA --- */}
          <g fill="#ffffff" opacity="0.35">
            {/* Brillo lazo izquierdo */}
            <path d="M 45 50 C 35 35, 18 40, 18 52 C 18 58, 30 56, 40 50 Z" />
            {/* Brillo lazo derecho */}
            <path d="M 55 50 C 65 35, 82 40, 82 52 C 82 58, 70 56, 60 50 Z" />
            {/* Brillo nudo central */}
            <ellipse cx="46" cy="46" rx="3" ry="2" opacity="0.8" />
          </g>
        </BowShape>
      ))}
    </BackgroundWrapper>
  );
};

// --- ESTILOS ---

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: #fdfaf6; /* Fondo crema suave */
`;

const BowShape = styled.svg`
  position: absolute;
  pointer-events: none;
  
  // Sombra suave para que el moño se vea "gordito" y despegado del fondo
  filter: drop-shadow(0 5px 8px rgba(0,0,0,0.08)); 
  
  will-change: transform;
`;

export default AnimatedBackground;