import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-100">
      <h1>Welcome to Herculean Strength</h1>
      <h3>Your strength journey starts here</h3>
      <div className="button-container flex">
        <Link href="/signup">
          <button className="button">New User</button>
        </Link>
        <Link href="/signin">
          <button className="">Returning User</button>
        </Link>
      </div>
    </div>
  );
}
