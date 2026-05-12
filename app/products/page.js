import { turborepoTraceAccess } from "next/dist/build/turborepo-access-trace";

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
                    <div 
                        key={product.id}
                        className={`rounded-x1 border p-6 shadow-sm ${product.featured ? "border-green-500 border-2 bg-green-50" : ""}`}>
                        {product.featured && (
                            <span className="text-xs font-bold text-green-600 uppercase tracking-wide">
                                Most Popular
                            </span>
                        )}    
                        <h3 className="text-xs font-bold">{product.tag}</h3>
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-3xl font-bold mt-2">${product.price}<span className="text-sm font-normal text-gray-500">/mo</span></p>
                        <p className="text-gray-500 mt-3">{product.description}</p>
                        <button className="mt-6 w-full rounded-lg bg-green-700 py-2 text-white font-semibold hover:bg-green-800">
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </main>
    );
}