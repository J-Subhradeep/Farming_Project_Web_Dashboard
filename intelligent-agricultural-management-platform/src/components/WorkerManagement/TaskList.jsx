import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import MissedIcon from '@mui/icons-material/ErrorOutline';
import TaskListProvider from './TaskListUtils/TaskListProvider';

const TaskList = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    farm: '',
    zone: '',
    worker: '',
  });

  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Simulate fetching tasks for the selected worker
    const fetchedTasks = [
      {
        title: 'Task 1',
        description: 'Description for Task 1',
        assignedOn: '2024-08-01',
        status: 'completed',
      },
      {
        title: 'Task 2',
        description: 'Description for Task 2',
        assignedOn: '2024-08-05',
        status: 'pending',
      },
      {
        title: 'Task 3',
        description: 'Description for Task 3',
        assignedOn: '2024-08-10',
        status: 'missed',
      },
    ];

    setTasks(fetchedTasks);
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

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Task Form</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Farm</InputLabel>
          <Select
            name="farm"
            value={formData.farm}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Farm1">Farm 1</MenuItem>
            <MenuItem value="Farm2">Farm 2</MenuItem>
            <MenuItem value="Farm3">Farm 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Zone</InputLabel>
          <Select
            name="zone"
            value={formData.zone}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Zone1">Zone 1</MenuItem>
            <MenuItem value="Zone2">Zone 2</MenuItem>
            <MenuItem value="Zone3">Zone 3</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Worker</InputLabel>
          <Select
            name="worker"
            value={formData.worker}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="Worker1">Worker 1</MenuItem>
            <MenuItem value="Worker2">Worker 2</MenuItem>
            <MenuItem value="Worker3">Worker 3</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: '16px' }}
          fullWidth
        >
          Submit
        </Button>

        {tasks.length > 0 && <TaskListProvider tasks={tasks} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskList;
