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

const ModalCss =styled.div`
.mod-button{
    background-color: transparent;
    color: white;
    border-color: transparent;
    font-weight: bolder;
}
.modal-dialog{
    text-align: center;
}
.modal-content{
    background-color: black;
    border: 2px solid white;
    
}
.modal{
  margin-top: 10%;
}




  `
    export { ModalCss };