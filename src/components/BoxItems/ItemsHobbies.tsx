import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function ItemsHobbies() {
  return (
    <>
    <Box
      borderRadius="4px"
      overflow="hidden">
      <Image
        src="/livros.jpg"
        alt="Livros"
        h="170px"
        w="100%"
      />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white" border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex
          direction="column"
        >
          <Heading
            fontSize="xl"
            fontWeight="500"
          >
            Ler livros
          </Heading>
          <Text
            mt="3"
            fontSize="md"
            color="gray.500"
            fontWeight="500"
          >
            Aventura, Fantasia
          </Text>
        </Flex>
        
      </Flex>
    </Box>
    <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/netflix.jpg"
      alt="Netflix"
      h="170px"
      w="100%"
    />
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white" border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex
        direction="column"
      >
        <Heading
          fontSize="xl"
          fontWeight="500"
        >
          Filmes/Series
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Ação, Aventura, Comédia
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/crunchyroll.png"
      alt="Crunchyroll"
      h="170px"
      w="100%"
    />
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white" border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex
        direction="column"
      >
        <Heading
          fontSize="xl"
          fontWeight="500"
        >
          Animes
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Váriados
        </Text>
      </Flex>
    </Flex>
  </Box>
  <Box
    borderRadius="4px"
    overflow="hidden">
    <Image
      src="/esportes.png"
      alt="Esportes"
      h="170px"
      w="100%"
    />
    <Flex
      p="6"
      align="center"
      justify="space-between"
      bg="white" border="1px"
      borderColor="yellow.300"
      borderTop="0"
    >
      <Flex
        direction="column"
      >
        <Heading
          fontSize="xl"
          fontWeight="500"
        >
          Esportes
        </Heading>
        <Text
          mt="3"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >
          Futebol, Ciclismo
        </Text>
      </Flex>
    </Flex>
  </Box>
  
  </>
  )
}