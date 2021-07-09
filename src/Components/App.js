import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import KegControl from './KegControl';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <KegControl />
      </Container>
    </React.Fragment>
  );
}

export default App;

s