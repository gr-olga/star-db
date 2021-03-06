import React, {Component} from "react";

import './app.css'
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";

import PeoplePage from "../../pages/people-page";
import PlanetPage from "../../pages/planet-page";
import StarshipPage from "../../pages/starship-page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";


export default class App extends Component {


    state = {
        swapiService: new SwapiService()
    };


    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {swapiService: new Service()};
        });
    };


    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet/>
                            <Route path="/"
                                   render={() => <h2> Welcome to StarDB </h2>}
                                   exact/>
                            <Route path="/people"
                                   render={() => <h2>  People </h2>}
                                   exact/>
                            <Route path="/people" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships" exact component={StarshipPage}/>
                            <Route path="/starships/:id"
                            render={({match, location, history}) => {
                                const {id} = match.params;
                               return <StarshipDetails itemId = {id} />
                            }}
                           />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
