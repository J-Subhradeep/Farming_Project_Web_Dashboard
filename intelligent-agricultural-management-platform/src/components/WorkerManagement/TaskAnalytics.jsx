import { Link } from "react-router-dom"
import LeftSidebar from "../leftsidebar/Leftsidebar"
import { Contianer, NavigateList, TaskListProviderStyles, Zonecontainer } from "./styles/WorkerManagemetStyles"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Button, ButtonGroup, Card, CardActionArea, CardContent, Grid, TextField, Typography, useTheme } from "@mui/material"
import { Home, Info, ContactMail, Settings, People } from '@mui/icons-material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useState } from "react"
import AssignTaskForm from "./AssignTaskForm"
import TaskList from "./TaskList"
import PieChart from "./WorkerUtils/charts/PieChart"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { DatetimeConverter } from "./WorkerUtils/DateTimeConverter"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
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

    const taskData = {
        completedTasks: 2,
        pendingTasks: 3,
        missedTasks: 4,
    };

    const [startDatetime, setStartDatetime] = useState(null);
    const [endDatetime, setEndDatetime] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleStartDatetimeChange = (newValue) => {
        setStartDate(DatetimeConverter(newValue))
        setStartDatetime(newValue);
    };

    const handleEndDatetimeChange = (newValue) => {
        setEndDate(DatetimeConverter(newValue));
        setEndDatetime(newValue);
    };
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
                    <div className="task-analytics-docs docs1">

                        <Typography variant="h4" gutterBottom>
                            Overall Task Analytics
                        </Typography>
                        <Typography variant="body1" paragraph textAlign={"justify"}>

                            The Farm Manager will utilize the task analytics to thoroughly review and assess the performance and progress of tasks assigned within the farm. By analyzing key metrics such as task completion rates, pending tasks, and missed deadlines, the manager can gain valuable insights into the efficiency of farm operations. This data-driven approach enables the manager to make informed decisions when assigning tasks to farm workers. The insights from the analytics help in understanding which tasks are completed on time and which face delays, allowing the manager to allocate resources more effectively and optimize workflow. By leveraging task analytics, the Farm Manager ensures that tasks are assigned based on performance trends, ultimately enhancing productivity and operational efficiency on the farm.
                        </Typography>

                        <TaskListProviderStyles>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>

                                <DateTimePicker
                                    label="Start DateTime"
                                    value={startDatetime}
                                    onChange={handleStartDatetimeChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                <DateTimePicker
                                    sx={{ marginLeft: 2 }}
                                    label="End DateTime"
                                    value={endDatetime}
                                    onChange={handleEndDatetimeChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <Button color="primary" variant="contained" className='submit-button'
                                onClick={(e) => {
                                    fetchTasks(currentPage - 1, 3, startDate, endDate, workerId, sessionStorage.getItem("i_token"))
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
                            completedTasks={taskData.completedTasks}
                            pendingTasks={taskData.pendingTasks}
                            missedTasks={taskData.missedTasks}
                        />
                    </div>
                </div>

            </Zonecontainer>
        </Contianer>
    )
}

export default TaskAnalytics;