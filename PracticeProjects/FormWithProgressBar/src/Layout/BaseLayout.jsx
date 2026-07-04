import SideBar from '../Component/SideBar'
import {Outlet} from "react-router"
import { Box } from '@mui/material';

function BaseLayout() {
    return (
        <Box
        sx={{
            display: "flex",
            height: "100vh",
            overflow: "hidden"
        }}
        >
        <SideBar />
        <Box
            sx={{
            flexGrow: 1,
            overflow: "auto"
            }}
        >
            <Outlet />
        </Box>
        </Box>
    );
}

export default BaseLayout