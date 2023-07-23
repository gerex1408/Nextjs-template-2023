import Link from "next/link";

export const metadata = {
  title: "Login page",
  description: "Login page",
};

export default function Page() {
  return (
    <div>
      <h1>Login!</h1>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
