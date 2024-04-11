import {
  Box,
  Checkbox,
  Container,
  Input,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiMailOpen } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaSpotify,
} from "react-icons/fa";

import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container1">
          <Stack textAlign={"left"} direction={"row"} spacing={"100px"}>
            <Box>
              <List>
                <strong>EXPLORE</strong>
                <ListItem fontSize="13px">What We Do</ListItem>
                <ListItem fontSize="13px">Funding</ListItem>
              </List>
            </Box>

            <Box>
              <List>
                <strong>ABOUT</strong>
                <ListItem fontSize="13px">About Us</ListItem>
                <ListItem fontSize="13px">Blog</ListItem>
                <ListItem fontSize="13px">Trust & Safety</ListItem>
                <ListItem fontSize="13px">Help & Support</ListItem>
                <ListItem fontSize="13px">Press</ListItem>
                <ListItem fontSize="13px">Contact</ListItem>
              </List>
            </Box>

            <Box>
              <List>
                <strong>ENTREPRENEURS</strong>
                <ListItem fontSize="13px">How It Works</ListItem>
                <ListItem fontSize="13px">FundFusion vs.</ListItem>
                <ListItem fontSize="13px">Kickstarter</ListItem>
                <ListItem fontSize="13px">Education Center</ListItem>
                <ListItem fontSize="13px">Experts Directory</ListItem>
                <ListItem fontSize="13px">Fees</ListItem>
                <ListItem fontSize="13px">Enterprise</ListItem>
                <ListItem fontSize="13px">China</ListItem>
              </List>
            </Box>
          </Stack>
          <Stack>
            <Box mb={"-5"}>
              <Icon as={HiMailOpen} w={"70px"} h={"70px"} color="green" />
            </Box>
            <Box>
              <Text fontWeight={"bold"} fontSize="18px" marginTop="20px">
                Find It First On FundFusion
              </Text>
              <Text fontSize="14px">
                Discover new and clever campaign in the FundFusion newsletter
              </Text>
            </Box>
            <Box>
              <Input
                mt={5}
                borderRadius={0}
                variant="filled"
                borderColor={"#2a2a2a"}
                placeholder="Your email address"
              />
            </Box>
            <Box>
              <Checkbox defaultChecked size="sm">
                <Text fontSize="16px"> I agree to the Terms & Conditions</Text>
              </Checkbox>
            </Box>
            <Box>
              <Link to="" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    backgroundColor: "green",
                    fontSize: "12px",
                    color: "white",
                    padding: "10px 10px",
                    borderRadius: "2px",
                    border: "1px solid green",
                    fontWeight: "bold",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  SIGN UP NOW
                </button>
              </Link>
            </Box>
          </Stack>
        </div>

        <Container
          display={"flex"}
          alignItems="center"
          justifyContent={"flex-start"}
          m={"auto"}
          w={["95%", "88%", "78%"]}
          mt={10}
        >
          <Box mr={7}>
            <button className="btnnn1">₹ Indian Rupee (INR)</button>
          </Box>
          <Stack direction={"row"} spacing="20px">
            <Icon as={CgFacebook} w={"20px"} h={"20px"} />
            <Icon as={FaTwitter} w={"20px"} h={"20px"} />
            <Icon as={FaYoutube} w={"20px"} h={"20px"} />
            <Icon as={FaInstagram} w={"20px"} h={"20px"} />
            <Icon as={FaLinkedinIn} w={"20px"} h={"20px"} />
            <Icon as={FaSpotify} w={"20px"} h={"20px"} />
          </Stack>
        </Container>

        <Container maxW={"100%"} mt={5}>
          <hr style={{ border: "1px solid grey" }} />
        </Container>

        <Box maxw={"50%"} m={"auto"} mt={3} mb={3}>
          <Stack
            direction={"row"}
            spacing={["5px", "8", "10", "20px"]}
            justifyContent="center"
          >
            <Text fontSize={["6px", "8px", "10px", "12px"]}>Terms of Use</Text>
            <Text fontSize={["6px", "8px", "10px", "12px"]}>
              Privacy Policy
            </Text>
            <Text fontSize={["6px", "8px", "10px", "12px"]}>Cookies</Text>
            <Text fontSize={["6px", "8px", "10px", "12px"]}>Accessibility</Text>
            <Text fontSize={["6px", "8px", "10px", "12px"]}>
              ©2024 FundFusion
            </Text>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default Footer;
