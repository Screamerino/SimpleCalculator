export default function ProcentButton({ onClick }) {
    return (
      <button className="calculator__key" type="button" onClick={onClick}>
        {"%"}
      </button>
    );
  }