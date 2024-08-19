import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { AreaChartStyles, Contianer, NavigateList, Zonecontainer } from "./styles/IrrigationSystemComponentStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Box, Button, Card, CardActionArea, CardContent, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useEffect, useState } from "react"
import { fetchFarmByManagerId, fetchSensors, fetchSensorState, fetchZones, sendSensorStateUpdate } from "../WorkerManagement/WorkerUtils/Requests"
import AreaChart from "./charts/AreaChart"
const IrrigationControl = () => {
    const [farm, setFarm] = useState('');
    const [sensor, setSensor] = useState('');
    const [sensorId, setSensorId] = useState('')
    let [farms, setFarms] = useState([]);
    const [sensors, setSensors] = useState([]);

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
    const [irrigationSystemOn, setIrrigationSystemOn] = useState(false);
    const [automaticModeEnabled, setAutomaticModeEnabled] = useState(false);

    useEffect(() => {


        fetchSensorState(sensorId, setAutomaticModeEnabled, setIrrigationSystemOn, sessionStorage.getItem("i_token"))
    }, [sensorId])

    const handleAutomaticModeChange = (e) => {
        sendSensorStateUpdate(!automaticModeEnabled, true, false, false, sensorId, sessionStorage.getItem("i_token"));
        setAutomaticModeEnabled(e.target.checked);

    }


    const data = [
        { timestamp: '2024-08-19T10:00:00Z', value: true },
        { timestamp: '2024-08-19T10:05:00Z', value: false },
        { timestamp: '2024-08-19T10:10:00Z', value: true },
        { timestamp: '2024-08-19T10:15:00Z', value: true },
        { timestamp: '2024-08-19T10:20:00Z', value: false },
        // Add more data points as needed
    ];

    const [showGraph, setShowGraph] = useState(false);
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
                                    <MenuItem key={sensor.id} value={sensor.id}
                                        onClick={(e) => setSensorId(sensor.id)
                                        }
                                    >
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
                    <div style={{ display: "flex", justifyContent: "space-between", width: "430px" }}>

                        <FormControlLabel
                            control={
                                <Switch
                                    checked={automaticModeEnabled}
                                    onChange={(e) => handleAutomaticModeChange(e)}
                                    color="primary"
                                />
                            }
                            label="Automatic Mode"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={irrigationSystemOn}
                                    onChange={(e) => setIrrigationSystemOn(e.target.checked)}
                                    color="primary"
                                    disabled={automaticModeEnabled}
                                />
                            }
                            label="Water Pump (On/Off)"
                        />

                    </div>
                </Box>

                {
                    showGraph && <AreaChartStyles>
                        <Typography variant="h6" gutterBottom textAlign={"center"}>
                            Water Pump State Visualizer
                        </Typography>
                        <AreaChart data={data} />
                    </AreaChartStyles>
                }
                <Box sx={{ padding: 3, minWidth: 400, margin: '20px auto', display: "flex", justifyContent: "center" }}>
                    <Link style={{ width: "50%", height: 50, position: "relavite" }}>
                        <Button type="submit" variant="contained" color="secondary" style={{ width: "100%", height: 50, position: "relavite" }}
                            onClick={() => setShowGraph(!showGraph)}
                        >
                            {showGraph ? "Hide" : "Show"} Water Pump State Graph
                        </Button>
                    </Link>
                </Box>


            </Zonecontainer>
        </Contianer>
    )
}

export default IrrigationControl