import React, { useEffect } from "react";
import "./snackbar.scss";

const DURATION = 2000;
let timer = null;

export const Snackbar = ({ isOpen, message, success = true, onClose }) => {
  useEffect(() => {
    timer = setTimeout(() => {
      onClose();

      clearTimeout(timer);
      timer = null;
    }, DURATION);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [isOpen]);

  return isOpen ? (
    <div
      className={
        "snackbar contrast-color " +
        (success ? "success-background" : "error-background")
      }
    >
      {message}
    </div>
  ) : (
    ""
  );
};
