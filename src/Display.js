
export default function Display(props) {
    return (
      <div className="calculator__output">
        <h2>
          {props.number + (props.funcType || "") + (props.otherNumber || "")}
        </h2>
        <p>{props.result}</p>
      </div>
    );
  }