// import { Container } from '@mui/material'
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

export default function MuiElem() {
  return (
    <Container maxWidth="xl">
      <Typography align="center" color="success" variant="h4" variantMapping={{"h4":"h2"}}>
        Mui Elements
      </Typography>
      <Typography align="center" color="error" variant="h5" component="h3" mt={5}>
        Mui Elements
      </Typography>
      <Typography align="center" color="error" variant="body1" mt={5} sx={{border:"3px solid black", backgroundColor:"darkblue"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi aspernatur facere itaque, laudantium veniam qui consequatur minima id, nemo, est ex soluta delectus mollitia vitae ea. A id blanditiis nobis nostrum earum vero perspiciatis iusto unde quae nam accusamus, possimus, deleniti sapiente, nesciunt aliquam exercitationem optio nulla? Nobis, a libero.
      </Typography>
    </Container>
  );
}
