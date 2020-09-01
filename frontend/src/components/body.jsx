import React, { useState, useEffect } from 'react';
import {MainPage, Box, Text} from './styles';
import NavBar from './navBar';



function Body() {
 const [box, setBox] = useState('Click Here to Load Current Resume from GIST')
 function clickHandler(){
        fetch('https://gist.githubusercontent.com/atocchi/aff068d4477f105b39b88ffb95fa83ca/raw/48b88ad3c348505ac41a5a0c647974652126345d/data.json')
    .then((response) =>{
        response.json().then((res) =>{
            console.log(res)
            setBox(res.p1)
        })
    })
    }
    return(
        <MainPage>
            <NavBar />
            <div style={{display:'flex', flexDirection:'row',marginLeft: '5%'}}>
            <div style={{width: '33%'}}>
            <Box onClick={() => clickHandler() }>
                <Text>{box}</Text>
            </Box>
            <Box></Box>
            </div>
            <div style={{width: '33%'}}>
            <Box></Box>
            <Box></Box>
            </div>
            <div style={{width: '33%'}}>
            <Box></Box>
            <Box></Box>
            </div>
            </div>
        </MainPage>
    )
}

export default Body;