import './Chip.css';

export function Chip({ children, onClick, selected }) {
  return (
    <button
      className={`chip ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}