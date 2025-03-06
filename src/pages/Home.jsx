import { Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      {/* Hero Section */}
      <Box position="relative" textAlign="center">
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/restaurant-exterior"
          alt="Plaza Azteca Exterior"
          width="100%"
          height={{ base: "300px", md: "500px" }}
          objectFit="cover"
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          flexDirection="column"
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>Welcome to Plaza Azteca</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mt={2} maxW="600px">
            Experience the Shortcut to Mexico with our award-winning food and famous Margaritas!
          </Text>
          <Button as={Link} to="/menu" mt={4} colorScheme="orange" size="lg">
            View Menu
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" py={10} px={4}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/authentic-mexican-food"
          alt="Authentic Mexican Food"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box ml={{ md: 6 }} mt={{ base: 6, md: 0 }} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl" color="cyan.600">
            Authentic Mexican Cuisine
          </Heading>
          <Text mt={2} fontSize="lg">
            At Plaza Azteca, we bring you the true flavors of Mexico with fresh ingredients and traditional recipes.
          </Text>
          <Button as={Link} to="/about" mt={4} colorScheme="cyan">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Specials Section */}
      <Box textAlign="center" py={10} px={4} bg="white">
        <Heading fontSize="2xl" color="orange.500">
          Our Specials
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="center" mt={6} gap={6}>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/plaza-azteca/margarita"
              alt="Margarita"
              width="250px"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg">
              Famous Margaritas
            </Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/plaza-azteca/tacos"
              alt="Tacos"
              width="250px"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg">
              Delicious Tacos
            </Text>
          </Box>
          <Box>
            <Image
              src="http://stock.calucid.com/fetch/calucid/plaza-azteca/fajitas"
              alt="Fajitas"
              width="250px"
              height="250px"
              objectFit="cover"
              borderRadius="md"
            />
            <Text mt={2} fontSize="lg">
              Sizzling Fajitas
            </Text>
          </Box>
        </Flex>
      </Box>

      {/* Visit Section */}
      <Box textAlign="center" py={10} px={4} bg="cyan.600" color="white">
        <Heading fontSize="2xl">Visit Us</Heading>
        <Text mt={2} fontSize="lg">
          2835 Lehigh St, Allentown, PA 18103, USA
        </Text>
        <Text fontSize="lg">(484) 656-7277</Text>
        <Button as={Link} to="/visit" mt={4} colorScheme="orange">
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;