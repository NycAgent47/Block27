import React from "react";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import "./App.css";

export default function App() {
  return (
    <div>
      <SignUpForm />
      <Authenticate />
    </div>
  );
}
