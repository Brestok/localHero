export function Button({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = "",
}) {
  const baseStyles =
    "px-4 py-2 rounded text-black font-bold focus:outline-none";
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-base",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
