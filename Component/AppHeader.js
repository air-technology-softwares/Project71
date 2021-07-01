import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';



class AppHeader extends React.Component  {
  render(){
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Air Technology</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({

container: {
  
backgroundColor: 'blue',

},

text: {

   color: 'white',
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

},

});

export default AppHeader;