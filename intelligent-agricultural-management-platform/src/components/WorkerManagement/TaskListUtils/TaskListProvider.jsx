import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import TextField from '@mui/material/TextField';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import MissedIcon from '@mui/icons-material/ErrorOutline';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { TaskListProviderStyles } from '../styles/WorkerManagemetStyles';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { checkIfDeadlineExpired, DatetimeConverter, formatDateString } from './DateTimeConverter';
import axios from 'axios';
const CustomScrollbar = styled('div')({
    maxHeight: '300px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
    },
});

const TaskListProvider = ({ workerId }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalPages, setTotalPages] = useState(2);
    const [currentTasks, setCurrentTasks] = useState([])
    const handlePageChange = (event, value) => {
        console.log(value);
        setCurrentPage(value);
        fetchTasks(value - 1, 3, startDate, endDate, workerId, sessionStorage.getItem("i_token"))
    };


    async function fetchTasks(pageNo, pageSize, startDate, endDate, workerId, authToken) {
        try {
            // const response = await axios.post(, {


            //     startDate: startDate,
            //     endDate: endDate,
            //     workerId: workerId,

            // }).catch(err => console.log(err)
            // );
            const response = await axios.post('https://api.web-project.in/search-n-analytics/task/get-tasks?pageNo=' + pageNo + "&pageSize=" + pageSize,

                {
                    startDate: startDate,
                    endDate: endDate,
                    workerId: workerId,
                }
                , {
                    headers: {
                        "Authorization": "Bearer " + authToken
                    }
                }

            )


            const data = response.data;
            console.log(data);

            // Set the state variables with the response data
            setCurrentTasks(data.tasks);
            // setCurrentPage(data.pageNo);
            setTotalPages(Math.ceil(data.totalRecords / data.pageSize));
        } catch (error) {
            alert('Error:' + error);
        }
    }

    const [startDatetime, setStartDatetime] = React.useState(null);
    const [endDatetime, setEndDatetime] = React.useState(null);
    const handleStartDatetimeChange = (newValue) => {
        setStartDate(DatetimeConverter(newValue))
        setStartDatetime(newValue);
    };

    const handleEndDatetimeChange = (newValue) => {
        setEndDate(DatetimeConverter(newValue));
        setEndDatetime(newValue);
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircleIcon style={{ color: 'green' }} />;
            case 'pending':
                return <PendingIcon style={{ color: 'orange' }} />;
            case 'missed':
                return <MissedIcon style={{ color: 'red' }} />;
            default:
                return null;
        }

    };
    const getTaskStatus = (task) => {
        if (task.done == true) {
            return "completed";
        }
        else {
            return checkIfDeadlineExpired(task.deadline);
        }
    }

    return (
        <div style={{ marginTop: 20 }}>
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
                    Filter
                </Button>
            </TaskListProviderStyles>
            <CustomScrollbar>
                <List>
                    {currentTasks.map((task, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>{getStatusIcon(getTaskStatus(task))}</ListItemIcon>
                            <ListItemText
                                primary={task.title}
                                secondary={<>
                                    <Typography component="span" variant="body2" color="textPrimary">
                                        {task.description} | {task.done}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="textSecondary">
                                        Assigned on: {formatDateString(task.assignedOn)} | Deadline: {formatDateString(task.deadline)}
                                    </Typography>
                                </>}
                            />
                        </ListItem>
                    ))}
                </List>
            </CustomScrollbar>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
            />
        </div>
    );
};

export default TaskListProvider;
