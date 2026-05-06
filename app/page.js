import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-green-50">
        <h1 className="text-5xl font-bold text-green-900">My SaaS is coming.</h1>
        <p className="text-xl text-gray-500">
          The product I am going to build and ship.
        </p>
        <Link href="about">
          <button className="rounded-4xl bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-700">
            Learn More
          </button>
        </Link>  
     </main> 
  );
}
