import withSwapiService from "../hoc-helpers/with-swapi-service";
import ItemDetails, {Record} from "../item-details";
import React from "react";

const PlanetDetails = (props) => {

    return (
        <ItemDetails{...props}>
            <Record field="population" label="Population"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    );
};
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    };
};
export default withSwapiService(mapMethodsToProps)(PlanetDetails);