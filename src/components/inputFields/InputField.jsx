/* eslint-disable react/prop-types */


const InputField = ({ label, type, id, value, onchange}) => {
  
  return (
    <div className="relative border-2 border-gray-800 hover:border-cyan-700 rounded-md">
      <label
        htmlFor={id}
        className="absolute -top-3.5 left-2 text-sm text-gray-900 bg-white px-1.5"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(data) => onchange(data)}
        className="w-full    py-1.5 px-3 text-gray-900 outline-none"
      />
    </div>
  );
};

export default InputField;
