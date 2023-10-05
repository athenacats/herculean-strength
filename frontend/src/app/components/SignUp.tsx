"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const isFormValid = () => {
    const emailValid = /\S+@\S+\.\S+/.test(userEmail);
    const passwordValid =
      userPassword.length >= 6 && userPassword === confirmPassword;

    return emailValid && passwordValid;
  };

  return (
    <div className="h-96 flex flex-col justify-around items-center pt-10">
      <h3 className="text-center text-4xl">Sign up</h3>
      <Form
        onSubmit={userLogin}
        className="flex flex-col h-48 justify-around items-center m-auto"
      >
        <Form.Group controlId="name">
          <Form.Control
            className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
            type="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            className="border-2 w-52 pl-2 rounded-lg focus:border-amber-400 border-amber-600 "
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            className="border-2 w-52 pl-2 rounded-lg border-amber-600 focus:border-amber-400"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Control
            className="border-2 w-52 pl-2 rounded-lg border-amber-600 focus:border-amber-400"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          ></Form.Control>
        </Form.Group>
        <Button
          className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isFormValid()}
        >
          Sign Up
        </Button>
      </Form>
      <div className="m-100">
        Existing customer?
        <Link
          href="/signin"
          className="underline decoration-1 hover:cursor-pointer"
        >
          {" "}
          Log in to your account
        </Link>
      </div>
    </div>
  );
}
