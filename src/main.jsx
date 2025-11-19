import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import emailjs from "@emailjs/browser";

emailjs.init("tTYSXYp4LOzNoH97K");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
