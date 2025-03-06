import { Box, Heading, Text, Image, VStack, HStack, Icon, Link, Button } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="xl" color="cyan.700">
          Visit Plaza Azteca
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/restaurant-exterior"
          alt="Plaza Azteca Exterior"
          width="100%"
          maxW="800px"
          height="400px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          At Plaza Azteca, we offer a genuine welcoming, warm, and friendly atmosphere with thoughtful service to make you feel truly at home.
          Whether you're looking for a relaxing escape or a culinary experience, we ensure a truly memorable visit.
        </Text>
      </VStack>

      <VStack spacing={6} mt={10} align="stretch">
        <HStack spacing={4} align="center">
          <Icon as={FaMapMarkerAlt} color="orange.500" boxSize={6} />
          <Text fontSize="lg">
            2835 Lehigh St, Allentown, PA 18103, USA
          </Text>
        </HStack>

        <HStack spacing={4} align="center">
          <Icon as={FaPhoneAlt} color="orange.500" boxSize={6} />
          <Text fontSize="lg">(484) 656-7277</Text>
        </HStack>

        <HStack spacing={4} align="center">
          <Icon as={FaClock} color="orange.500" boxSize={6} />
          <VStack align="start">
            <Text fontSize="lg">Monday - Thursday: 11:00 AM - 10:00 PM</Text>
            <Text fontSize="lg">Friday - Saturday: 11:00 AM - 11:00 PM</Text>
            <Text fontSize="lg">Sunday: 11:00 AM - 9:00 PM</Text>
          </VStack>
        </HStack>
      </VStack>

      <Box mt={10} borderRadius="md" overflow="hidden">
        <iframe
          title="Plaza Azteca Location"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=2835+Lehigh+St,+Allentown,+PA+18103`}
        />
      </Box>

      <VStack spacing={6} mt={10}>
        <Heading as="h2" size="lg" color="cyan.700">
          Experience the Best of Mexican Cuisine
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/plaza-azteca/mexican-food"
          alt="Mexican Food"
          width="100%"
          maxW="800px"
          height="400px"
          objectFit="cover"
          borderRadius="md"
        />
        <Text fontSize="lg" maxW="800px">
          Enjoy our award-winning food and fresh cocktails, including our famous Margaritas. Whether it's a special celebration, a casual night out, or a fun time with friends and family, Plaza Azteca is the perfect destination.
        </Text>
      </VStack>

      <VStack mt={10} spacing={4}>
        <Button as={RouterLink} to="/menu" colorScheme="orange" size="lg">
          View Our Menu
        </Button>
        <Button as={RouterLink} to="/contact" colorScheme="cyan" size="lg">
          Contact Us
        </Button>
      </VStack>
    </Box>
  );
};

export default Visit;