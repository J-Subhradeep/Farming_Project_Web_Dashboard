import React from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SensorsIcon from '@mui/icons-material/Sensors';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Link } from 'react-router-dom';
const Items = () => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"


        >
            <Link to="/">
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </Link>

            <Link to="/farm-management">
                <ListItemButton>
                    <ListItemIcon>
                        <AgricultureIcon />
                    </ListItemIcon>
                    <ListItemText primary="Farm Management" />
                </ListItemButton>
            </Link>

            <Link to="/zone-management">
                <ListItemButton>
                    <ListItemIcon>
                        <GroupWorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Zone Management" />
                </ListItemButton>
            </Link>

            <Link to="/worker-management">
                <ListItemButton>
                    <ListItemIcon>
                        <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText primary="Worker Management" />
                </ListItemButton>
            </Link>

            <Link to="/irrigation-systems">
                <ListItemButton>
                    <ListItemIcon>
                        <WaterDropIcon />
                    </ListItemIcon>
                    <ListItemText primary="Irrigation Systems" />
                </ListItemButton>
            </Link>

            <Link to="/">
                <ListItemButton onClick={(e) => alert(`This feature is coming soon...`)}>
                    <ListItemIcon>
                        <SensorsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Soil Sensors" />
                </ListItemButton>
            </Link>



        </List>
    )
}

export default Items