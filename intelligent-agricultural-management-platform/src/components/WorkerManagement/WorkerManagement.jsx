import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { Contianer, NavigateList, Zonecontainer } from "./styles/WorkerManagemetStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Button, Card, CardActionArea, CardContent, Grid, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
const WorkerManagement = () => {
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
                    <li>Worker Management</li>
                </NavigateList>
                <div className="button-container" >

                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Card sx={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, color: "white" }}>
                                <CardActionArea component={Link} to="/home" sx={{ textAlign: 'center', height: "100%", display: "flex", backgroundColor: "primary" }}>
                                    <CardContent>
                                        <AssignmentTurnedInIcon sx={{ fontSize: 40 }} />
                                        <Typography variant="h6">Assign Tasks</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Card sx={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, color: "white" }}>
                                <CardActionArea component={Link} to="/home" sx={{ textAlign: 'center', height: "100%", display: "flex", backgroundColor: "primary" }}>
                                    <CardContent>
                                        < BarChartIcon sx={{ fontSize: 40 }} />
                                        <Typography variant="h6">Task Analytics</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Card sx={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, color: "white" }}>
                                <CardActionArea component={Link} to="/home" sx={{ textAlign: 'center', height: "100%", display: "flex", backgroundColor: "primary" }}>
                                    <CardContent>
                                        <FormatListNumberedRtlIcon sx={{ fontSize: 40 }} />
                                        <Typography variant="h6">Task List</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Card sx={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: theme.palette.primary.main, color: "white" }}>
                                <CardActionArea component={Link} to="/home" sx={{ textAlign: 'center', height: "100%", display: "flex", backgroundColor: "primary" }}>
                                    <CardContent>
                                        <AppRegistrationIcon sx={{ fontSize: 40 }} />
                                        <Typography variant="h6">Register Worker</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Zonecontainer>
        </Contianer>
    )
}

export default WorkerManagement