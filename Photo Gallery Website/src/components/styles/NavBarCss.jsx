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

const NavBarCss =styled.div`
.container-fluid{
    background-color: black;
}
.navbar{
    padding: 0px;
}
  `
    export { NavBarCss };