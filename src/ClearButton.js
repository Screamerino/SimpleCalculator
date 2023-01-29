
export default function ClearButton({ onClick }) {
    return (
      <button className="calculator__key" type="button" onClick={onClick}>
        AC
      </button>
    );
  }