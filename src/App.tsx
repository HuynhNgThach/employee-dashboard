import * as React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import banner from "./images/HeaderImage/godfatherHeader.jpg";
import SideBar from "./components/SideBar";
import { employees } from "./data.js";
import { Employee } from "./utils/type";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { theme } from "./chakra/theme";

export const App = () => {
  const [employeeSelected, setEmployeeSelected] = React.useState<Employee>(
    employees[0]
  );
  const [openSideBarMb, setOpenSideBarMb] = React.useState<boolean>(false);

  return (
    <ChakraProvider theme={theme}>
      <Box height="100%" zIndex={1}>
        <Box
          sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
            height: "40%",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
          }}
        ></Box>
        <Box
          display={{
            base: "block",
            md: "none",
          }}
          position="fixed"
          top="10px"
          left="10px"
          fontSize="3xl"
          cursor="pointer"
          zIndex={9999}
          onClick={() => {
            setOpenSideBarMb(!openSideBarMb);
          }}
        >
          {openSideBarMb ? <IoMdClose /> : <HiMenu />}
        </Box>
        <SideBar
          isShowSidebar={openSideBarMb}
          listPersons={employees}
          employeeSelected={employeeSelected}
          setEmployeeSelected={setEmployeeSelected}
          closeSideBar={() => {
            setOpenSideBarMb(false);
          }}
        />
        <Box
          ml={{
            base: "0",
            md: "350px",
          }}
          mt="-50px"
          zIndex="9"
          position="relative"
          px={4}
        >
          <Flex
            gap={8}
            flexDirection={{
              base: "column",
              md: "row",
            }}
            alignItems={{
              base: "center",
              md: "flex-start",
            }}
          >
            <Image
              boxSize="100px"
              src={
                process.env.PUBLIC_URL + "ProfilePics/" + employeeSelected.image
              }
              objectFit="cover"
              alt="Dan Abramov"
              border="1px solid #aaa"
              borderRadius={4}
              sx={{
                boxShadow: "13px 10px 26px  rgba(0,0,0,0.5);",
              }}
            />
            <Box
              w={{
                base: "100%",
                lg: "70%",
              }}
            >
              <Text fontSize="3xl" fontWeight="bold">
                {employeeSelected.name}
              </Text>
              <Flex gap={5} mt={6}>
                <Text>Popularity</Text>
                <Slider
                  aria-label="slider-ex-2"
                  colorScheme={"blackAlpha"}
                  value={employeeSelected.popularity}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Flex>
              <Box p="5" background="#0e0e0e6d" borderRadius={4} mt="5">
                <Text fontSize="xl" mb={2}>
                  Biography
                </Text>
                <Text color="#ccc">{employeeSelected.biography}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
