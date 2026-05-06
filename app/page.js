import Image from "next/image";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-green-50">
        <h1 className="text-5xl font-bold text-green-900">My SaaS is coming.</h1>
        <p className="text-xl text-gray-500">
          The product I am going to build and ship.
          {/* <a href="https://www.producthunt.com/posts/ai-website-builder" className="text-green-500 font-bold hover:underline">
            Learn More!
          </a> */}
        </p>
        <button className="rounded-4xl bg-green-500 px-6 py-2 text-white font-semibold hover:bg-green-700">
          Get Started
        </button>
     </main> 
  );
}
