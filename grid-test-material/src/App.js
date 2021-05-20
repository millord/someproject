import { StyledBox1, StyledBox2, StyledBox3, StyledContainer } from "./styles";

function App() {
  const isFeatureRunning= true

  if(isFeatureRunning){
    let header = "header text"
  } else {
    header = "this is in the else"
  }

  return (
    <StyledContainer container justify="center">
      <h1>Footer is being tested{header}</h1>
      <StyledBox1 className="box">BOX1</StyledBox1>
      <StyledBox2 className="box">BOX2</StyledBox2>
      <StyledBox3
        alignItems="center"
        container
        direction="column"
        className="box"
      >
        BOX3
      </StyledBox3>
      <h1>Title here</h1>
      <form>
        <input type="text"/>
        <input type="password"/>
        <button>Submit</button>
      </form>
    </StyledContainer>
  );
}

export default App;
