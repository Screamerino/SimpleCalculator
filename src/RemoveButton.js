export default function RemoveButton({ onClick }) {
    return (
      <button className="calculator__key" type="button" onClick={onClick}>
        {"<-"}
      </button>
    );
  }