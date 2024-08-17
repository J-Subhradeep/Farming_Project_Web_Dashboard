import { useEffect, useState } from 'react';
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
import { fetchFarmByManagerId, fetchZones, getWorkerList, sendTaskData } from './WorkerUtils/Requests';

const AssignTaskForm = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    farm: '',
    zone: '',
    worker: '',
    title: '',
    description: '',
    deadline: 0,
    files: ''
  });
  let [farms, setFarms] = useState([]);
  const [zones, setZones] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [workerId, setWorkerId] = useState(null);
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const localToken = sessionStorage.getItem("i_token");
    if (!localToken) {
      window.location.href = "/login";
    }
    fetchFarmByManagerId(localStorage.getItem("username"), localToken, setFarms);
  }, []);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Assign Task Form</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="normal">
          <InputLabel>Select Farm</InputLabel>
          <Select
            name="farm"
            value={formData.farm}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
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
            name="zone"
            value={formData.zone}
            onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {zones.map((zone) => (
              <MenuItem key={zone.id} value={zone.id} onClick={(e) => {
                getWorkerList(zone.id, sessionStorage.getItem("i_token"), setWorkers);
              }}>
                {zone.name}
              </MenuItem>
            ))}
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
            {workers.map((worker) => (
              <MenuItem key={worker.id} value={worker.id} onClick={(e) => {
                setWorkerId(worker.id);
                //  getWorkerList(worker.id, sessionStorage.getItem("i_token"), setWorkers);
              }}>
                {worker.name} | {worker.mobile}
              </MenuItem>
            ))}
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
        <TextField
          fullWidth
          type='number'
          margin="normal"
          label="Complete By (Days)"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          // multiline
          // rows={4}
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
        <Button onClick={()=>{
          sendTaskData(formData.worker, formData.title, formData.description, formData.deadline, onClose)
        }} color="primary" variant='contained'>
          Assign
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTaskForm;
