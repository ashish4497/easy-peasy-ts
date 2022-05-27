import React from 'react';
import Header from './Header';
import { Box, makeStyles,Typography } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/system';
import {useStoreState} from '../store/store'


const useStyles = makeStyles( theme =>(
  {
    tableContainer : {
      height: 460, 
      width: '100%',
      marginTop:40,
    },
    tableHeading:{
      textAlign:'center',
      textTransform:'capitalize',
      fontSize:22,
      margin:22
    }
  }
));


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Country name', width: 130 },
  { field: 'population', headerName: 'Population', width: 130 },
  {
    field: 'area',
    headerName: 'Area',
    type: 'number',
    width: 90,
  },
  {
    field: 'review',
    headerName: 'Review',
    sortable: false,
    width: 160,
  },
  {
    field: 'denesity',
    headerName: 'Denesity',
    sortable: false,
    width: 160,
  },
];

export default function CountryDataList() {
  const classes = useStyles();
  const {countryList:countryInfo} = useStoreState(({AppStore : {countryList}}) => ({countryList}));

  return (
    <>
    <Header/>
    <Container>
      <Box className={classes.tableContainer}>
      <Typography variant="h4" className={classes.tableHeading}>country list table</Typography>
      <DataGrid
        rows ={countryInfo}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      </Box>
      </Container>
    </>
  )
}
