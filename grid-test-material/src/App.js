import { StyledBox1, StyledBox2, StyledBox3, StyledContainer } from "./styles";

function App() {
  return (
    <StyledContainer container justify="center">
      <h1>Footer is being tested</h1>
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
      <form>
        <input type="text"/>
        <input type="password"/>
        <button>Submit</button>
      </form>
    </StyledContainer>
  );
}

export default App;
