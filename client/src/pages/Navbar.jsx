import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  // Text,
} from "@chakra-ui/react";

import { useContext } from "react";
import { useState } from "react";
import { Search2Icon, CloseIcon } from "@chakra-ui/icons";

import SignUp from "./SignUp";
import Login from "./Login";
import { AuthContext } from "../components/context";

import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [ok, setok] = useState(true);

  const handlesearch = () => {
    setok(!ok);
  };

  const { state, dispatch } = useContext(AuthContext);

  const handlelogout = () => {
    console.log("logged out");
    dispatch({ type: "logoutsucceed" });
    dispatch({ type: "closemobilenav" });
    navigate("/");
  };
  return (
    <>
      <div className="desnav">
        {ok ? (
          <Box className="containernav">
            <Container className="maincontainer">
              <Box className="logo">
                <svg width="230px" height="50px">
                  <Link to="/">
                    <text
                      fontSize="30"
                      fontWeight={900}
                      fontFamily="benton-sans,Helvetica,Sans-serif"
                      x="0"
                      y="35"
                      fill="#e51075"
                    >
                      FundFusion
                    </text>
                  </Link>
                </svg>
              </Box>
              <Box>
                <Stack spacing="24px" width={600} direction={"row"}>
                  <button onClick={handlesearch}>
                    <Search2Icon mb="1"></Search2Icon>
                  </button>
                  <Link to="/top-10">
                    <p>Explore</p>
                  </Link>
                  <Link to="/top-10">
                    <p>Top 10 Finds</p>
                  </Link>
                </Stack>
              </Box>
            </Container>
            <Container className="maincontainer1">
              <Box>
                <Stack spacing={"24px"} direction={"row"}>
                  <Link to="/campaign">
                    <p>New Campaign</p>
                  </Link>
                  <Link to="/whatwedo">
                    <p>What We Do</p>
                  </Link>
                  <p style={{ color: "#ddd" }}>|</p>
                  {!state.isAuth ? (
                    <Stack direction="row" spacing={5}>
                      <Login />
                      <SignUp />
                    </Stack>
                  ) : (
                    <p onClick={handlelogout}>Logout</p>
                  )}
                </Stack>
              </Box>
            </Container>
          </Box>
        ) : (
          <Box
            display={"flex"}
            alignItems={"center"}
            pb={1}
            pt={1}
            margin="auto"
            width={"96%"}
          >
            <InputGroup size="md">
              <Search2Icon mt={2} mr={2}></Search2Icon>
              <Input pr="-20px" type="text" size="sm" placeholder="Search" />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  bg="transparent"
                  size="sm"
                  onClick={() => setok(!ok)}
                  mt={"-2"}
                  ml={"8"}
                >
                  <CloseIcon></CloseIcon>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        )}
      </div>
    </>
  );
}
export default Navbar;
