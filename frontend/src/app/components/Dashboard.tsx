"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();

  if (session === null) redirect("/signin");

  const handleSignOut = async () => {
    try {
      await signOut();
      redirect("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col justify-between h-96 items-center">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        <button
          onClick={() => handleSignOut()}
          className="bg-amber-600 p-2 rounded-xl "
        >
          Log Out
        </button>
      </div>
      <Link href="/newuser">
        <button className="m-auto border-solid border-b-2 border-amber-600 hover:text-xl">
          New Here? Lets set up your profile!
        </button>
      </Link>
    </div>
  );
}
