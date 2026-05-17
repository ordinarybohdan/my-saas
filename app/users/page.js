"use client";
import {useState, useEffect } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ((res) => res.json())
        .then ((data) => {
            setUsers(data)
            setLoading(false);
        });
    }, []);

    if (loading) {
        return (
        <main className="p-8">
            <div className="flex flex-col gap-4">
                {[1, 2, 3].map((n) => (
                    <div key={n} className="h-16 rounded-lg bg-gray-200 animate-pulse"/>
                ))}
            </div>
        </main>
        ) 
    }
    // <p className="p-8 text-gray-500"> Loading... </p>;

    const filteredUsers = users.filter((user) =>
         user.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            <input
                type="text"
                placeholder="Search users..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded-lg px-4 py-2 w-full max-w-md mb-4"
            />

             <div className="grid grid-cols-2 gap-4">
                    { filteredUsers.map((user) => (
                        <div key={user.id} className="rounded-lg border p-4 shadow-sm">
                            <p className="font-semibold text-lg">{user.name}</p>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    ))}

                    { filteredUsers.length === 0 && (
                        <p className="text-gray-400 mt-4">No users found for {search}</p>
                    )}
                </div>
        </main>
    )
}