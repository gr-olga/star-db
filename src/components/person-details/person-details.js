import React, {Component} from "react";
import "./person-details.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";


export default class PersonDetails extends Component {
    swapiService = new SwapiService();
    state = {
        person: null,
        isLoading: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
        this.setState({isLoading: true})
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person, isLoading: false});
            })
            .catch(() => {
                this.setState({isLoading: false});
            })

    }

    render() {
        if (!this.state.person) {
            return <span> Select person from a list </span>
        }

        if (this.state.isLoading) return <Spinner/>


        const {
            id, name, gender,
            birthYear, eyeColor
        } = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="characters"/>
                <div className="card-body">
                    <h4> {name}</h4>
                    <ul className="list-group ">
                        <li className="list-group-item">
                            <span className="term"> {gender} </span>
                            <span>male</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">  {birthYear} </span>
                            <span>43</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">  {eyeColor}</span>
                            <span>red</span>
                        </li>
                    </ul>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}
