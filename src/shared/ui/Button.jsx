import './Button.css';

export function Button({ children, onClick, disabled, className = '' }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}