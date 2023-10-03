"use client"; // required to tell nextjs that its a client component

import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SignIn() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={userLogin}>
        <input
          className="border-2  required:border-rose-600  valid:border-amber-600 "
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="border-2  required:border-rose-600  valid:border-amber-600 "
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="bg-amber-600 p-2 rounded-xl" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
