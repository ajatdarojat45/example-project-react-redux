import { Component } from "react";
import { connect } from "react-redux";

class Transaction extends Component {
  constructor() {
    super();
  }

  handleInc = () => {
    this.props.tambah(20);
  };

  render() {
    console.log(this.props, "ini props");

    return (
      <div>
        <h1>Transaction</h1>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>

        <button onClick={this.handleInc}>Inc</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter,
    pengguna: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambah: (param) => dispatch({ type: "counter/increment", payload: param }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
