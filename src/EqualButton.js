
export default function EqualButton({ onClick }) {
    return (
      <button className="calculator__key calculator__key--enter" type="button" onClick={onClick}>
        =
      </button>
    );
  }