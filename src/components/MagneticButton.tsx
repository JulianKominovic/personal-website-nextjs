"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
// https://gist.github.com/DarkoTrpevski/419872908188cdac97af7e9c2b17caaa
const MagneticButton = ({ children }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      const btn = btnRef.current;
      btn.addEventListener("mousemove", onMouseMove);
      btn.addEventListener("mouseout", onMouseOut);
      return () => {
        btn.removeEventListener("mousemove", onMouseMove);
        btn.removeEventListener("mouseout", onMouseOut);
      };
    }
  }, []);

  const onMouseMove = (e) => {
    const btn = btnRef.current;
    const bounds = btn.getBoundingClientRect();
    const x = e.pageX - bounds.left - bounds.width / 2;
    const y = e.pageY - bounds.top - bounds.height / 2;
    btn.children[0].style.transform =
      "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  };

  const onMouseOut = (e) => {
    const btn = btnRef.current;
    btn.children[0].style.transform = "translate(0px, 0px)";
  };

  return (
    <Button ref={btnRef} variant={"ghost"} className="MagneticButton">
      <span> {children}</span>
    </Button>
  );
};

export default MagneticButton;
