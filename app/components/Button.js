export default function Button({label, color = "white"}){
    return(
        <button className={`rounded-lg min-w-36 bg-${color} px-6 py-3 text-green-900 font-semibold hover:bg-green-900 hover:text-green-50`}>
            {label}
        </button>
   );
}