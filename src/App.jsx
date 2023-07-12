import TheOffice from './components/TheOffice';
import styled from "styled-components";

const Container = styled.div`
background-image: url('https://images6.alphacoders.com/542/542776.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
height: 100vh;`;

function App() {
    return (
      <Container>
        <TheOffice />
      </Container>
    )
}

export default App
