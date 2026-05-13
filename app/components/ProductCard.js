

export default function ProductCard({ product }){
    return(
        <div className={`rounded-x1 border rounded-lg p-6  content-center shadow-sm ${product.featured ? "border-blue-500 border-2 bg-blue-50" : "" }`}>
            {product.featured && (
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                    Most Popular
                </span>
            )}

            <h2 className="text-xl font-bold mt-1">{product.name}</h2>
            <p className="text-3xl font-bold mt-2">
                ${product.price}
                <span className="text-sm font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <span className="inline-block mt-3 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {product.tag}
            </span>

            <button className="mt-6 w-full rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700">
                Get Started
            </button>
        </div>
    );
}