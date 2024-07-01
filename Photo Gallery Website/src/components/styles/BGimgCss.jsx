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

const BGimgCss =styled.div`
.fixed-bg {
  background-image: url('/images/bgimg.jpg'); /* Adjust the path accordingly */
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: auto; /* Ensures the content inside the div can scroll */
}

.content {
  position: relative;
  z-index: 1;
  color: white;
}

/* Additional styles to make content readable */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 0;
}

  `
    export { BGimgCss };