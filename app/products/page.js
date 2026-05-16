import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, tag:"Starter", name: "Basic Plan", price: 9, description: "Perfect for individuals", featured: false, available: true},
    { id: 2, tag:"Best Value", name: "Pro Plan", price: 29, description: "For growing teams", featured: true, available: true},
    { id: 3, tag: "Best Team Perfomance", name: "Enterprise Plan", price: 99, description: "For large organizations", featured: false, available: true},
    { id: 4, tag: "Best Studying Kit", name: "Student Plan", price: 4, description: "Ideal for studying", featured: false, available: false},
];

export default function Products(){
    return(
        <main className="flex p-5 bg-green-50 min-h-screen justify-center items-center shadow-sm ">
            <div className="flex flex-col bg-green-800/10 py-30 px-30 rounded-4xl shadow-md max-w-512" >
                <div className="flex items-start ">
                    <h1 className="text-5xl font-bold uppercase text-green-900 mb-15">Plans</h1>
                </div>
                <div className="flex flex-col-2 gap-3 mt-auto justify-center items-stretch">
                    {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </main>
    );
}