/* eslint-disable react/prop-types */

const Input = ({ label, name, type, handleChange, error }) => {
  return (
    <div className="w-[80%] m-auto flex flex-col justify-center items-start gap-2">
      <label className="text-[16px] text-white" htmlFor="">
        {label}
      </label>
      <input
        onChange={handleChange}
        className="w-full p-2 outline-none rounded-md bg-yellow-300 opacity-90"
        type={type}
        name={name}
        id=""
      />
      {error && error[name] && (
        <p className="text-[12px] text-red-500">{error[name]}</p>
      )}
    </div>
  );
};

export default Input;
