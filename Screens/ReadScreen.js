import React from 'react';
import { View, Text } from 'react-native';

import AppHeader from '../Component/AppHeader';

export default class ReadScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader/>
                <Text>This Is The Read Screen Which Does Not Have Any Contant Right Now</Text>
            </View>
        )
    }
}