
export default function NumberButton({ buttonValue, onClick }) {
    return (
      <button className="calculator__key" type="button" onClick={onClick}>
        {buttonValue}
      </button>
    );
  }
  