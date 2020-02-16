import React from 'react';
import Jumbo from './../Components/Jumbo';
import Gallery from './../Components/Gallery';

function Home(props) {

    return(
        <div>
            <Jumbo title={props.title} subTitle={props.subTitle} text={props.text}/>
            <Gallery />
        </div>
    );

}

export default Home;
