import { turborepoTraceAccess } from "next/dist/build/turborepo-access-trace";
import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, tag:"Starter", name: "Basic Plan", price: 9, description: "Perfect for individuals", featured: false},
    { id: 2, tag:"Best Value", name: "Pro Plan", price: 29, description: "For growing teams", featured: turborepoTraceAccess},
    { id: 3, tag: "Best Team Perfomance", name: "Enterprise Plan", price: 99, description: "For large organizations", featured: false},
    { id: 4, tag: "Best Studying Kit", name: "Student Plan", price: 4, description: "Ideal for studying", featured: false},
];

export default function Products(){
    return(
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-6">Plans</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {products.map((product) => (
                   <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </main>
    );
}