import React from "react";
import ItemList from "../item-list/item-list";
import {
    withData,
    withChildFunction,
    withSwapiService,
    compose
} from '../hoc-helpers';


const renderName = ({name}) => <span> {name} </span>;
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodToProps = (swapiSevice) => {
    return {
        getData: swapiSevice.getAllPeople
    };
};
const mapPlanetMethodToProps = (swapiSevice) => {
    return {
        getData: swapiSevice.getAllPlanets
    };
};

const mapStarshipMethodToProps = (swapiSevice) => {
    return {
        getData: swapiSevice.getAllStarships
    };
};


const PersonList = compose(
    withSwapiService(mapPersonMethodToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodToProps),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList);


export {
    PersonList,
    PlanetList,
    StarshipList
};