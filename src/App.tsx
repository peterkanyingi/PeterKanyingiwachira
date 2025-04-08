import { useState } from "react";

export default function DynamicListManager() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-teal-600 mb-4">
        Dynamic List Manager
      </h1>
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
          className="flex-1 border p-2 rounded-l-md outline-none"
        />
        <button
          onClick={addItem}
          className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600"
        >
          Add Item
        </button>
      </div>
      <ul className="mt-4 border p-2 rounded-md bg-gray-100">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
