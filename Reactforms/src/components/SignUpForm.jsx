import React, { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState("");

  const validateForm = () => {
    if (username.length < 8) {
      setValidationError("Username must be at least 8 characters long");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.token) {
        setToken(data.token);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2 className="header1">Sign Up!</h2>
      {error && <p>{error}</p>}
      {validationError && <p style={{ color: "red" }}>{validationError}</p>}
      <form onSubmit={handleSubmit}>
        <label className="title">
          Username: <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <br />
        </label>
        <label className="title">
          Password: <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />{" "}
          <br />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}
