import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { Contianer, NavigateList, Zonecontainer } from "./styles/IrrigationSystemComponentStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Box, Button, Card, CardActionArea, CardContent, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useEffect, useState } from "react"
import { fetchFarmByManagerId, fetchSensors, fetchZones } from "../WorkerManagement/WorkerUtils/Requests"
const IrrigationControl = () => {
    const [farm, setFarm] = useState('');
    const [sensor, setSensor] = useState('');
    let [farms, setFarms] = useState([]);
    const [sensors, setSensors] = useState([]);
    const [zoneName, setZoneName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    useEffect(() => {
        const localToken = sessionStorage.getItem("i_token");
        if (!localToken) {
            window.location.href = "/login";
        }
        fetchFarmByManagerId(localStorage.getItem("username"), localToken, setFarms);
    }, []);

    const theme = useTheme();



    // const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [automaticMode, setAutomaticMode] = useState(false);



    return (
        <Contianer>

            <LeftSidebar title="Worker Management" />

            <Zonecontainer>
                <NavigateList>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <MdKeyboardArrowRight />
                    <Link to="/irrigation-systems">
                        <li>Irrigation Systems</li>
                    </Link>
                    <MdKeyboardArrowRight />
                    <li>Irrigation Sensor Control</li>
                </NavigateList>
                <Box sx={{ padding: 2, maxWidth: 400, margin: '70px auto 10px auto' }}>
                    <Typography variant="h6" gutterBottom textAlign={"center"}>
                        Control Irrigation System
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Farm</InputLabel>
                            <Select
                                value={farm}
                                onChange={(e) => setFarm(e.target.value)}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {/* Replace with dynamic farm options */}
                                {farms.map((farm) => (
                                    <MenuItem key={farm.id} value={farm.id} onClick={(e) => {
                                        fetchSensors(farm.id, sessionStorage.getItem("i_token"), setSensors);
                                    }}>
                                        {farm.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Irrigation Sensor</InputLabel>
                            <Select
                                value={sensor}
                                onChange={(e) => setSensor(e.target.value)}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {sensors.map((sensor) => (
                                    <MenuItem key={sensor.id} value={sensor.id}>
                                        {sensor.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </form>
                </Box>
                <Box sx={{ padding: 2, maxWidth: 500, margin: '0 auto', display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h6" gutterBottom textAlign={"center"}>
                        Control Panel
                    </Typography>
                    <div style={{display:"flex", justifyContent:"space-between", width:"430px"}}>

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={automaticMode}
                                    onChange={(e) => setAutomaticMode(e.target.checked)}
                                    color="primary"
                                />
                            }
                            label="Automatic Mode"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={switch2}
                                    onChange={(e) => setSwitch2(e.target.checked)}
                                    color="primary"
                                    disabled={automaticMode}
                                />
                            }
                            label="Water Pump (On/Off)"
                        />

                    </div>
                </Box>

            </Zonecontainer>
        </Contianer>
    )
}

export default IrrigationControl