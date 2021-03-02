import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "./SeasonDisplay.css";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, errMsg: "" };

    componentDidMount() {
        console.log("componentDidMount()");
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                });
            },
            (err) => {
                this.setState({ errMsg: err.message });
            }
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate()");
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lon: position.coords.longitude,
                });
            },
            (err) => {
                this.setState({ errMsg: err.message });
            }
        );
        this.render();
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
    renderContent() {
        console.log("render()");
        return (
            <div>
                {!this.state.lat && !this.state.errMsg && (
                    <Spinner msg="Waiting for location input..." />
                )}
                {this.state.lat && (
                    <h2 className="ui header">
                        <SeasonDisplay lat={this.state.lat} />
                    </h2>
                )}
                <br />
                {this.state.errMsg && (
                    <div className="ui message">
                        <div className="header">Error: {this.state.errMsg}</div>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
