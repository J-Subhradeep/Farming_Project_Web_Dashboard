import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { Contianer, NavigateList, Zonecontainer } from "./styles/IrrigationSystemComponentStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Box, Button, Card, CardActionArea, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useEffect, useState } from "react"
import { fetchFarmByManagerId, fetchZones } from "../WorkerManagement/WorkerUtils/Requests"
const IrrigationSystemComponent = () => {
    const [farm, setFarm] = useState('');
    const [zone, setZone] = useState('');
    let [farms, setFarms] = useState([]);
    const [zones, setZones] = useState([]);
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
    return (
        <Contianer>

            <LeftSidebar title="Worker Management" />

            <Zonecontainer>
                <NavigateList>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <MdKeyboardArrowRight />
                    <li>Irrigation Systems</li>
                </NavigateList>
                <Box sx={{ padding: 2, maxWidth: 400, margin: '70px auto 10px auto' }}>
                    <Typography variant="h6" gutterBottom textAlign={"center"}>
                        Register Irrigation System
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Farm</InputLabel>
                            <Select
                                value={farm}
                                onChange={(e) => setFarm(e.target.value)}
                            >
                                {/* Replace with dynamic farm options */}
                                {farms.map((farm) => (
                                    <MenuItem key={farm.id} value={farm.id} onClick={(e) => {
                                        fetchZones(farm.id, sessionStorage.getItem("i_token"), setZones);
                                    }}>
                                        {farm.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <InputLabel>Select Zone</InputLabel>
                            <Select
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                            >
                                {zones.map((zone) => (
                                    <MenuItem key={zone.id} value={zone.id}>
                                        {zone.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField
                            label="Zone Name"
                            value={zoneName}
                            onChange={(e) => setZoneName(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register Irrigation System
                        </Button>
                    </form>
                </Box>
                <Box sx={{ padding: 1, minWidth: 400, margin: '20px auto', display: "flex", justifyContent: "center" }}>
                    <Link to="/irrigation-systems-control" style={{ width: "50%", height: 50, position: "relavite" }}>
                        <Button type="submit" variant="contained" color="secondary" style={{ width: "100%", height: 50, position: "relavite" }}>
                            Control Specific Irrigation System
                        </Button>
                    </Link>
                </Box>

            </Zonecontainer>
        </Contianer>
    )
}

export default IrrigationSystemComponent