import Image from "next/image"
import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

import PodcastButton from "../shared/podcast-link"
import { SiSpotify } from "react-icons/si"

export default function Mood({ width, titleSize }) {
  const images = [
    "/images/mood/v5/mood-v5-cover.jpg",
    "/images/mood/v5/mood-v5-1.jpg",
    "/images/mood/v5/mood-v5-2.jpg",
  ]

  return (
    <Flex
      maxW={width}
      mx="auto"
      flexDir="column"
      textAlign="center"
      alignItems="center"
    >
      <VStack my={3}>
        <Flex
          flexDirection={{ base: "column", md: "row-reverse" }}
          alignItems="center"
          justifyContent="center"
        >
          <Badge ml={{ md: 2 }} colorScheme="red">
            NEW!
          </Badge>
          <Heading as="h1" fontSize={titleSize}>
            Mood Vol. 05: SUMMER
          </Heading>
        </Flex>
        <Text>
          Menikmati liburan musim panas dengan lagu-lagu yang bakal ngebuat kamu
          betah berlama-lama untuk menikmatinya.
        </Text>
      </VStack>
      <SimpleGrid mt={6} columns={{ base: 1, md: 2 }} gap={1}>
        {images.map((src, id) => (
          <Image
            className="keen-slider__slide"
            src={src}
            key={id}
            alt="Mood vol 5"
            height={300}
            width={300}
          />
        ))}
        <AspectRatio
          ratio={1 / 1}
          justifyContent="center"
          bg="#fae68f"
          w="full"
          h="full"
        >
          <VStack>
            <Link
              href="/redirect?url=https://open.spotify.com/playlist/2K19a0sPgjI1rG097PsOaP"
              referrerPolicy="no-referrer"
            >
              Listen on Spotify
            </Link>
            <PodcastButton
              link="https://open.spotify.com/playlist/2K19a0sPgjI1rG097PsOaP"
              icon={SiSpotify}
            />
          </VStack>
        </AspectRatio>
      </SimpleGrid>
    </Flex>
  )
}
