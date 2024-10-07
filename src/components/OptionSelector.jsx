import { Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function OptionSelector() {
  const [sizeValue, setSizeValue] = useState("Small");
  const [colorValue, setColorValue] = useState("blue");

  return (
    <Stack direction="column" width="100%" alignItems="center">
      <RadioGroup
        onChange={setSizeValue}
        value={sizeValue}
        padding="7px 12px"
        borderRadius="12px"
        
      >
        <Text marginBottom="12px">Choose your size : {sizeValue}</Text>
        <Stack direction="row" gap="30px">
          <Radio value="Small" colorScheme="blackAlpha">S</Radio>
          <Radio value="Medium" colorScheme="blackAlpha">M</Radio>
          <Radio value="Large" colorScheme="blackAlpha">L</Radio>
          <Radio value="XLarge" colorScheme="blackAlpha">XL</Radio>
        </Stack>
      </RadioGroup>
      <RadioGroup
        onChange={setColorValue}
        value={colorValue}
        padding="7px 12px"
        borderRadius="12px"
      >
        <Text marginBottom="12px">Choose your Color : {colorValue}</Text>
        <Stack direction="row" gap="30px">
          <Radio value="blue" colorScheme="blue">Blue</Radio>
          <Radio value="red" colorScheme="red">Red</Radio>
          <Radio value="green" colorScheme="green">Green</Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
}
