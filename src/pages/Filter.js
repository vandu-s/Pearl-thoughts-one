import React from "react";
import { Box } from "@mui/system";
import Strip from "../components/Strip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const Filter = () => {
  return (
    <Container fixed>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <Strip>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </Strip>
            <Strip>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </Strip>
            <Strip>
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </Strip>
          </RadioGroup>
        </FormControl>
      </Grid>
    </Container>
  );
};

export default Filter;
