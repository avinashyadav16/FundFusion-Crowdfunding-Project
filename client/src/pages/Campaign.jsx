import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  Checkbox,
  Textarea,
  Input,
} from "@chakra-ui/react";

import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Campaign() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [isBankOpen, setIsBankOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");

  const [fundraisingGoal, setFundraisingGoal] = useState("");

  const [campaignTitle, setCampaignTitle] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");

  const handleCheckboxChange = (value) => {
    setSelectedOption(value);
  };

  const countries = [
    "India",
    "United States",
    "Australia",
    "Austria",
    "Belgium",
    "Canada",
    "Cyprus",
    "Denmark",
    "Estonia",
    "Finland",
  ];

  const banks = ["India", "United States", "Other Countries"];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
  };

  const handleFundraisingGoalChange = (event) => {
    setFundraisingGoal(event.target.value);
  };

  const handleCampaignTitleChange = (event) => {
    setCampaignTitle(event.target.value);
  };

  const handleCampaignDescriptionChange = (event) => {
    setCampaignDescription(event.target.value);
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
            <Image
              m={"auto"}
              height={"220px"}
              width={["95%", "75%", "60%", "45%"]}
              src="https://c2.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fit,w_275,g_center,q_auto:best,dpr_1.3,f_auto/homepage/crowdfunding-crowdsurfing_base.svg"
            />
            <Heading pb={"10px"} fontSize="35px" fontWeight="500">
              Let&apos;s get ready to start your campaign!
            </Heading>
            <Text>
              We want to create the best onboarding for you - please fill out
              the information below.
              <br />
              <span style={{ fontWeight: "650" }}>
                Your answers will be locked for this campaign and can&apos;t be
                changed later.
              </span>
            </Text>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Who are you raising money for?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Please choose the type of account that will be receiving your
              funds.
            </Text>
            <Stack mt={2} mb={6} spacing={5} direction="row">
              <Checkbox
                isChecked={selectedOption === "individual"}
                onChange={() => handleCheckboxChange("individual")}
              >
                Individual
              </Checkbox>
              <Checkbox
                isChecked={selectedOption === "business"}
                onChange={() => handleCheckboxChange("business")}
              >
                Business or Nonprofit
              </Checkbox>
            </Stack>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Where are you located?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              If you are raising funds as an individual, what is your country of
              legal residence? If you are raising funds for a business, where is
              the business headquartered? Learn more about country limitations.
            </Text>
            <Accordion mb={6} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border={"1px"}
                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                  >
                    <Box flex="1" textAlign="left">
                      <Input
                        value={selectedCountry}
                        readOnly
                        variant="unstyled"
                        placeholder="Select Country"
                        onClick={(e) => e.preventDefault()}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  mt={2}
                  height={"max-content"}
                  border={"1px"}
                  textAlign={"left"}
                  display={isCountryOpen ? "block" : "none"}
                >
                  {countries.map((country) => (
                    <Text
                      key={country}
                      pb={3}
                      cursor="pointer"
                      onClick={() => handleSelectCountry(country)}
                      fontWeight={
                        selectedCountry === country ? "bold" : "normal"
                      }
                    >
                      {country}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Where is your bank?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Your bank account location determines the currency in which you
              can raise funds.
            </Text>
            <Accordion mb={10} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton
                    border={"1px"}
                    onClick={() => setIsBankOpen(!isBankOpen)}
                  >
                    <Box flex="1" textAlign="left">
                      <Input
                        value={selectedBank}
                        readOnly
                        variant="unstyled"
                        placeholder="Select Your Bank"
                        onClick={(e) => e.preventDefault()}
                      />
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  mt={2}
                  height={"max-content"}
                  border={"1px"}
                  textAlign={"left"}
                  display={isBankOpen ? "block" : "none"}
                >
                  {banks.map((bank) => (
                    <Text
                      key={bank}
                      pb={3}
                      cursor="pointer"
                      onClick={() => handleSelectBank(bank)}
                      fontWeight={selectedBank === bank ? "bold" : "normal"}
                    >
                      {bank}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              What is your fundraising goal?
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Enter the amount you want to raise for your campaign.
            </Text>
            <Accordion mb={10} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <Input
                  type="number"
                  placeholder="Enter amount in Rs."
                  value={fundraisingGoal}
                  border={"1px"}
                  onChange={handleFundraisingGoalChange}
                />
              </AccordionItem>
            </Accordion>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Campaign Title
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Enter a title for your campaign.
            </Text>
            <Accordion mb={10} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <Input
                  type="text"
                  placeholder="Enter your campaign title"
                  value={campaignTitle}
                  border={"1px"}
                  onChange={handleCampaignTitleChange}
                />
              </AccordionItem>
            </Accordion>
          </Box>
          <Box textAlign={"left"}>
            <Text fontSize="19px" fontWeight={"550"}>
              Add a Description
            </Text>
            <Text fontSize="17px" fontWeight={"500"} color={"#6a6a6a"}>
              Write a compelling description of your campaign.
            </Text>
            <Accordion mb={10} defaultIndex={[1]} allowMultiple>
              <AccordionItem>
                <Textarea
                  placeholder="Enter your campaign description"
                  value={campaignDescription}
                  border={"1px"}
                  onChange={handleCampaignDescriptionChange}
                />
              </AccordionItem>
            </Accordion>
          </Box>
          <Box>
            <button
              style={{
                backgroundColor: "#e51075",
                fontSize: "16px",
                color: "white",
                padding: "10px 10px",
                borderRadius: "2px",
                border: "1px solid #e51075",
                fontWeight: "600",
              }}
            >
              START MY CAMPAINGN
            </button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
export default Campaign;
