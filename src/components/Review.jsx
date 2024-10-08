import { Badge, Box, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Review() {
  const people = useSelector((state)=>state.reviews.reviews)
  return (
    <Stack direction="column" paddingTop="18px">
      <Text fontWeight="700" fontSize="28px">
        Reviews
      </Text>
      <VStack marginTop="5px" padding="12px" alignItems="flex-start">
        {people.map((r) => (
          <Box key={r.id} ml="3" paddingBottom="12px" width="100%">
            <Text fontWeight="bold" fontSize={{ base: "14px", md: "18px" }}>
              {r.name}
              <Badge
                ml="1"
                borderRadius="6px"
                colorScheme={
                  r.rating >= 4 ? "green" : r.rating >= 3 ? "orange" : "red"
                }
              >
                {r.rating}/5
              </Badge>
            </Text>
            <Text fontSize="sm">{r.text}</Text>
          </Box>
        ))}
      </VStack>
    </Stack>
  );
}
