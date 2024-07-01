import styled,{keyframes} from 'styled-components'
const primaryColor="#284ea7";
const fadeAnimation=keyframes`
  0%{
opacity: 0;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`

const ContentCss =styled.div`
.tint{
color: aliceblue;
background-color: rgba(0, 0, 0, 0.4);
height: 100%;
  width: 100%;
}
.container{
  text-align: center;
  padding: 20px;
 
}
  `
    export { ContentCss };