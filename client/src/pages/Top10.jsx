import {
  Box,
  Container,
  Heading,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { Icon } from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Top10.css";

function Top10() {
  return (
    <>
      <hr
        style={{
          height: "4px",
          width: "144px",
          margin: "auto",
          background: "#E51075",
          marginTop: "40px",
          marginBottom: "25px",
        }}
      />
      <Container maxWidth="100%">
        <Box m={"auto"} width={["95%", "85%", "70%", "55%"]}>
          <Heading mb={3}>10 Cool & Clever Finds</Heading>
          <Text>
            Discover your next &quot;a-ha&quot; moment in our roundup of
            standout projects, from live crowdfunding & InDemand campaigns to
            innovative products shipping now.
          </Text>
          <Stack
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            direction={"row"}
            mt={3}
          >
            <button className="btnfacebook">
              <Icon mr={3} as={AiOutlineFacebook} w={"25px"} h={"25px"} />
              Follow
            </button>
            <button className="btntwitter">
              <Icon mr={3} as={AiOutlineTwitter} w={"25px"} h={"25px"} />
              Follow
            </button>
            <button className="btnpink">
              <Icon mr={3} as={AiOutlineHeart} w={"25px"} h={"25px"} />
              Follow
            </button>
          </Stack>
        </Box>
        <Container mb={5} mt={10} textAlign={"left"} maxWidth={"80%"}>
          <SimpleGrid columns={[1, 1, 2]} spacing="40px">
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/bnsdr6qwy5iymzroqwz7.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  Speede - Advanced Home Gym for Faster Results
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Lift heavier and create massive muscle gain safely
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 30,000
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>570 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={570}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>

            <Box
              border={"1px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/vs8ayvtkepnwh9ks1a71.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  GPD WIN Max 2 Handheld Gaming PC 4G LTE AMD 6800U
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Lift heavier and create massive muscle gain safely
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 7,000
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>790 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={790}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/mkvsitirjoi2skrenaym.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  XFoil: Electric Carbon Fiber Surf & Hydrofoil
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Electric Carbon Fiber Surf & Hydrofoil
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 17,110,693
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>1445 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={1445}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/rx5nnvdq4cffhdop6pzd.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  ROIDMI EVA: World&apos;s First
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  World&apos;s First Self-Cleaning & Emptying Robot
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 1,279,149
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>349 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={370}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/o5kl44dk3ns9qvavth2b.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  BP Doctor MED: Know Your Blood Pressure & Health Status
                  Anywhere
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  World&apos;s 1st Med-Grade BP Smartwatch
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 3,311,000
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>2749 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={2749}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/tsb4edj1sdwewhewh6pf.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  C3STROM ASTRO: Class 3 Cyber Electric Bike
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Lift heavier and create massive muscle gain safely
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 546,844
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>1666 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={1666}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/hovjleo4pojmdutdh9zq.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  Segway SuperScooter GT Series
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Perform the Future{" "}
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 1,299,987
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>2399 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={2399}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/opcc1ljfeoaewdfmnrdy.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  Pamu Slide 2
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  {" "}
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 1,961,112
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>19,551 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={19551}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/sfaujwtwbfjnf1zln2ol.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  SPLACH TWIN: A Premium Dual Motor Budget Scooter
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  A Premium Dual Motor Budget Scooter
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 141,000
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>598 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={598}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
            <Box
              border={"px solid #dddddd"}
              borderRadius={"lg"}
              transitionProperty={"all"}
              transitionDuration={"250ms"}
              transitionTimingFunction={
                "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
              }
              transitionDelay="0ms"
              position={"static"}
              _hover={{
                height: "565px",
                border: "1px solid black",
                position: "relative",
                backgroundColor: "#ffffff",
                cursor: "pointer",
              }}
            >
              <Image
                src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,f_auto,h_310,w_590/mkvsitirjoi2skrenaym.jpg"
                borderRadius={"lg"}
              />
              <Box m={"auto"} maxWidth={"95%"}>
                <div className="mt-1 mb-1 flex justify-between items-center">
                  <Stack direction="row" spacing={4} align="center">
                    <Button colorScheme="teal" variant="ghost">
                      FUNDING
                    </Button>
                  </Stack>
                  <Stack direction="column">
                    <Wrap spacing={4}>
                      <WrapItem>
                        <Link to="/FundPage">
                          <Button colorScheme="green">Fund Now</Button>
                        </Link>
                      </WrapItem>
                    </Wrap>
                  </Stack>
                </div>
                <hr />
                <Heading mb={1} mt={4} fontSize={"25px"}>
                  Speede - Advanced Home Gym for Faster Results
                </Heading>
                <Text fontSize="15px" color="#2a2a2a;">
                  Lift heavier and create massive muscle gain safely
                </Text>
                <Stack
                  mt={5}
                  width={"100%"}
                  display={"flex"}
                  flexDirection="row"
                  alignItems="center"
                  justifyContent={"space-between"}
                >
                  <Stack direction={"row"}>
                    <Text fontSize="19px" fontWeight="600">
                      $ 90,000
                    </Text>
                    <Text>USD Raised</Text>
                  </Stack>
                  <Text>599 %</Text>
                </Stack>
                <Progress
                  mb={5}
                  borderRadius={10}
                  colorScheme="green"
                  size="sm"
                  value={599}
                  filter="auto"
                  brightness="140%"
                />
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
}
export default Top10;
