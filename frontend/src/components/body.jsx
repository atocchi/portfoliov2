import React, { useState, useEffect } from 'react';
import {MainPage, Box, Text, Container, Column} from './styles';
import NavBar from './navBar';



function Body() {
 const [box, setBox] = useState('Click Here to Load Current Resume from GIST')
 const [gist, setGist] = useState({
     name: '',
     email: '',
     linkedin: '',
     phone: '',
     lang: [''],
     db: [''],
     framework: [''],
     other: [''],
     education: [{degree: '', college: '', location: '', year: ''}],
     project: [{name: '', github: '', deployed: '', tools: '', bulletpoints: [{bp: ''}]}],
     experience: [{name: '', postion: '', start: '12/31/1969', end: '01/01/1970', description: ''}]
 })
 function clickHandler(){
        fetch('https://gist.githubusercontent.com/atocchi/aff068d4477f105b39b88ffb95fa83ca/raw/4af46819030ebc5b90f9b20e1d7ff24d37208f9f/data.json')
    .then((response) =>{
        if(response.status === 200){
        response.json().then((res) =>{
            setGist(res)
        })
        }
        else{
            alert(response.status)
        }
    })
    }
    return(
        <MainPage>
            <NavBar />
            <Container>
            <Column>
            <Box onClick={() => clickHandler() }>
                <Text>{gist.name}</Text>
                <Text>{gist.email}</Text>
                <Text>{gist.linkedin}</Text>
                <Text>{gist.phone}</Text>
            </Box>
            <Box>
                { gist.lang.map((key,value) => 
                    <Text>{key}</Text>
                ) }
            </Box>
            </Column>
            <Column>
            <Box></Box>
            <Box></Box>
            </Column>
            <Column>
            <Box></Box>
            <Box></Box>
            </Column>
            </Container>
        </MainPage>
    )
}

export default Body;