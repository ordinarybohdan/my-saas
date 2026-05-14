

export default function ProductCard({ product }){

    // Calcilate button class here, cleanly, before JSX
    let buttonClass = "mt-6 w-full rounded py-2 font-semibold rounded-lg ";

    if(!product.available){
        buttonClass += "bg-gray-400 text-white cursor-not-allowed";
    } else if(product.featured){
        buttonClass += "bg-blue-500 text-white hover:bg-blue-800 hover:text-blue-50";
    }else{
        buttonClass += "bg-green-800/30 text-green-800 hover:bg-green-800 hover:text-green-50";
    }

    return(
        <div className={`flex flex-col rounded-lg border rounded-lg p-6 px-10 content-center shadow-sm ${product.featured ? "border-blue-500 border-2 bg-blue-50 hover:border-blue-600" : "bg-green-50 border-green-800/30 " }`}>
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
            
            {product.featured && (
                <span className="inline-block mt-3 text-xs bg-blue-500 text-white font-semibold px-2 py-1 rounded-full">
                    {product.tag}
                </span>
            )}

            <div className="mt-auto pt-6">
                <button
                disabled={!product.available}
                className={buttonClass}
                >
                {product.available ? "Get Started" : "Sold Out"}
            </button>
            </div>
        </div>
    );
}