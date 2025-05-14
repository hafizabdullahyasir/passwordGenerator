// "use client";
// import { useState, useEffect, useCallback, useRef } from "react";

// export default function Hero() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordRef = useRef(null);

//   const copypassword = useCallback(() => {
//     passwordRef.current?.select();

//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*_+={}[]";
//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   useEffect(() => {
//     passwordGenerator();

//     //    return () => {
//     //      second
//     //    }
//   }, [length, numberAllowed, charAllowed, setPassword, passwordGenerator]);

//   return (
//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-500 bg-gray-700">
//       <h1 className="text-2xl text-center text-white my-[10]">
//         Password Generator
//       </h1>
//       <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//           type="text"
//           value={password}
//           className="outline-none w-full py-1 px-3 bg-white"
//           placeholder="password"
//           readOnly
//           ref={passwordRef}
//         />
//         <button
//           onClick={copypassword}
//           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-[blue]"
//         >
//           copy
//         </button>
//       </div>
//       <div className="flex text-sm gap-x-2 mb-2">
//         <div className="flex items-center gap-x-1">
//           <input
//             type="range"
//             min={1}
//             max={25}
//             value={length}
//             className="cursor-pointer"
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>length: {length}</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             id="numberInput"
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>
//         <div className="flex items-center gap-x-1">
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="characterInput"
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Hero() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copypassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_+={}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-xl mx-auto p-4 my-8 rounded-lg bg-gray-700 text-white shadow-lg">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6">
        Password Generator
      </h1>

      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6">
        <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className="flex-1 px-3 py-2 rounded-md text-black bg-white outline-none text-base"
        />
        <button
          onClick={copypassword}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap"
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
        {/* Length Slider */}
        <div className="flex items-center gap-2">
          <label htmlFor="length" className="whitespace-nowrap">
            Length:
          </label>
          <input
            id="length"
            type="range"
            min={1}
            max={25}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer w-full sm:w-40"
          />
          <span>{length}</span>
        </div>

        {/* Numbers checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="numberInput"
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </div>

        {/* Characters checkbox */}
        <div className="flex items-center gap-2">
          <input
            id="characterInput"
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Include Symbols</label>
        </div>
      </div>
    </div>
  );
}
