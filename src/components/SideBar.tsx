import React from "react";
import { Box, Stack, Image } from "@chakra-ui/react";
import logo from "../images/logo/godfather.svg";
import { Employee } from "../utils/type";

interface Props {
  listPersons: Array<Employee>;
  setEmployeeSelected: (item: Employee) => void;
  employeeSelected: Employee;
  isShowSidebar?: Boolean;
  closeSideBar?: () => void;
}

const SideBar: React.FC<Props> = ({
  listPersons,
  employeeSelected,
  setEmployeeSelected,
  isShowSidebar,
  closeSideBar,
}) => {
  return (
    <Box
      position="fixed"
      top={{
        base: isShowSidebar ? "0" : "-100%",
        md: "0",
      }}
      left="0"
      height="100%"
      minWidth={300}
      background={{
        base: "#000",
        md: "linear-gradient(to bottom,transparent,#000)",
      }}
      zIndex="999"
      width={{
        base: isShowSidebar ? "100%" : "0",
        md: "unset",
      }}
    >
      <Stack px="4" mt="40" gap={10} alignItems="center">
        <Image src={logo} alt="godfather-logo" w="200px" />
        <Stack w="full" textAlign={"center"}>
          {listPersons.map((person) => (
            <Box
              px={5}
              py="2"
              _hover={{ background: "rgba(255,255,255,0.4)" }}
              borderRadius="4"
              transition="all 0.4s"
              cursor="pointer"
              key={person.id}
              backgroundColor={
                employeeSelected.id === person.id
                  ? "rgba(255,255,255,0.4)"
                  : "none"
              }
              onClick={() => {
                setEmployeeSelected(person);

                isShowSidebar && closeSideBar && closeSideBar();
              }}
              fontSize={person.popularity * 5}
            >
              {person.name}
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SideBar;
