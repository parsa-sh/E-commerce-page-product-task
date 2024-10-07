import {
    Button,
    FormControl,
    FormLabel,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  
  import { reviewAdded } from "../redux/reviewSlice";
  import { nanoid } from "@reduxjs/toolkit";
  import { useDispatch } from "react-redux";
  import { useState } from "react";
  function AddReview() {
    const [nameLabel, setNameLabel] = useState("");
    const [textLabel, setTextLabel] = useState("");
    const [ratingLabel, setRatingLabel] = useState("");
    const dispatch = useDispatch()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(
        reviewAdded({
          id:nanoid(),
          name : nameLabel,
          text : textLabel,
          rating : ratingLabel
        })
      )
      setNameLabel("")
      setRatingLabel("")
      setTextLabel("")
      
    }
      
  
    const handleRatingChange = (value) => setRatingLabel(value);
  
    return (
      <VStack borderLeft="3px solid black" paddingLeft="24px" paddingTop="18px">
        <Text fontWeight="700" fontSize="28px">
          Add your review
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired marginTop="12px">
            <FormLabel>Name :</FormLabel>
            <Input
              placeholder="Enter your name"
              value={nameLabel}
              bgColor="white"
              color="black"
              onChange={(e) => setNameLabel(e.target.value)}
            />
            <FormLabel marginTop="12px">Comments :</FormLabel>
            <Textarea
              placeholder="Enter your comment"
              value={textLabel}
              bgColor="white"
              color="black"
              resize="none"
              height="150px"
              onChange={(e) => setTextLabel(e.target.value)}
            />
  
            <FormLabel marginTop="12px">Rating</FormLabel>
            <NumberInput
              min={1}
              max={5}
              bgColor="white"
              borderRadius="12px"
              value={ratingLabel}
              onChange={handleRatingChange}
            >
              <NumberInputField color="black" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              colorScheme="teal"
              marginTop="18px"
              width="100%"
              fontWeight="600"
              fontSize="18px"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </VStack>
    );
  }
  
  export default AddReview;
  