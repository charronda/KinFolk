import React from 'react';
//add styles
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//hanlde router
import { Actions } from 'react-native-router-flux';

//set stat
export default class Home extends React.Component {
  state = {
    name: '',
  };
  render() {
    return (
      <View style={styles.container}>

        <Text style={[styles.label, {marginTop: 40}]}>
          Enter your name :
        </Text>
        //form fields
        <TextInput
          placeholder='enter name'
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({
              name: text,
            });
          }}
          value={this.state.name}
        />

        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name: this.state.name,
            });
          }}
        >
          <Text style={styles.label}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 20,
    marginLeft: 15,
  },
  textInput: {
    height: 40,
    marginLeft: 15,
  },
});

export default Home;
