import { Stack, Image, Text, VStack } from "@chakra-ui/react";
import OptionSelector from "./OptionSelector";

export default function ProductDetail() {
  return (
    <div>
      <Stack gap="40px" direction={{ lg: "row", base: "column", md: "column" }}>
        <VStack gap="30px">
          <Image
            src="src/assets/green.jpg"
            width="300px"
            height="300px"
            borderRadius="18px"
          />
          <Text fontSize="24px" fontWeight="600">
            Price : 200$
          </Text>
        </VStack>
        <VStack gap="30px">
          <Text
            textAlign="justify"
            width={{ lg: "250px", md: "400px", xl: "400px", base: "250px" }}
          >
            Experience ultimate comfort and style with our premium cotton
            sweatshirt, designed for both casual and versatile wear. Crafted
            from soft, breathable cotton fabric, this sweatshirt provides a
            relaxed fit that’s perfect for layering or wearing on its own. Its
            lightweight yet durable material makes it ideal for year-round
            comfort, whether you're lounging at home or heading out for a casual
            day. The classic design and easy-to-match colors ensure it will
            quickly become a staple in your wardrobe, offering both
            functionality and effortless style.
          </Text>
          <OptionSelector/>
        </VStack>
      </Stack>
    </div>
  );
}
