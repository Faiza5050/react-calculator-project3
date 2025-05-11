import React, { useState } from "react";
import { BackspaceIcon } from "@heroicons/react/24/outline";

const Calculator = () => {
  const [data, setData] = useState("");

  const btn = (event) => {
    console.log(event.target.value);
    setData(data.concat(event.target.value));
  };

  const result = () => {
    setData(eval(data).toString());
  };

  const back = () => {
    setData(data.slice(0, -1));
  };

  const clear = () => {
    setData("");
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/imag.jpg')" }}
    >
      <div className="min-h-screen flex items-center justify-center md:mr-60 bg-transparent p-4">
        <div className="bg-green-800 shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-sm">
          <input
            type="text"
            placeholder="0"
            value={data}
            className="w-full h-[100px] text-right text-3xl sm:text-4xl border border-black rounded px-4 py-2 mb-10 focus:outline-none"
            readOnly
          />

          <div className="grid grid-cols-4 gap-3">
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={back}
            >
              <BackspaceIcon className="h-6 w-6" />
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={clear}
            >
              AC
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="/"
            >
              /
            </button>

            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="*"
            >
              *
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="7"
            >
              7
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="8"
            >
              8
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="9"
            >
              9
            </button>

            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="-"
            >
              -
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="4"
            >
              4
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="5"
            >
              5
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="6"
            >
              6
            </button>

            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="+"
            >
              +
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="1"
            >
              1
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="2"
            >
              2
            </button>
            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="3"
            >
              3
            </button>

            <button
              className="bg-gray-200 hover:bg-black hover:text-white text-2xl sm:text-3xl font-semibold py-3 rounded transition flex items-center justify-center"
              onClick={btn}
              value="0"
            >
              0
            </button>
          </div>

          <div>
            <button
              className="bg-gray-900 hover:bg-white text-white hover:text-black text-3xl sm:text-5xl font-semibold py-4 w-full mt-4 rounded transition items-center justify-center"
              onClick={result}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
