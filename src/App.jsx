import { Stack, VStack } from "@chakra-ui/react";
import ProductDetail from "./components/ProductDetail";
import Review from "./components/Review";
import './app.css'
import AddReview from "./components/AddRewiew";

function App() {
  return (
    <div className="container">
      <VStack
        color={{ md: "white" }}
        width={{ xl: "800px", lg: "700px", md: "600px", base: "100%" }}
        borderRadius={{ md: "24px", base: "18px" }}
        bgColor={{ md: "#3d3d3dd1", base: "white" }}
        padding={{ lg: "38px", base: "14px" }}
        boxShadow="0 0 30px #262626d9"
        gap="50px"
        
      >
        <ProductDetail />
        <Stack
          direction="row"
          width="100%"
          justifyContent="space-around"
          borderTop="solid 3px black"
        >
          <Review />
          <AddReview/>
        </Stack>
      </VStack>
    </div>
  );
}

export default App;
