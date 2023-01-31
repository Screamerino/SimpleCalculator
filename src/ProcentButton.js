import Button from "./Button";

export default class ProcentButton extends Button {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.buttonValue = '%';
  }

  execute() {
    let resultNumber = parseFloat(this.props.number) / 100;
    return {
      result: resultNumber,
      number: resultNumber + "",
    };
  }

  // render() {
  //   return (
  //     <Button
  //       buttonValue="%"
  //       onClick={this.props.onClick}
  //       execute={this.execute}
  //     />
  //   );
  // }
}
