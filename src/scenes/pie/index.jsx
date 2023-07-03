import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieCHart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  )
}

export default Bar
