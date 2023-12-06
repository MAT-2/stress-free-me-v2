import Carousel from "react-bootstrap/Carousel";
import carouselText from "components/carouselText";
import React from "react";

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";

import Navbar from "../components/Navbar";


const Home = () => {
  return (
    <>
      <Navbar />
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

export default Home;
