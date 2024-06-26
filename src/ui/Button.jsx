import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "text-sm bg-yellow-400 uppercase tracking-wide rounded-full font-semibold text-stone-800  inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm border-2 border-stone-300 uppercase tracking-wide rounded-full font-semibold text-stone-400  inline-block hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:bg-yellow-300 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
