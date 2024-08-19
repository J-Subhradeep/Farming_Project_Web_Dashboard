import axios from "axios";
export const fetchFarmByManagerId = async (id, authtoken, setFarms) => {
    try {
        await axios
            .get(
                `https://api.web-project.in/agriculture/farms/get-farms?managerId=${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${authtoken}`,
                    },
                }
            )
            .then((res) => {
                setFarms(res.data);
            });
    } catch (err) {
        console.log(err);
    }
};

export const fetchZones = async (farmId, token, setZones) => {
    try {
        await axios
            .get(
                `https://api.web-project.in/agriculture/zones/get-zones?farmId=${farmId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                setZones(res.data);
            });
    } catch (err) {
        console.log(err);
    }
};
export const fetchSensors = async (farmId, token, setSensors) => {
    try {
        await axios
            .get(
                `https://api.web-project.in/agriculture/farms/get/irrigation-sensors?farmId=${farmId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                setSensors(res.data);
            });
    } catch (err) {
        console.log(err);
    }
};
export const getWorkerList = async (zoneId, token, setWorkers) => {
    try {
        await axios
            .get(
                `https://api.web-project.in/agriculture/farms/get-workers?zoneId=${zoneId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setWorkers(res.data);
            });
    } catch (err) {
        console.log(err);
    }
};



export async function sendTaskData( assignedTo, title, description, deadline, onClose) {
    const url = 'https://api.web-project.in/agriculture/tasks/add-task';
    const data = {
        "assignedBy":  localStorage.getItem("username"),
        "assignedTo": assignedTo,
        "title": title,
        "description": description,
        "deadline": deadline
    };

    const config = {
        headers: {
            'Authorization': `Bearer ${sessionStorage.getItem("i_token")}`, // Replace with your actual token
            'Content-Type': 'application/json'
        }
    };
    // console.log(data, config);
    
    try {
        const response = await axios.post(url, data, config);
        console.log('Response:', response.data);
        onClose();
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
    }
}

export const fetchTaskAnalytics = async (startDate, endDate, setTaskAnalytics) => {
    try {
        const response = await axios.post(
            'https://api.web-project.in/search-n-analytics/task/analytics',
            {
                startDate: startDate,
                endDate: endDate,
                managerId: localStorage.getItem("username")
            },
            {
                headers: {
                    Authorization: 'Bearer ' + sessionStorage.getItem("i_token"),
                    'Content-Type': 'application/json'
                }
            }
        );

        const { completedTasks, pendingTasks, missedTasks } = response.data;
        setTaskAnalytics({ completedTasks, pendingTasks, missedTasks });
    } catch (error) {
        console.error('Error fetching task analytics:', error);
        // Handle error accordingly
    }
};


export const fetchSensorState = async (sensorId,setAutomaticModeEnabled, setIrrigationSystemOn, token) => {
    try {
      const response = await axios.get(
        'https://api.web-project.in/websocket/api/sensor/get-state?id='+sensorId,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const { automaticModeEnabled,  irrigationSystemOn, } = response.data;

      setAutomaticModeEnabled(automaticModeEnabled);
      setIrrigationSystemOn(irrigationSystemOn);
    } catch (error) {
      console.error('Error fetching sensor state:', error);
    }
  };

export async function sendSensorStateUpdate(automaticModeEnabled, automationControlSignal, irrigationSystemOn,irrigationControlSignal, sensorId, token) {
    const requestBody = {
      toId: sensorId,
      automaticModeEnabled,
      automationControlSignal,
      irrigationSystemOn,
      irrigationControlSignal
    };
  
    try {
      const response = await axios.post(
        'https://api.web-project.in/websocket/api/sensor/send',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error sending sensor state update:', error);
    }
  }