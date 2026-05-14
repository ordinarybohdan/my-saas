export default function Button({label, className = " bg-green-800 hover:bg-green-50 hover:text-green-800 hover:shadow-lg "}){
    return(
        <button className={`rounded-lg min-w-36 px-6 py-3 text-white font-semibold ${className}`}>
            {label}
        </button>
   );
}

