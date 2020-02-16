import React from 'react';
import Jumbo from '../Components/Jumbo';
import Content from '../Components/Content';

function About(props) {

    return(
        <div>
            <Jumbo title={props.title} />

            <Content>

                <p>Hello, my name is Olga. I am a full stack web developer with experience in Angular, React, Express JS, Node JS, MySQL and MongoDB.</p>

                <p>My dream is to one day start my own business and become an entrepreneur (currently working on some ideas).</p>

                <p>I'm constantly learning new things. Currently those things include gaining more experience with MongoDB, React, ExpressJS, and NodeJS</p>

                <p>My latest project, Palmeras 5, is a website for bar in Valencia, Spain. You can check it out <a href="https://test.com" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage. It is built with HTML, CSS, and JavaScript. However, I will be rebuilding it using React in the coming months</p>

                <p>When I'm not learning something new, I'm creating some new ideas for fun projects.</p>
            </Content>

        </div>
    );
}

export default About;
