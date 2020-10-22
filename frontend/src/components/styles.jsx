import styled from 'styled-components';

    const MainPage = styled.div`
    width:100%;
    height: 100%;
    background-color: #ffffff;
    font-family: 'Russo One', sans-serif;
    color: #808080;
    `
    const Text = styled.p`
    margin: 15px;
    `
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    @media (max-width: 600px) {
        flex-direction: column;
    }
    `
    const Column = styled.div`
    width: 33%;
    @media (max-width: 600px) {
        width: 100%;
    }
    `
    const Bar = styled.div`
    width:95%;
    margin-top: 1.5%;
    margin-left: 2.5%;
    maring-right: 2.5%;
    height: 50px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    border-radius: 20px;
    
    box-shadow: inset 1px 1px 9px 1px #888888,
    inset 1px 1px 9px 1px #888888;
    `
    const Name = styled.span`
    font-size: 22px;
    margin-left: 15px;
    margin-top: 10px;
    `
    const Box = styled.div`
    margin: 2.5%;
    height: 300px;
    width: 300px;
    padding-top: 5px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: inset 1px 1px 9px 1px #888888,
    inset 1px 1px 9px 1px #888888;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 600px) {
        width: 95%;
        margin-left: 0%;
    }
    `
export {MainPage, Bar, Name, Box, Text, Container, Column}