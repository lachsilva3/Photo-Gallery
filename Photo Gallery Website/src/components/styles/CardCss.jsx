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

const CardCss =styled.div`
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  width: 370px;
margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,100);
  transition: 0.3s;
  background-color: transparent;
  
}

.card img {
  width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius:5px ;
  border-bottom-right-radius:5px ;
}

.card-body {
  padding: 10px;
  color: white;
  border-radius: 10px;
}

.card-title {
  font-size: 1.25em;
}
  `
    export { CardCss };