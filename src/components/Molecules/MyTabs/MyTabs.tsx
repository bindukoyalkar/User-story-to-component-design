import React, { useState } from 'react';
import {Tabs, Tab, Typography} from '@mui/material'
interface Props{

}
const MyTabs=(props:Props)=> {
    const [tabValue,setTabValue]= useState(1)
    const handleTabs=(e:React.SyntheticEvent<Element, Event> , val: number)=>{
        setTabValue(val)
        }
    return (
        <div style={{marginTop:'5%', marginBottom:'5%'}}>
    <Tabs value={tabValue} onChange={handleTabs} style={{color:'green'}}>
      <Tab value={1} label="Synopsis" style={{textTransform:"none",width:'200px',fontWeight:700}}/>
      <Tab value={2} label="Who is it for?" style={{textTransform:"none",width:"200px",fontWeight:700}} />
      <Tab value={3} label="About the author" style={{textTransform:"none",width:'200px',fontWeight:700}} />
    </Tabs>
    { tabValue === 1 && <Typography variant='body2' >Masters of Scale (2021) is part fascinating anecdote, part how-to guide for entrepreneurs who are preparing to launch their product or scale up their company. With case studies and stories behind some of the world’s biggest companies, it isolates the principles behind successfully scaling up.</Typography>}

        </div>
    );
}

export default MyTabs;