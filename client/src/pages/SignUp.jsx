import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";

import { useContext } from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../components/context";

function SignUp() {
  const onClose = () => {
    dispatch({ type: "closesingup" });
    console.log(state);
  };

  const { state, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate();

  const initaldata = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [data, setdata] = useState(initaldata);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handlesignup = () => {
    axios
      .post("http://localhost:3000/signup", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      })
      .then(() => console.log("singup data saved successfully"));
    dispatch({ type: "closesingup" });
    dispatch({ type: "openlogin" });
  };
  return (
    <>
      <p
        style={{ cursor: "pointer" }}
        onClick={() =>
          dispatch({
            type: "opensingup",
          })
        }
      >
        Sign Up
      </p>

      <Modal
        blockScrollOnMount={false}
        isOpen={state.isOpenNow}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent padding={"0px 25px"} max-width={450} borderRadius={"0"}>
          <ModalHeader>
            <Heading fontSize={"3xl"} textAlign={"center"}>
              Welcome!
            </Heading>
            <Text textAlign={"center"} fontSize={"16px"} color={"#6a6a6a"}>
              Sign up to join FundFusion.
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody width={"auto"} height={150}>
            <Stack>
              <Box>
                <Text>First Name</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Your First Name"
                  size="md"
                  _focus={{ borderColor: "#2a2a2a" }}
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleInput}
                />
              </Box>
              <Box>
                <Text>Last Name</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  size="md"
                  placeholder="Your Last Name"
                  _focus={{ borderColor: "#2a2a2a" }}
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleInput}
                />
              </Box>
              <Box>
                <Text>Email</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Email"
                  type={"email"}
                  size="md"
                  _focus={{ borderColor: "#2a2a2a" }}
                  name="email"
                  value={data.email}
                  onChange={handleInput}
                />
              </Box>
              <Box>
                <Text>Password</Text>
                <Input
                  borderRadius={0}
                  variant="filled"
                  borderColor={"#ddd"}
                  placeholder="Password"
                  size="md"
                  type={"password"}
                  _focus={{ borderColor: "#2a2a2a" }}
                  name="password"
                  value={data.password}
                  onChange={handleInput}
                />
              </Box>
            </Stack>
            <Stack mt={5} spacing={5}>
              <Checkbox colorScheme="pink" defaultChecked>
                <Text fontSize="14px"> Subscribe to FundFusion newsletter</Text>
              </Checkbox>
              <Checkbox colorScheme="pink" defaultChecked>
                <Text fontSize="14px"> Terms of Use and Privacy Policy</Text>
              </Checkbox>
            </Stack>
            <Stack>
              <button
                style={{
                  backgroundColor: "#e51075",
                  fontSize: "12px",
                  color: "white",
                  padding: "10px 10px",
                  borderRadius: "2px",
                  border: "1px solid #e51075",
                  fontWeight: "bold",
                  width: "100%",
                  marginTop: "15px",
                }}
                onClick={handlesignup}
              >
                CREATE ACCOUNT
              </button>
              <Text textAlign={"center"}>OR</Text>
              <button
                style={{
                  backgroundColor: "rgb(64,92,157)",
                  fontSize: "12px",
                  color: "white",
                  padding: "10px 10px",
                  borderRadius: "2px",
                  fontWeight: "bold",
                  width: "100%",
                  marginBottom: "10px",
                }}
              >
                CONTINUE WITH GOOGLE
              </button>
            </Stack>
            <Stack
              mt={"50px"}
              align={"center"}
              justify={"center"}
              direction={"row"}
            >
              <Text fontSize="16px" textAlign={"center"}>
                Already Have Account?
              </Text>
              <Text
                fontSize="14px"
                fontWeight={"bold"}
                textAlign={"center"}
                textDecoration={"underline"}
              >
                Login
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default SignUp;
