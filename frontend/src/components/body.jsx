import React, { useState, useEffect, Fragment } from 'react';
import {MainPage, Box, Text, Container, Column, Cover, CoverText, Oval, Holder, BlackOval, RedX} from './styles';
import NavBar from './navBar';
let data = '<div> bepis </div>'

function Body() {
 const [box, setBox] = useState({
  1:false,
  2:false,
  3:false,
  4:false,
  5:false,
  6:false
 });
 const [exp, setExp] = useState(0);
 const [proj, setProj] = useState(0);
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
     projects: [{name: '', github: '', deployed: '', tools: '', bulletpoints: [{bp: ''}]}],
     experience: [{name: '', postion: '', start: '12/31/1969', end: '01/01/1970', description: ''}]
 });
 function clickHandler(x){
        fetch('https://gist.githubusercontent.com/atocchi/aff068d4477f105b39b88ffb95fa83ca/raw/4af46819030ebc5b90f9b20e1d7ff24d37208f9f/data.json')
    .then((response) =>{
        if(response.status === 200){
        response.json().then((res) =>{
            setGist(res)
            setBox({...box, [x]: true})
        //    box[x] ? setBox({...box, [x]: false}) : setBox({...box, [x]: true});
        })
        }
        else{
            alert(response.status)
        }
    })
    };
    return(
        <MainPage>
            <NavBar />
            <Container>
            <Column>
            <Box onClick={() => clickHandler(1) }>
            {
            box[1] 
            ?
            <Fragment>
                 <Holder>
                <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [1]: false})}}></RedX>
                </Holder>
                <Text>{gist.name}</Text>
                <Text><a href={'mailto:'+ gist.email}>{gist.email}</a></Text>
                <Text><a href={gist.linkedin}>{gist.linkedin}</a></Text>
                <Text>{gist.phone}</Text>
            </Fragment>
            :
            <Cover>
               Contact Info
            </Cover>
            }
            </Box>
            <Box onClick={() => clickHandler(2) }>
            {
            box[2] 
            ?
            <Fragment>
                 <Holder>
                <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [2]: false})}}></RedX>
                </Holder>
                <Text>
                { gist.lang.map((key,value) => 
                   `${key}, `
                ) }
                </Text>
                <Text>
                { gist.db.map((key,value) => 
                   `${key}, `
                ) }
                </Text>
                <Text>
                { gist.framework.map((key,value) => 
                   `${key}, `
                ) }
                </Text>
                <Text>
                { gist.other.map((key,value) => 
                   `${key}, `
                ) }
                </Text>
            </Fragment>
            :
            <Cover>
                Skills & Langauges
            </Cover>
            }
            </Box>
            </Column>
            <Column>
            <Box onClick={() => clickHandler(3) }>
            {
            box[3] 
            ?
            <Fragment>
                 <Holder>
                <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [3]: false})}}></RedX>
                </Holder>
                { gist.education.map((key,value) => 
                <Text>
                   <Text>{key.degree} - {key.year}</Text>
                   <Text>{key.college}: {key.location}</Text>          
                </Text>
                ) }
            </Fragment>
            :
            <Cover>
                Education
            </Cover>
                }
            </Box>
            <Box onClick={() => clickHandler(4) }>
            {
            box[4] 
            ?
            <Fragment>
                <Holder>
                <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [4]: false})}}></RedX>
                </Holder>
            </Fragment>
            :
            <Cover></Cover>
            }
            </Box>
            </Column>
            <Column>
            <Box onClick={() => clickHandler(5) }>
            {
            box[5] 
            ?
            <Fragment>
                <Holder>
                    { gist.projects.map((key,value) =>
                    value === proj ? <BlackOval onClick={()=> setProj(value)}></BlackOval> : <Oval onClick={()=> setProj(value)}></Oval>
                    )}
                    <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [5]: false})}}></RedX>
                </Holder>
                < Text>
                    { gist.projects[proj].name}
                </Text>
                <Text>
                     <a href={gist.projects[proj].github}>{gist.projects[proj].github}</a> <a href={gist.projects[proj].deployed}>{gist.projects[proj].deployed}</a>
                </Text>
                <Text>
                    {gist.projects[proj].tools}
                </Text>
                <Text>
                { gist.projects[proj].bulletpoints.map((key,value) => 
                   <p>{key.bp}</p>
                ) }
                </Text>
            </Fragment>
            :
            <Cover>
                Projects
            </Cover>
                }
            </Box>
            <Box onClick={() => clickHandler(6) }>
            {
            box[6] 
            ?
            <Fragment>
                <Holder>
                    { gist.experience.map((key,value) =>
                    value === exp ? <BlackOval onClick={()=> setExp(value)}></BlackOval> : <Oval onClick={()=> setExp(value)}></Oval>
                    )}
                    <RedX onClick={(e)=> {e.stopPropagation();  setBox({...box, [6]: false})}}></RedX>
                </Holder>
                <Text>
                { gist.experience[exp].name}
                </Text>
                <Text>
                { gist.experience[exp].postion}
                </Text>
                <Text>
                { gist.experience[exp].start} - { gist.experience[exp].end === 'null' ? 'current' : gist.experience[exp].end} 
                </Text>
                <Text>
                { gist.experience[exp].description}
                </Text>
            </Fragment>
            :
            <Cover>
                Experience
            </Cover>
            }
            </Box>
            </Column>
            </Container>
        </MainPage>
    )
}

export default Body;