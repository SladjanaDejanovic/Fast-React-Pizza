import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800 py-3 px-4 inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
