import Button from "./components/Button";
import Link from "next/link";
import Counter from "./components/useState";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-green-50">
        <h1 className="text-5xl font-bold text-green-900">My SaaS is coming.</h1>
        <p className="text-xl text-gray-500">
          The product I am going to build and ship.
        </p>
        
        {/* This is Buttone Learn More */}
        <Link href="about">
          <Button label="Learn More" />
        </Link>

        {/* Counter Function: counting the user's clicks */}
        {/* <Counter /> */}
        
        <p className="text-sm text-gray-300">
          Presented by OrB.
        </p>
     </main> 
  );
}
