import logo from "./logo.svg";
import "./SecondPage.css";
import ButtonAppBar from "./NavBar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const qualityLevels = {
  LOW: "Low",
  NORMAL: "Normal",
  HIGH: "High",
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SecondPage() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(30);
  const [qualityLevel, setQualityLevel] = useState(null);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setQualityLevel(event.target.value);
  };

  return (
    <div className="container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="cardsRow">
        <Card variant="outlined" className="cards">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                Online Mode
              </Typography>
              <Typography variant="body2">
                Is this Application connected to the Internet?
                <br />
              </Typography>
              {/* Dummy Comment */}
            </CardContent>
            <FormGroup>
              <FormControlLabel
                className="switch"
                control={
                  <Switch
                    defaultChecked={isOnline}
                    onChange={() => {
                      setIsOnline(!isOnline);
                    }}
                  />
                }
              />
            </FormGroup>
          </React.Fragment>
        </Card>
        <Card variant="outlined" className="cards">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                Master Volume
              </Typography>
              <Typography variant="body2">
                Overrides all other sound settings in this application
                <br />
              </Typography>
            </CardContent>
            <Box sx={{ width: 300 }}>
              <div>
                <Slider
                  className="sliderControl"
                  aria-label="Volume"
                  defaultValue={volumeLevel}
                  getAriaValueText={() =>
                    "Caution: Listening at high volumes may cause ear damage!"
                  }
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={0}
                  max={100}
                  onChange={(e) => {
                    setVolumeLevel(e.target.value);
                  }}
                />
              </div>
            </Box>
          </React.Fragment>
        </Card>
        <Card variant="outlined" className="cards">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                Sound Quality
              </Typography>
              <Typography variant="body2">
                Manually control the music quality in event of poor connection
                <br />
              </Typography>
            </CardContent>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
                className="selectionBox"
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Select Quality</em>;
                  }
                  return selected.join(",");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                {Object.values(qualityLevels).map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </React.Fragment>
        </Card>
      </div>
      <h4 className="systemNot">System Notifications: </h4>
      {!isOnline && <h2> You are now Offline</h2>}
      {volumeLevel >= 80 && (
        <h2>Caution: Listening at high volumes may cause ear damage!</h2>
      )}
      {qualityLevel == qualityLevels.LOW && (
        <h2>
          {
            "Music quality is degraded. Increase quality if your connection allows it."
          }
        </h2>
      )}
    </div>
  );
}

export default SecondPage;
