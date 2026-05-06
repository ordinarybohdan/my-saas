export default function Button({label, color = "green"}){
    return(
        <button className={`rounded-4xl bg-${color}-500 px-6 py-3 text-white font-semibold hover:bg-${color}-700`}>
            {label}
        </button>
    );
}