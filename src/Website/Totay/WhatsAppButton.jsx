import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const [whatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWhatsApp(true);
    }, 1500);
  }, []);

  return (
    <a
      id="whatsapp-btn"
      target="_blank"
      href="https://wa.me/+923263375900"
      style={{
        width: `${whatsApp ? "45px" : "0"}`,
        height: `${whatsApp ? "45px" : "0"}`,
        backgroundColor: "#f16126",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        borderRadius: "50%",
        cursor: "pointer",
        zIndex: "1000",
        transition: "backgroundColor 0.3s, opacity 0.5s, visibility 0.5s",
        opacity: `${whatsApp ? "1" : "0"}`,
        visibility: `${whatsApp ? "visible" : "hidden"}`,
      }}
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{
          fontSize: "25px",
          padding: "5px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "yellow",
        }}
      />
    </a>
  );
};

export default WhatsAppButton;
