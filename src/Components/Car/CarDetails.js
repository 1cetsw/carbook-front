import React from "react";
import { Container, Row} from 'react-bootstrap';
import LastServiceWindow from "./CarDetailsComponents/LastServiceWindow";
import AddExploitationServiceWindow from "./CarDetailsComponents/AddExploitationServiceWindow";
import AddOtherFixWindow from "./CarDetailsComponents/AddOtherFixWindow";
import ShowCarHistoryWindow from "./CarDetailsComponents/ShowCarHistoryWindows";
import ExploitationStateWindow from "./CarDetailsComponents/ExploitationStateWindow";
import OCAC from "./CarDetailsComponents/OCACWindow";
import CarInfoWindow from "./CarDetailsComponents/CarInfoWindow";

const CarDetails = () => {

    return (
        <Container>
            <Row>
                <CarInfoWindow/>
                <ExploitationStateWindow/>

            </Row>

            <Row>
                <LastServiceWindow/>
                <OCAC/>
            </Row>

            <Row>
                <AddExploitationServiceWindow/>
                <AddOtherFixWindow/>
                <ShowCarHistoryWindow/>
            </Row>
        </Container>
    )
}
export default CarDetails;