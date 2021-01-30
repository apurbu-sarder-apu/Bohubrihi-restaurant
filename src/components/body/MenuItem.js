import React from 'react';
import { Card, CardImage, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';
import CardImg from 'reactstrap/lib/CardImg';

const MenuItem = props => {
    return (
    <div>
        <Card style= {{margin: "10px" }}>
            <CardBody>
                <CardImg 
                width="100%" 
                alt={props.dish.name} 
                src={props.dish.image} 
                style={ {opacity: "0.5"} }/>
                <CardImgOverlay>
                    <CardTitle>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
    </div>
    );
}


export default MenuItem;