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
import { Button } from '@mui/material';
import { TaskListProviderStyles } from '../styles/WorkerManagemetStyles';

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

const TaskListProvider = ({ tasks }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const filteredTasks = tasks.filter((task) => {
        const taskDate = new Date(task.assignedOn);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        return (!start || taskDate >= start) && (!end || taskDate <= end);
    });

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

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

    return (
        <div style={{ marginTop: 20 }}>
            <TaskListProviderStyles>

                <TextField
                    label="Start Date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    style={{ marginRight: '8px' }}
                />
                <TextField
                    label="End Date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <Button color="primary" variant="contained" className='submit-button'>
                    Filter
                </Button>
            </TaskListProviderStyles>
            <CustomScrollbar>
                <List>
                    {currentTasks.map((task, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>{getStatusIcon(task.status)}</ListItemIcon>
                            <ListItemText
                                primary={task.title}
                                secondary={`${task.description} (Assigned on: ${task.assignedOn})`}
                            />
                        </ListItem>
                    ))}
                </List>
            </CustomScrollbar>
            <Pagination
                count={Math.ceil(filteredTasks.length / 2)}
                page={currentPage}
                onChange={handlePageChange}
                style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}
            />
        </div>
    );
};

export default TaskListProvider;
