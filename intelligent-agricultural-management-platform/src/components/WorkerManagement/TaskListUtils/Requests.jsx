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
                console.log(res.data);
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
                console.log(res.data);
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