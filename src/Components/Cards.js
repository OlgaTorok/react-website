import React from 'react';
// import CardDetail from './CardDetail';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Cards(props) {

    return(
        <Card className="d-inline-block o-card">
            <Card.Img className="o-card-image" variant="top" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <Card.Body className="text-center">
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>{props.item.subTitle}</Card.Text>
                <Button href={props.item.link} target="_blank" variant="outline-info">View</Button>
            </Card.Body>
        </Card>


        // <div className="d-inline-block o-card">
        //     <div className="d-inline-block o-card" onClick={(e) =>
        //         props.click(props.item)}>
        //         <img className="o-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        //         { props.item.selected && <CardDetail title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        //     </div>
        // </div>
    );

}

export default Cards;
