import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';

//manage routs
}
import { Router, Scene } from 'react-native-router-flux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: 64 : 54}}>
          <Scene key='home' title='Home' component={Home}/>
          <Scene key='chat' title='Chat' component={Chat}/>
        </Scene>
      </Router>
    );
  }
}

export default App;
