interface InputProps {
  type?: "text" | "number";
  text: string;
  value: string | number;
  readOnly?: boolean;
  valueChanged?: (value: string | number) => void;
}

export default function Input({
  text,
  type,
  value,
  readOnly,
  valueChanged,
}: InputProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2">{text}</label>
      <input
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${readOnly ? "" : "focus:bg-white"}
        `}
        type={type && "text"}
        value={value}
        readOnly={readOnly}
        onChange={(event) => valueChanged?.(event.target.value)}
      />
    </div>
  );
}
