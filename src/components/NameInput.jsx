import React, { useState } from "react";
import { Link } from "react-router-dom";

function NameInput() {
  const [name, setName] = useState("");
  const [textColor, setTextColor] = useState("black");

  const colors = [
    { name: "Red", code: "red" },
    { name: "Green", code: "green" },
    { name: "Black", code: "black" },
    { name: "Orange", code: "orange" },
    { name: "Slate", code: "#64748b" },
    { name: "Violet", code: "violet" },
    { name: "Sky", code: "#38bdf8" },
    { name: "Teal", code: "teal" },
    { name: "Lime", code: "lime" },
    { name: "Amber", code: "#92400e" },
    { name: "Gray", code: "gray" },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <input
        type="text"
        placeholder="Enter your name " 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-4 border rounded mb-4 text-xl font-bold" 
        style={{ color: textColor, backgroundColor: "white" }} 
      />
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          {colors.map((color) => (
            <button
              key={color.name}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: color.code }}
              onClick={() => setTextColor(color.code)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xl font-bold" style={{ color: textColor }}>
        {name}
      </p>
      <Link to="/">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500 mt-4">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default NameInput;
