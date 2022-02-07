import React from "react"
import { GridItem, useBreakpointValue, VStack } from "@chakra-ui/react"
import HeroTitle from "./HeroTitle"
import HeroImage from "./HeroImage"
import HeroLayout from "./HeroLayout"
import HeroExcerpt from "./HeroExcerpt"
import HeroAuthorCategory from "./HeroAuthorCategory"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export function Hero({ article }) {
  const url = article?.image_url
  const textSize = useBreakpointValue({ base: "sm", lg: "md" })

  return (
    <HeroLayout>
      <VStack
        spacing={{ base: 2, md: 4 }}
        flex={1}
        pl={{ base: 0, xl: 8 }}
        py={{ base: 8, lg: 10, xl: 20 }}
        bgColor="gray.50"
        justifyContent="center"
      >
        <HeroAuthorCategory
          author={article?.author}
          category={article?.category}
          textSize={textSize}
        />
        <HeroTitle title={article?.title} />
        <HeroExcerpt excerpt={article?.excerpt} textSize={textSize} />
        <PrimaryButton
          href={`/read/${article?.slug}`}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="yellow"
          fontSize={textSize}
        >
          Read Now
        </PrimaryButton>
      </VStack>
      <HeroImage alt={article?.title} url={url} />
    </HeroLayout>
  )
}

export default Hero
