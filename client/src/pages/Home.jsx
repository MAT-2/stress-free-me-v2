<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
import carouselText from './src/components/carouselText'
import React from 'react';
=======
import Carousel from "react-bootstrap/Carousel";
import carouselText from "components/carouselText";
import React from "react";
>>>>>>> a0f48c8442ff2a964270052e463025ab918557e5
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
<<<<<<< HEAD
} from 'react-native';
import Navbar from '.src/components/Navbar';
=======
} from "react-native";
import Nav from "./components/Navbar";
>>>>>>> a0f48c8442ff2a964270052e463025ab918557e5

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={5000}>
          <carouselText text="First Slide" />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>PLACEMENTTEXT</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <carouselText text="Second Slide" />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>PLACEMENTTEXT</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <carouselText text="Third Slide" />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>PLACEMENTTEXT</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <carouselText text="Fourth Slide" />
          <Carousel.Caption>
            <h3>Fourth Slide Label</h3>
            <p>PLACEMENTTEXT</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <carouselText text="Fifth Slide" />
          <Carousel.Caption>
            <h3>Fifth Slide Label</h3>
            <p>PLACEMENTTEXT</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SafeAreaView style={styles.container}>
        <view>
          <Button
            title="Start Survey"
            onPress={() => Alert.alert("Starting Quiz...")}
          />
        </view>
      </SafeAreaView>
    </>
  );
};

<<<<<<< HEAD
const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: ,
    },
    }
);
=======
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: "2px",
  },
});
>>>>>>> a0f48c8442ff2a964270052e463025ab918557e5
export default Home;
