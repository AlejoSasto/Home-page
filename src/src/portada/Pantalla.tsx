import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Inicio from './imagen';
import Jaguar from './Jaguar';
import Typography from '@mui/material/Typography';
import LJaguarBlanco from './LJaguarBlanco';
import Insta from './Insta';
import Face from './Face';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Itemm = styled(Paper)(({ theme }) => ({
  backgroundColor: '#042f4a',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Pantalla() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}
        >
          <Inicio />
        </Grid>
        <Grid item xs={12}>
        <Box border={0} sx={{ backgroundColor: '#042f4a', position: 'relative', top: '-4px' }}>.
            <Grid container spacing={0} >

              <Grid item xs={5} style={{ width: '150px', height: '120px', }}>
                <Jaguar />
              </Grid>
              <Grid item xs={4} border={0}>
             
                <LJaguarBlanco />
           
              </Grid>
              <Grid item xs>
                <Typography color="white" variant="body2" gutterBottom align="center">
                  Horario de atención: 8:00 am-6:00 pm
                  <div />
                  Línea nacional 01-8000-51847095
                  <div />
                  info@cormacarena.gov.co
                  <div />
                  Villavicencio, Colombia
                  <div />
                  <Insta/>
                  <Face/>
                </Typography>
              </Grid>


            </Grid>

          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
}