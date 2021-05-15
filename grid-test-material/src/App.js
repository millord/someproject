import styled from "styled-components"
import Grid from '@material-ui/core/Grid';

const StyledContainer = styled(Grid)`
`

const StyledBox1 = styled(Grid)`
  width:200px;
  height:200px;
  border: 2px solid black;
  background-color:blue;
  color:black;
`
const StyledBox2 = styled(Grid)`
width:200px;
height:200px;
border: 2px solid black;
background-color:red;
color:black;
`
const StyledBox3 = styled(Grid)`
width:200px;
height:200px;
border: 2px solid black;
background-color:teal;
color:black;
`



function App() {
  return (
    <StyledContainer container justify="center">
      <StyledBox1 className="box">BOX1</StyledBox1>
      <StyledBox2 className="box">BOX2</StyledBox2>
      <StyledBox3 alignItems="center" container direction="column" className="box">BOX3</StyledBox3>
      </StyledContainer>
  );
}

export default App;
