export function Button({ children, onClick, className, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
