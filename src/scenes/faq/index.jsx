import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
            <Typography color={colors.greenAccent[500]} variant="h5">
                An Important Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis 
                minima odit, non fugiat laboriosam perspiciatis dolorum magni.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Another Important Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis 
                minima odit, non fugiat laboriosam perspiciatis dolorum magni.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
            <Typography color={colors.greenAccent[500]} variant="h5">
                Your Favourite Important Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis 
                minima odit, non fugiat laboriosam perspiciatis dolorum magni.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
            <Typography color={colors.greenAccent[500]} variant="h5">
                SOme Random Important Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis 
                minima odit, non fugiat laboriosam perspiciatis dolorum magni.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
            <Typography color={colors.greenAccent[500]} variant="h5">
                The Final Important Questions
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum corporis 
                minima odit, non fugiat laboriosam perspiciatis dolorum magni.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
