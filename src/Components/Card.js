import React from 'react';
import CardDetail from './CardDetail';


function Card(props) {

    return(
        <div className="d-inline-block o-card">
            <div className="d-inline-block o-card" onClick={(e) =>
                props.click(props.item)}>
                <img className="o-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                { props.item.selected && <CardDetail title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
            </div>
        </div>
    );

}

export default Card;
