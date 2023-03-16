import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number";
  text: string;
  value: string | number;
  readOnly?: boolean;
  setState?: (value: string | number) => void;
}

export default function Input({
  text,
  type,
  value,
  readOnly,
  setState,
}: InputProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (type === "number") {
      setState?.(Number(event.target.value));
    }
    setState?.(event.target.value);
  }
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2">{text}</label>
      <input
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${readOnly ? "" : "focus:bg-white"}
        `}
        type={type}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        min="0"
        max="120"
      />
    </div>
  );
}
