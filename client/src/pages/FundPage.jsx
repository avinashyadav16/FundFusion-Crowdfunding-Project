import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Divider, ButtonGroup, Button } from "@chakra-ui/react";

import { useState } from "react";

function FundPage() {
  const [showSubmit, setShowSubmit] = useState(false);

  const handleFundAmountClick = () => {
    setShowSubmit(true);
  };

  return (
    <>
      <Container
        maxWidth={["95%", "85%", "70%", "55%"]}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        mb={10}
      >
        <Stack>
          <Box m={"auto"} maxWidth={"90%"}>
            <h1
              style={{
                backgroundColor: "#e51075",
                marginTop: "3px",
                marginBottom: "8px",
                fontSize: "16px",
                color: "white",
                padding: "10px 10px",
                borderRadius: "5px",
                fontWeight: "600",
              }}
            >
              Let Your Funding Raise The Bar!
            </h1>
            <Card maxW="xxl" mb={2}>
              <CardBody>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRe4ftCQIiNmjT8GEbYgcKNJXCuS2R6vLbLj0gdiJb1e0LBCBa6A_k0CzoblnchqbX7M&usqp=CAU"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                  mx="auto"
                  display="block"
                />

                <Stack mt="6" spacing="3">
                  <div className="flex justify-between items-end space-x-2">
                    <Heading size="md" textAlign="left">
                      FinTech To Education
                    </Heading>
                    <Stack align="center">
                      <Button colorScheme="teal" variant="outline">
                        Funding Amount: $450
                      </Button>
                    </Stack>
                  </div>

                  <Text textAlign="left">
                    With the advancement of technology, FinTech has found its
                    way into the education sector, transforming traditional
                    methods of teaching and learning. Innovations in financial
                    technology have enabled educational institutions to
                    streamline operations, improve accessibility, and offer
                    personalized learning experiences.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Enter Your Fund Amount"
                      className="px-4 py-2 rounded border border-black"
                    />
                    {!showSubmit ? (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleFundAmountClick}
                      >
                        Fund Amount
                      </button>
                    ) : (
                      <Stack>
                        <Button
                          isLoading
                          loadingText="Submitting"
                          colorScheme="teal"
                          variant="outline"
                        >
                          Submit
                        </Button>
                      </Stack>
                    )}
                  </div>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default FundPage;
