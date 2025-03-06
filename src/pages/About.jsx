import { Box, Text, Image, VStack, HStack, Button, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      {/* Hero Section */}
      <Box textAlign="center" mb={8}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/restaurant-exterior"
          alt="Plaza Azteca Exterior"
          width="100%"
          height={{ base: "250px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mt={4} color="cyan.700">
          Welcome to Plaza Azteca
        </Text>
        <Text fontSize="lg" color="gray.600" mt={2}>
          The Shortcut to Mexico – A Culinary Escape Awaits!
        </Text>
      </Box>

      {/* About Section */}
      <VStack spacing={6} align="stretch">
        <Text fontSize="xl" fontWeight="bold" color="orange.500">
          Our Story
        </Text>
        <Text fontSize="md" color="gray.700">
          At Plaza Azteca, we offer a genuine welcoming, warm, and friendly atmosphere with thoughtful service to make you feel truly at home. Whether you are looking for a relaxing escape or a culinary experience, we are dedicated to meeting your individual needs.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/restaurant-interior"
          alt="Restaurant Interior"
          width="100%"
          height={{ base: "200px", md: "350px" }}
          objectFit="cover"
          borderRadius="md"
        />
      </VStack>

      {/* Experience Section */}
      <VStack spacing={6} align="stretch" mt={8}>
        <Text fontSize="xl" fontWeight="bold" color="cyan.700">
          A Unique Experience
        </Text>
        <Text fontSize="md" color="gray.700">
          With our award-winning food and our fresh cocktails like our famous Margaritas, Plaza Azteca ensures a truly memorable experience. Whether it’s a special celebration, a casual night out, or a fun time with friends and family, we aim to transport you to a paradise of flavors.
        </Text>
        <HStack spacing={4} flexWrap="wrap" justify="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/plaza-azteca/margarita"
            alt="Margarita"
            width={{ base: "150px", md: "200px" }}
            height={{ base: "150px", md: "200px" }}
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/plaza-azteca/mexican-dish"
            alt="Mexican Dish"
            width={{ base: "150px", md: "200px" }}
            height={{ base: "150px", md: "200px" }}
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/plaza-azteca/fresh-ingredients"
            alt="Fresh Ingredients"
            width={{ base: "150px", md: "200px" }}
            height={{ base: "150px", md: "200px" }}
            objectFit="cover"
            borderRadius="md"
          />
        </HStack>
      </VStack>

      {/* Call to Action */}
      <VStack spacing={4} mt={8} textAlign="center">
        <Text fontSize="xl" fontWeight="bold" color="orange.500">
          Visit Us Today!
        </Text>
        <Text fontSize="md" color="gray.700">
          Experience the best of Mexican cuisine in Allentown, PA. We can’t wait to serve you!
        </Text>
        <HStack spacing={4}>
          <Button as={RouterLink} to="/menu" colorScheme="cyan" variant="solid">
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="orange" variant="outline">
            Plan Your Visit
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default About;