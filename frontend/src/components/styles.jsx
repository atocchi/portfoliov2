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
    const GreyBox = styled.div`
    `
    const Holder = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    position: sticky;
    height: 20px;
    top: 5%;
    `
    const CoverText = styled.p`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
    const Oval = styled.button`
    margin-right: 2px;
    border-radius: 50%;
    height: 20px;
    width: 7px;
    box-shadow: inset 1px 0px 5px 0px #888888, 
    inset -1px 1px 0px 0px #888888;
    z-index: -1;
    `
    const RedX = styled.button`
    margin-right: 2px;
    border-radius: 50%;
    font-size: 8px;
    height: 20px;
    width: 7px;
    box-shadow: inset 1px 0px 5px 0px #888888, 
    inset -1px 1px 9px 0px #ff0d0dfc;
    position: absolute;
    right: 5%;
    `
    const BlackOval = styled.button`
    margin-right: 2px;
    border-radius: 50%;
    height: 20px;
    width: 7px;
    box-shadow: inset 1px 0px 5px 0px #888888, 
    inset -1px 1px 13px 0px #888888;
    `
    const Cover = styled.div`
    width: 100%;
    height: 50%;
    background-color: #787878;
    text-align: center;
    align-items: center;
    padding-top: 150px;
    color: white;
    @media (max-width: 600px) {
 
    }
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
export {MainPage, Bar, Name, Box, Text, Container, Column, Cover, CoverText, Oval, Holder, BlackOval, RedX, GreyBox}