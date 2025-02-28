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
  const { legs, setLegs } = useConfigurator();
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
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Interface;
