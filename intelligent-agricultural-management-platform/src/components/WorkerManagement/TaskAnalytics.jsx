import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { Contianer, NavigateList, TaskListProviderStyles, Zonecontainer } from "./styles/WorkerManagemetStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Box, Button, ButtonGroup, Card, CardActionArea, CardContent, Dialog, DialogActions, DialogContent, DialogTitle, Grid, styled, TextField, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useEffect, useState } from "react"
import AssignTaskForm from "./AssignTaskForm"
import TaskList from "./TaskList"
import PieChart from "./WorkerUtils/charts/PieChart"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { DatetimeConverter, formatDateReadable, getcurrentoDate, getOneWeekAgoDate } from "./WorkerUtils/DateTimeConverter"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from 'dayjs';
import axios from "axios";
import { fetchTaskAnalytics } from "./WorkerUtils/Requests"
const CenteredDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        margin: theme.spacing(2),
        width: '80%',
    },
}));
const TaskAnalytics = () => {
    const [dialogState, setDialogState] = useState({
        form1: false,
        form2: false,
        form3: false,
        form4: false,
    });

    const handleOpenDialog = (form) => {
        setDialogState({ ...dialogState, [form]: true });
    };

    const handleCloseDialog = (form) => {
        setDialogState({ ...dialogState, [form]: false });
    };

    const handleSubmitForm = (form, formData) => {
        console.log(`Form ${form} Data:`, formData);
        handleCloseDialog(form);
    };
    const theme = useTheme();

    const [taskAnalytics, setTaskAnalytics] = useState({
        completedTasks: 0,
        pendingTasks: 0,
        missedTasks: 0
    });

    const [startDatetime, setStartDatetime] = useState(dayjs(getOneWeekAgoDate()));
    const [endDatetime, setEndDatetime] = useState(dayjs(getcurrentoDate()));
    const [startDate, setStartDate] = useState(DatetimeConverter(startDatetime));
    const [endDate, setEndDate] = useState(DatetimeConverter(endDatetime));
    const handleStartDatetimeChange = (newValue) => {


        setStartDate(DatetimeConverter(newValue))
        setStartDatetime(newValue);
    };

    const handleEndDatetimeChange = (newValue) => {
        setEndDate(DatetimeConverter(newValue));
        setEndDatetime(newValue);
    };

    const [open, setOpen] = useState(false);
    const [activePicker, setActivePicker] = useState(null);
 

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = (picker) => {
        setActivePicker(picker);
        setOpen(true);
    };

    useEffect(() => {
        fetchTaskAnalytics(startDate, endDate, setTaskAnalytics);
    }, [])
    
    return (
        <Contianer>

            <LeftSidebar title="Task Analytics" />

            <Zonecontainer>
                <NavigateList>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <MdKeyboardArrowRight />
                    <Link to="/worker-management">
                        <li>Worker Management</li>
                    </Link>
                    <MdKeyboardArrowRight />
                    <li>Task Analytics</li>

                </NavigateList>
                <div className="task-analytics">
                    <div className="task-analytics-docs">

                        <Typography variant="h4" gutterBottom>
                            Overall Task Analytics
                        </Typography>
                        <Typography variant="body1" paragraph textAlign={"justify"}>

                            The Farm Manager will use task analytics to evaluate farm performance. By analyzing task completion rates, delays, and pending tasks, the manager can optimize resource allocation and improve overall efficiency. This data-driven approach helps assign tasks effectively based on worker performance.
                        </Typography>

                        <TaskListProviderStyles>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TextField
                                    label="Start DateTime"
                                    value={startDatetime ? formatDateReadable( startDatetime.format('YYYY-MM-DDTHH:mm')) : ''}
                                    onClick={() => handleClickOpen('start')}
                                    readOnly
                                />
                                <TextField
                                    sx={{ marginLeft: 2 }}
                                    label="End DateTime"
                                    value={endDatetime ? formatDateReadable(endDatetime.format('YYYY-MM-DDTHH:mm')) : ''}
                                    onClick={() => handleClickOpen('end')}
                                    readOnly
                                />

                                <CenteredDialog open={open} onClose={handleClose}>
                                    <DialogTitle>Select Date and Time</DialogTitle>
                                    <DialogContent>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <DateTimePicker
                                                value={activePicker === 'start' ? startDatetime : endDatetime}
                                                onChange={activePicker === 'start' ? handleStartDatetimeChange : handleEndDatetimeChange}
                                                renderInput={(params) => <TextField {...params} />}
                                                sx={{ width: '100%' }}
                                            />
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button onClick={handleClose}>OK</Button>
                                    </DialogActions>
                                </CenteredDialog>
                            </LocalizationProvider>
                            <Button color="primary" variant="contained" className='submit-button'
                                onClick={(e) => {
                                    fetchTaskAnalytics(startDate, endDate, setTaskAnalytics);
                                }}

                            >
                                Check
                            </Button>
                        </TaskListProviderStyles>
                        <ButtonGroup variant="contained" aria-label="button group" style={{ marginTop: '20px' }}>
                            <Button
                                color="primary"

                            >
                                Show Task Analytics For Individual Workers
                            </Button>

                        </ButtonGroup>

                    </div>
                    <div className="task-analytics-docs docs2">

                        <PieChart
                            completedTasks={taskAnalytics.completedTasks}
                            pendingTasks={taskAnalytics.pendingTasks}
                            missedTasks={taskAnalytics.missedTasks}
                        />
                    </div>
                </div>

            </Zonecontainer>
        </Contianer>
    )
}

export default TaskAnalytics;