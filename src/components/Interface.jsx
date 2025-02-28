import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useConfigurator } from "../contexts/Configurator";

const Interface = () => {
  const { legs, setLegs, legsColor, setLegsColor } = useConfigurator();
  const [opened, setOpened] = useState(window.innerWidth > 1024);

  return (
    <Box className="absolute top-0 right-4 z-10 h-full p-3">
      <Stack spacing={3}>
        <Button
          onClick={() => setOpened((opened) => !opened)}
          style={{
            justifyContent: "flex-end",
          }}>
          {opened ? "Close" : "Open"}
        </Button>
        {opened && (
          <>
            <Box className="glass p-3 pr-8">
              <FormControl>
                <FormLabel id="legs-layout">Legs Layout</FormLabel>
                <RadioGroup
                  className="mt-2"
                  value={legs}
                  name="radio-buttons-group"
                  onChange={(e) => setLegs(parseInt(e.target.value))}>
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Standard"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Solid"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Design"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box className="glass p-3 pr-8">
              <FormControl>
                <FormLabel id="legs-layout">Legs Color</FormLabel>
                <RadioGroup
                  className="mt-2"
                  value={legsColor}
                  name="radio-buttons-group"
                  onChange={(e) => setLegsColor(e.target.value)}>
                  <FormControlLabel
                    value={"#999999"}
                    control={<Radio />}
                    label="Black"
                  />
                  <FormControlLabel
                    value={"#ECECEC"}
                    control={<Radio />}
                    label="Chrome"
                  />
                  <FormControlLabel
                    value={"#C9BD71"}
                    control={<Radio />}
                    label="Gold"
                  />
                  <FormControlLabel
                    value={"#4A4A4A"}
                    control={<Radio />}
                    label="Graphite"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Interface;
