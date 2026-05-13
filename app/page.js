import Button from "./components/Button";
import Link from "next/link";
import Counter from "./components/useState";
import Products from "./products/page";
import ProductCard from "./components/ProductCard";

 const product = [
        { id: 4, tag: "Best Studying Kit", name: "Student Plan", price: 4, description: "Ideal for studying", featured: false},
    ];

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-green-50">
        <h1 className="text-5xl font-bold text-green-900">My SaaS is coming.</h1>
        <p className="text-xl text-gray-500">
          The product I am going to build and ship.
        </p>
        
        

        <div grid-cols-2 gap-4>
               <div className="grid grid-cols-2 gap-2 bg-transparent p-3 content-center ">
                  <div className="grid gap-3">
                    {/* This is Button Learn More */}
                    <Link href="sending">
                      <Button label="Learn More" />
                    </Link>

                    {/* This is Button Users */}
                    <Link href="users">
                      <Button className="" label="Users"/>
                    </Link>

                    {/* This is Button About */}
                    <Link href="about">
                      <Button label="About"/>
                    </Link>

                    {/* This is Button Products */}
                    <Link href="products">
                      <Button className="" label="Products"/>
                    </Link>
                  </div>    
                  <div>
                    {product.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                 </div>
            </div>
          </div>
        <p className="text-sm text-gray-300">
          Presented by OrB.
        </p>
     </main>
      
  );
}
