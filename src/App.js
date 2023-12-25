import React from 'react';
import { Route,Switch } from 'react-router-dom';
import About from './About';
import AcousticGuitar from './Acoustic';
import Menu from './Menu';
import SemiAcoustic from './SemiAcoustic';
import Electric from './Electric';

function App() {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route  exact path='/' component={About} />
        <Route  exact path='/acoustic_guitar' component={AcousticGuitar}  />
        <Route  exact path='/semi_acoustic' component={SemiAcoustic}/>
        <Route  path='/electric_guitar' component={Electric} />

      </Switch>
        {/* <About />
        <Contact /> */}
    </>
  );
}

export default App;
