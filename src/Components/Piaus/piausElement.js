import styled from 'styled-components'
import BgImage from '../../image/ppp.webp'

export const PiausContainer = styled.div`
 background: linear-gradient( to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)), url(${BgImage});
 height: 100vh;
 background-position:center;
 background-size:cover;

`;

export const PiausContent = styled.div`
  height:calc(100vh -80px);
  max-height:100%;
  width:100vw;
  padding : 0rem calc((100vw - 1300px) /2);
`
export const PiausItems = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  height:100vh;
  max-height:100%;
  padding: 0 3rem;
  width: 655px;
  color: #fff;
  text-transform:uppercase;
  font-weight:bold;
  @media screen and (max-width: 650px){
      width:100%;
  }

`;
export const PiausH1 = styled.h1`
 font-size: clamp(2.5rem, 11vw, 4rem);
 margin-bottom:1rem;
 box-shadow: 3px 6px red;
 letter-spacing:2.5px;
`;
export const PiausP = styled.p`
 font-size: clamp(2rem, 2.5vw, 2rem);
 margin-bottom:2rem;
`

export const PiausBtn = styled.button`
 font-size: 1.5rem;
 padding: 1rem 4rem;
 border:none;
 background:orange;
 color:#fff;
 transition: 0.2s ease-out;

 &:hover{
     background:black;
     transition: 0.2s ease-out;
     cursor: pointer;
     color:#fff;
 }
`;