import React, { useEffect, useState } from "react";
import "./Typewriter.css";

export default function Typewriter({ text = "", speed = 40, className = "" }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <span className={`typewriter-text ${className}`}>
      {displayed}
      <span className="typewriter-cursor"></span>
    </span>
  );
}
