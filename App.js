import React from 'react';
import App from './src/App';
import { StyleSheet, Text, View } from 'react-native';
//import Expo from 'expo';
import { StackNavigator, } from 'react-navigation';

class ChatHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'ChatHome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Chat Home screen"
        onPress={() => navigate('src/components/Home', { name: 'ChatHome' })
        }
      />
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>KinFolk Chatbot</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
