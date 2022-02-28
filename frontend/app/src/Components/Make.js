import React from 'react';
import fetchData from '../hooks/fetchData';
import { MDBDataTable } from 'mdbreact';
import axios from "axios";
let JSONdata;
const SERVER_URL = " "
if (SERVER_URL === " "){
    JSONdata =fetchData();
}
else{
  axios.get(SERVER_URL).then(res =>{
    JSONdata = res.data.message
    console.log(JSONdata)
  })
}

const data = {
    columns : [
            {
                label: 'From',
                field: 'from',
                sort: 'asc',
                width: 200
              },
              {
                label: 'To',
                field: 'to',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Amount',
                field: 'amount',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Timestamp',
                field: 'timestamp',
                sort: 'asc',
                width: 200
              }
    ],

    rows : JSONdata
}
function Make(){
    return(
        <MDBDataTable striped bordered small order={['Amount', 'asc' ]} data={data} />
    )
}

export default Make;