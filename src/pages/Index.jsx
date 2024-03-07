import React, { useState } from "react";
import { Box, IconButton, Image, useBreakpointValue, Text, Flex } from "@chakra-ui/react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const carouselItems = [
  {
    img: "https://images.unsplash.com/photo-1616549972169-0a0d961c9905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBvbiUyMHJvYWR8ZW58MHx8fHwxNzA5ODI2NTE4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Car driving on an open road",
  },
  {
    img: "https://images.unsplash.com/photo-1621639532859-8b26570b96fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvcnxlbnwwfHx8fDE3MDk4MjY1MTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Interior of a modern car",
  },
  {
    img: "https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwY2FyfGVufDB8fHx8MTcwOTgyNjUxOXww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "Classic car parked by the roadside",
  },
];

const CarouselItem = ({ src, description }) => (
  <Box position="relative" height="100%">
    <Image src={src} alt={description} fit="cover" w="full" h="full" />
    <Text position="absolute" bottom="4" left="4" color="white" fontSize="lg" fontWeight="bold" bg="rgba(0, 0, 0, 0.5)" p="2" borderRadius="md">
      {description}
    </Text>
  </Box>
);

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const arrowSize = useBreakpointValue({ base: "md", md: "lg" });

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="450px" position="relative" overflow="hidden">
      <IconButton aria-label="Previous slide" icon={<FaArrowAltCircleLeft />} position="absolute" left="8" top="50%" transform="translateY(-50%)" zIndex="2" size={arrowSize} onClick={previousSlide} />
      <CarouselItem src={carouselItems[currentSlide].img} description={carouselItems[currentSlide].description} />
      <IconButton aria-label="Next slide" icon={<FaArrowAltCircleRight />} position="absolute" right="8" top="50%" transform="translateY(-50%)" zIndex="2" size={arrowSize} onClick={nextSlide} />
    </Flex>
  );
};

export default Index;
