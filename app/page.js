import Link from "next/link";
import DarkModeButton from "./components/DarkMode";

export const metadata = {
  title: "Home page",
  description: "Home page",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Home page!</h1>
      <Link href="/login">Go to login</Link>
      <DarkModeButton />
    </div>
  );
}
