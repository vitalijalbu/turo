import Link from "next/link";
import {  Box, SimpleGrid, Icon, Text, Stack, Image, Heading } from "@chakra-ui/react"
import features from "@/data/static.features.json";

const Features = () => {

  
    return (
      <section className="" id="features">
      <div className="container">
      <div className="row py-3">
      {features.map((feature, i) => (
  <Box className="feature col" key={i} as={Link} href={feature.url}>
    <div className="feature-icon">
    <Image
             maxW="50px"
             src={feature.img}
             alt={feature.title}
           />
    </div>
    <Heading>{feature.title}</Heading>
    <p>
    {feature.content}
    </p>
  </Box>
  ))}
</div>

      </div>
      </section>
    )
  }
  

export default Features;
