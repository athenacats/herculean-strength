"use client"; // required to tell nextjs that its a client component

import Link from "next/link";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const userLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email: userEmail,
        password: userPassword,
        redirect: false,
      });
      if (res!.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("dashboard");
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const isEmailValid = emailRegex.test(userEmail);
  const isPasswordValid = userPassword.length >= 6;

  const isFormValid = () => {
    const emailValid = /\S+@\S+\.\S+/.test(userEmail);
    const passwordValid = userPassword.length >= 6;

    return emailValid && passwordValid;
  };

  return (
    <div className="h-96 flex flex-col justify-around items-center pt-10">
      <h3 className="text-center text-4xl">Log in to your account</h3>
      <Form
        onSubmit={userLogin}
        className="flex flex-col h-48 justify-around items-center m-auto"
      >
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

        <Button
          className="bg-amber-600 w-28 p-2 rounded-xl disabled:opacity-75 disabled:cursor-not-allowed"
          type="submit"
          disabled={!isFormValid()}
        >
          Login
        </Button>
      </Form>
      <div className="m-100">
        New customer?
        <Link
          href="/signup"
          className="underline decoration-1 hover:cursor-pointer"
        >
          {" "}
          Create your account
        </Link>
        <div className="pt-2">
          {!isEmailValid && <h4 className="text-sm">* Email is not valid</h4>}
          {!isPasswordValid && (
            <h4 className="text-sm">
              * Password should be more than 6 characters long
            </h4>
          )}
          {error && <h3 className="text-lg text-red-800"> *{error}</h3>}
        </div>
      </div>
    </div>
  );
}
