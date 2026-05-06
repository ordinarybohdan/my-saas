import Link from "next/link";
import Button from "../components/Button";

export default function About(){
    return(
        <main className="flex min-h-screen flex-col bg-green-50 items-center justify-center gap-4">
            <h1 className="text-5xl font-bold text-green-900">About</h1>
            <p className="text-gray-500">This is where I explain what my SaaS does.</p>
            <Link href="./app/page.js">
                <Button label="Go To Main Page" />
            </Link>
        </main>
    );    
}