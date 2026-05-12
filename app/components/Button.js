export default function Button({label, color = "white"}){
    return(
        <button className={`rounded-4xl bg-${color} px-6 py-3 text-green-900 font-semibold hover:bg-green-900 hover:text-green-50`}>
            {label}
        </button>
   );
}