"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
//import { StrengthApp } from "./../AppProvider";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  //const { state, dispatch } = useContext(StrengthApp);
  // const { userInfo } = state;

  const userSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .post("api/register", {
        name: userName,
        email: userEmail,
        password: userPassword,
      })
      .then(() => router.push("/"))
      /*dispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      router.push("/");*/
      .catch((err) => console.log(err));
  };

  const emailRegex = /\S+@\S+\.\S+/;
  const isEmailValid = emailRegex.test(userEmail);
  const isPasswordValid = userPassword.length >= 6;
  const doPasswordsMatch = userPassword === confirmPassword;

  const isFormValid = () => {
    return isEmailValid && isPasswordValid && doPasswordsMatch;
  };

  return (
    <div className="h-96 flex flex-col justify-around items-center pt-10">
      <h3 className="text-center text-4xl">Sign up</h3>
      <Form
        onSubmit={userSignUp}
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
      <div className="pt-2">
        {!isEmailValid && <h4 className="text-sm">* Email is not valid</h4>}
        {!isPasswordValid && (
          <h4 className="text-sm">
            * Password should be more than 6 characters long
          </h4>
        )}
        {!doPasswordsMatch && (
          <h4 className="text-sm">* Passwords do not match</h4>
        )}
      </div>
    </div>
  );
}
