import React, {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import "./app.css";
import PeoplePage from "../people-page";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };
componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
}


    render() {
        if (this.state.hasError){
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null

        return (
            <div className="stardb-app">
                <Header/>
                {planet}
                <div className="row mb-2 button-row">
                <button className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                    Toggle RandomPlanet
                </button>
                <ErrorButton/>
                </div>
                <PeoplePage/>

            </div>

        );
    }
}
