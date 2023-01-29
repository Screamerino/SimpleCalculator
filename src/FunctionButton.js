
export default function FunctionButton({ buttonValue, onClick }) {
    return (
      <button className="calculator__key calculator__key--operator" type="button" onClick={onClick}>
        {buttonValue}
      </button>
    );
  }