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
                src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>“The greatest weapon against stress is our ability to choose one thought over another.”</h3>
                <p>―William James</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2019/11/07/17/07/universe-4609408_1280.jpg"
                alt="Second Slide"
            />
            <Carousel.Caption>
                <h3>“Our anxiety does not come from thinking about the future, but from wanting to control it.”</h3>
                <p>—Kahlil Gibran</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2016/01/06/21/42/light-bulbs-1125016_1280.jpg"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>“In the middle of difficulty lies opportunity.”</h3>
                <p>—Albert Einstein</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2023/11/15/19/51/mushroom-8390888_1280.jpg"
                alt="Fourth slide"
            />
            <Carousel.Caption>
                <h3>“Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff.”</h3>
                <p>—Robert Eliot</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100"
                src="https://cdn.pixabay.com/photo/2023/11/17/22/10/road-8395119_1280.jpg"
                alt="Fifth slide"
            />
            <Carousel.Caption>
                <h3>“You don’t have to see the whole staircase, just take the first step.”</h3>
                <p>―Martin Luther King</p>
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
