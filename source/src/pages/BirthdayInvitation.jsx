import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaCalendarAlt, FaClock, FaWaze } from "react-icons/fa";

// --- ANIMACIONES CSS PURAS ---
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.2); }
  50% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
  100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
`;

const BirthdayInvitation = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0, expired: false
  });

  const whatsappNumber = "573105551411"; 
  const whatsappMessage = encodeURIComponent("¡Hola! Confirmo mi asistencia al cumpleaños número 2 de Gabriella. 🎉");

  const address = "TV 65 # 59 - 35 sur, Bogotá";
  const mapQuery = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const wazeUrl = `https://waze.com/ul?q=${mapQuery}&navigate=yes`;

  useEffect(() => {
    const eventDate = new Date("April 12, 2026 14:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          expired: false
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Card initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <TopDecor>
            <AgeCircle animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
              2
            </AgeCircle>
          </TopDecor>
        </motion.div>

        <motion.div variants={itemVariants}>
          <PreTitle>Te invito a celebrar el cumpleaños de</PreTitle>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <MainName
            animate={{ 
              scale: [1, 1.02, 1],
              textShadow: ["2px 2px 4px rgba(0,0,0,0.1)", "0px 0px 10px rgba(219, 147, 165, 0.4)", "2px 2px 4px rgba(0,0,0,0.1)"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Gabriella
          </MainName>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Subtitle>
            ¡Acompáñanos a celebrar sus 2 Añitos!<br/>
            Una tarde llena de dulzura
          </Subtitle>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Divider animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            ✿ ❀ ✿
          </Divider>
        </motion.div>

        <motion.div variants={itemVariants}>
          <DateTimeContainer>
            <DateBox>
              <FaCalendarAlt color="#D4AF37" size={22} />
              <TextCol>
                <strong>12 de Abril</strong>
                <span>del 2026</span>
              </TextCol>
            </DateBox>
            <TimeBox>
              <FaClock color="#D4AF37" size={22} />
              <TextCol>
                <strong>2:00 PM</strong>
                <span>Hora exacta</span>
              </TextCol>
            </TimeBox>
          </DateTimeContainer>
        </motion.div>

        <motion.div variants={itemVariants}>
          <CountdownContainer>
            {timeLeft.expired ? (
              <ExpiredText>¡Llegó el gran día!</ExpiredText>
            ) : (
              <CountdownGrid>
                <TimeItem><span>{timeLeft.days}</span><small>Días</small></TimeItem>
                <TimeItem><span>{timeLeft.hours}</span><small>Horas</small></TimeItem>
                <TimeItem><span>{timeLeft.minutes}</span><small>Min</small></TimeItem>
                <TimeItem><span>{timeLeft.seconds}</span><small>Seg</small></TimeItem>
              </CountdownGrid>
            )}
          </CountdownContainer>
        </motion.div>

        <motion.div variants={itemVariants}>
          <LocationSection>
            <h3>Santa Elena Reservado</h3>
            <p>TV 65 # 59 - 35 sur</p>
            <p>Salón # 1</p>
            
            <MapButtons>
              <MapBtn href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt /> Google Maps
              </MapBtn>
              <MapBtn $waze href={wazeUrl} target="_blank" rel="noopener noreferrer">
                <FaWaze /> Waze
              </MapBtn>
            </MapButtons>
          </LocationSection>
        </motion.div>

        <motion.div variants={itemVariants}>
          <FooterText>
            Tu presencia es nuestro mejor regalo.<br/>
            <strong>¡Te esperamos!</strong>
          </FooterText>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ConfirmButton
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            animate={{ boxShadow: ["0px 4px 15px rgba(37, 211, 102, 0.2)", "0px 0px 20px rgba(37, 211, 102, 0.6)", "0px 4px 15px rgba(37, 211, 102, 0.2)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
          >
            <FaWhatsapp size={20} />
            Confirmar Asistencia
          </ConfirmButton>
        </motion.div>
      </Card>
    </Container>
  );
};

// --- ESTILOS OPTIMIZADOS ---

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: transparent; 
  padding: 1rem; /* Menos padding en contenedor para ganar espacio */
  font-family: 'Georgia', serif;
  position: relative;
  z-index: 10;
  overflow-x: hidden; /* Evita scroll horizontal */
`;

const Card = styled(motion.div)`
  /* Transparencia del 85% para ver el fondo */
  background: rgba(255, 255, 255, 0.85); 
  backdrop-filter: blur(5px); /* Efecto de desenfoque opcional */
  border-radius: 30px;
  padding: 2.5rem 1.5rem;
  width: 92%; /* Ocupa casi todo el ancho en móviles */
  max-width: 450px;
  text-align: center;
  box-shadow: 0 15px 35px rgba(0,0,0,0.12); 
  border: 2px solid rgba(248, 229, 229, 0.5);
  position: relative;
  overflow: hidden;

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    width: 90%; /* Deja ver un poco más el fondo a los lados */
  }
`;

const TopDecor = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const AgeCircle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px double #D4AF37;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #D4AF37;
  background: #fffbfa;
`;

const PreTitle = styled.h3`
  font-size: 1rem;
  color: #a88d75;
  font-weight: 400;
  margin: 0;
  font-style: italic;
`;

const MainName = styled(motion.h1)`
  font-family: 'Great Vibes', cursive; 
  font-size: 4.2rem; 
  color: #db93a5; 
  margin: -0.2rem 0 0.2rem 0;
  font-weight: normal;

  @media (max-width: 480px) {
    font-size: 3.5rem; /* Ajuste para que el nombre no sea gigante en móvil */
  }
`;

const Subtitle = styled.p`
  font-size: 0.88rem;
  color: #5d4a3e;
  line-height: 1.4;
  margin-bottom: 0.8rem;
`;

const Divider = styled(motion.div)`
  color: #f0c9d1;
  font-size: 1rem;
  letter-spacing: 5px;
  margin: 0.8rem 0;
`;

const DateTimeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 0.8rem;
  background: rgba(255, 251, 250, 0.7);
  padding: 0.8rem 0.4rem;
  border-radius: 15px;
  border: 1px solid #f8e5e5;

  @media (max-width: 360px) {
    flex-direction: column; /* Apila fecha y hora en celulares muy pequeños */
    gap: 10px;
    align-items: center;
  }
`;

const DateBox = styled.div` display: flex; align-items: center; gap: 8px; `;
const TimeBox = styled.div` display: flex; align-items: center; gap: 8px; `;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  strong { color: #5d4a3e; font-size: 0.85rem; }
  span { color: #a88d75; font-size: 0.7rem; }
`;

const CountdownContainer = styled.div` margin: 1rem 0; `;

const CountdownGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

const TimeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(253, 250, 246, 0.8);
  border: 1px solid #eaddd7;
  border-radius: 10px;
  padding: 6px 8px;
  min-width: 50px;
  
  span { font-size: 1.1rem; font-weight: bold; color: #db93a5; }
  small { font-size: 0.55rem; color: #a88d75; text-transform: uppercase; font-weight: bold; }
`;

const ExpiredText = styled.h3` color: #db93a5; font-style: italic; `;

const LocationSection = styled.div`
  margin: 1.2rem 0;
  h3 { color: #5d4a3e; margin: 0 0 4px 0; font-size: 1.05rem; }
  p { color: #7a6352; margin: 1px 0; font-size: 0.82rem; }
`;

const MapButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

const MapBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  background: white;
  color: #5d4a3e;
  padding: 8px 12px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: bold;
  border: 1px solid #eaddd7;
  transition: all 0.3s ease;

  &:hover, &:active {
    background: ${(props) => (props.$waze ? '#e6f3fa' : '#fce8e6')};
    color: ${(props) => (props.$waze ? '#33a5dd' : '#d93025')};
    border-color: ${(props) => (props.$waze ? '#33a5dd' : '#d93025')};
    animation: ${glowAnimation} 1.5s infinite;
  }
`;

const FooterText = styled.p`
  font-size: 0.82rem;
  color: #a88d75;
  margin: 1.2rem 0;
  font-style: italic;
  strong { color: #D4AF37; font-size: 0.95rem; font-style: normal; display: block; margin-top: 2px; }
`;

const ConfirmButton = styled(motion.button)`
  background: #25d366;
  color: white;
  border: none;
  padding: 0.8rem 1.4rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  width: 100%;
  cursor: pointer;
`;

export default BirthdayInvitation;