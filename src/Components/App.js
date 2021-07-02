import React from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import KegControl from './KegControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;