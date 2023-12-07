import Carousel from 'react-bootstrap/Carousel';
// import carouselImage from '../components/carouselImage'
import Button from 'react-bootstrap/Button';
// import React from 'react';



const Home = () => {
return (
    <>
    <Carousel>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1459978037/photo/asphalted-racing-stadium-sport-dark-arena-empty-field-stadium.jpg?s=1024x1024&w=is&k=20&c=-Zpx-epx15i3XmW4yJD_i9dig4yCA3BkeXMci9VfxUc="
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>Quote 1</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg"
                alt="Second Slide"
            />
            <Carousel.Caption>
                <h3>Quote 2</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405_1280.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Quote 3</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
                alt="Fourth slide"
            />
            <Carousel.Caption>
                <h3>Quote 4</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
                alt="Fifth slide"
            />
            <Carousel.Caption>
                <h3>Quote 5</h3>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
        <div className="text-center">
            <Button variant="danger" size="lg">
                Start Quiz!
            </Button>{" "}
        </div>
    </>
    )
};



export default Home;
