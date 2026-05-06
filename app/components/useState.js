// "use client";

// import {useState} from "react";
// import Button from "./Button";

// export default function Counter(){
//     const [count, setCount] = useState(0);

//     return(
//        <div className="grid gap-2 bg-white p-4 rounded-4xl  content-center">
//             <p className="font-bold">You clicked {count} times.</p>
//             <div className="grid grid-cols-2 gap-2">
//                 <button onClick={() => setCount(count + 1)} className="bg-green-500 font-bold text-white px-4 py-2 rounded-4xl hover:bg-green-900">
//                     Click me
//                 </button> 
//                 <button onClick={() => setCount(0)} className="bg-gray-600 font-bold text-white px-4 py-2 rounded-4xl hover:bg-red-900">
//                     Reset
//                 </button>
//             </div>            
//         </div>
//     );
// }