import React from 'react';

import Cards from '../Components/Cards';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import movies from './../assets/img/comp.jpg';
import fontml5 from './../assets/img/comp.jpg';
import dempsey from './../assets/img/comp.jpg';


class Gallery extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        items: [
            {
                id: 0,
                title: 'Movie Box',
                subTitle: 'A gallery for movie lovers',
                imgSrc: movies,
                link: 'https://movie-box-react.herokuapp.com/',
                selected: false
            },
            {
                id: 1,
                title: 'Font Recognition Application',
                subTitle: 'Font Recognition Application using Machine Learning Library ML5.js',
                imgSrc: fontml5,
                link: 'https://olgatorok.github.io/',
                selected: false
            },
            {
                id: 2,
                title: 'W. Dempsey Builders',
                subTitle: 'A website for a construction company',
                imgSrc: dempsey,
                link: 'http://www.dempseybuilders.ie/',
                selected: false
            }]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];
        // Set a toggle state
        items[id].selected = items[id].selected ? false : true;

        // If teh item is not selected make it false
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Cards item={item}/>
        })
    }



    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs={6} md={4}>
                    {this.makeItems(this.state.items)}
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Gallery;
