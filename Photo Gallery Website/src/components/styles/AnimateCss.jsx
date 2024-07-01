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

const AnimateCss =styled.div`
@keyframes appear{
  from{
    opacity: 0;
    scale: 0.5;
  }
  to{
    opacity: 1;
    scale: 1;
  }
}

.animation{
    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0;
}

  `
    export { AnimateCss };