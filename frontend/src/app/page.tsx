"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      {session === null ? (
        <div className="flex flex-col h-96 pt-10 justify-around items-center">
          <h1 className="text-4xl text-center">
            Welcome to Herculean Strength
          </h1>
          <h3 className="text-2xl text-center">
            Your strength journey starts here
          </h3>
          <div className="button-container flex gap-10">
            <Link href="/signup">
              <button className="bg-amber-600 p-2 rounded-xl">New User</button>
            </Link>
            <Link href="/signin">
              <button className="bg-amber-600 p-2 rounded-xl">
                Returning User
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-96 pt-10 justify-around items-center">
          <h1 className="text-4xl text-center">Hello {session?.user?.name}!</h1>
          <div className="button-container flex gap-10">
            <Link href="/preworkout">
              <button className="bg-amber-600 p-2 rounded-xl">
                Start a new workout
              </button>
            </Link>
            <Link href="/stats">
              <button className="bg-amber-600 p-2 rounded-xl">
                See your previous stats
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
