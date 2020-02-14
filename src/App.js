import React from "react";
import { finishLoading, updateData } from "./actions";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";

class Loading extends React.Component {
  componentDidMount() {
    this.invervalId = setInterval(() => {
      console.log(Date.now());
    }, 1000);
  }

  componentWillUnmount() {
    console.log("will unmount");
    clearInterval(this.invervalId);
  }

  render() {
    return <p>Loading...</p>;
  }
}

class App extends React.Component {
  componentDidMount() {
    const { finishLoading } = this.props;
    console.log("componentDidMount");

    setTimeout(() => {
      console.log("llamada a la API exitosa");
      finishLoading();
    }, 3000);
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    const { loading, data } = this.props;
    return loading ? (
      <Loading />
    ) : (
      <>
        <h1>Intro a React</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.props.updateData({
        data: [
          {
            id: 1,
            name: "Ivan",
            lastName: "Medina"
          }
        ]
      });
    }
  }
}

const mapStateToProps = ({ loading, data }) => ({
  loading,
  data
});

const mapDispathToProps = dispatch => ({
  finishLoading: () => dispatch(finishLoading()),
  updateData: newData => dispatch(updateData(newData))
});

export default compose(
  // withStyles,
  // withRouter,
  connect(mapStateToProps, mapDispathToProps)
)(App);
