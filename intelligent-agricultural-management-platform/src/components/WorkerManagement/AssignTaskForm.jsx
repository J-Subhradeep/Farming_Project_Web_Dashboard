import { useState } from 'react';
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

const AssignTaskForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    farm: '',
    zone: '',
    worker: '',
    title: '',
    description: '',
    file: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
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
        <TextField
          fullWidth
          margin="normal"
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <input
          type="file"
          // onChange={handleFileChange}
          style={{ marginTop: '16px', marginBottom: '16px' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTaskForm;
