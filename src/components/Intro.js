import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/po.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:70vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
        @media only screen and (max-width: 600px) {
   width: 115%;
   bottom: 2rem;
 
}
}
`

const Text = styled.div`
 font-size: calc(0.5em +0.5vw);
color: ${props => props.theme.body};
padding: 5rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;
@media only screen and (max-width: 600px) {
  
  padding: 20px;
  font-size: calc(0.6em + 1.5vw);
}
&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}



`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '26vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Sagar.</h3>
                    <h6>I design and Code simple yet beautiful websites.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1, delay:2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
