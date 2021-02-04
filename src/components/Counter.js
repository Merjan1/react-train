import React from "react";

class Counter extends React.Component {
  state = {
    // state sempre é um atributo que recebe um objjeto literal
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // Todo componente de classe tem o método render
    // o render é chamado novamente a cada momento em que o this.setState() é chamado
    return (
      <div style={{ margin: "1rem" }}>
        <button onClick={this.handleDecrement}>-</button>
        <span style={{ padding: "1rem" }}>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
