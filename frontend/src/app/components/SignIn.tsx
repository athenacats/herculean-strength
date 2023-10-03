"use client"; // required to tell nextjs that its a client component

import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const isFormValid = () => {
    const emailValid = /\S+@\S+\.\S+/.test(userEmail);
    const passwordValid = userPassword.length >= 6;

    return emailValid && passwordValid;
  };

  return (
    <div>
      <Form
        onSubmit={userLogin}
        className="flex flex-col h-48 justify-around items-center m-auto"
      >
        <Form.Group controlId="email">
          <Form.Control
            className="border-2  focus:border-amber-400 border-amber-600 "
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            className="border-2  border-amber-600 focus:border-amber-400"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
            required
          ></Form.Control>
        </Form.Group>

        <Button
          className="bg-amber-600 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isFormValid()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
