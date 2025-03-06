import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack, HStack, IconButton, Link, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="cyan.600">
            Contact Plaza Azteca
          </Heading>
          <Text fontSize="lg" color="gray.600">
            We'd love to hear from you! Reach out to us using the form below or visit us at our location.
          </Text>
        </Box>

        <Box>
          <Image 
            src="http://stock.calucid.com/fetch/calucid/plaza-azteca/restaurant-exterior" 
            alt="Plaza Azteca Exterior" 
            width="100%" 
            height="250px" 
            objectFit="cover" 
            borderRadius="md"
          />
        </Box>

        <Box bg="gray.100" p={6} borderRadius="md">
          <Heading as="h2" size="lg" mb={4} color="orange.500">
            Our Location
          </Heading>
          <Text fontSize="md" color="gray.700">
            Plaza Azteca Mexican Restaurant
          </Text>
          <Text fontSize="md" color="gray.700">
            2835 Lehigh St, Allentown, PA 18103, USA
          </Text>
          <Text fontSize="md" color="gray.700">
            Phone: <Link href="tel:+14846567277" color="cyan.600">(484) 656-7277</Link>
          </Text>
          <Text fontSize="md" color="gray.700">
            Email: <Link href="mailto:info@plazaazteca.com" color="cyan.600">info@plazaazteca.com</Link>
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" color="orange.500" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4}>
            <IconButton as={Link} href="https://facebook.com/plazaazteca" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton as={Link} href="https://instagram.com/plazaazteca" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
            <IconButton as={Link} href="https://twitter.com/plazaazteca" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
          </HStack>
        </Box>

        <Box bg="gray.50" p={6} borderRadius="md">
          <Heading as="h2" size="lg" color="cyan.600" mb={4}>
            Contact Us
          </Heading>
          <VStack spacing={4} as="form">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="orange" size="lg" width="full">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;