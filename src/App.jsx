import { useState } from "react";

function App() {
  const [color, setColor] = useState("lime");

  const colors = [
    "red",
    "green",
    "blue",
    "purple",
    "pink",
    "orange",
    "cyan",
    "black",
    "gold",
    "teal",
  ];

  return (
    <div
      className="w-full h-screen duration-500 flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <p className="text-lg md:text-xl font-semibold text-white mb-10">
        Current Color: <span className="uppercase">{color}</span>
      </p>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white p-4 rounded-2xl">
          {colors.map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className={`outline-none px-4 py-2 rounded-2xl text-white font-bold hover:scale-105 transition-transform duration-300`}
              style={{ backgroundColor: clr }}
            >
              {clr.toLocaleUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
