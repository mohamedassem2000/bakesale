import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



class DealList extends React.Component {

render(){
return(
    <View style={styles.list}>
        <Text>
            Deals List ..
        </Text>
    </View>
);
}

}

const styles = StyleSheet.create({

    list: {
        backgroundColor: '#eee',
        flex: 1,
        width: '100%',
        paddingTop: 50,

    },
})

export default DealList;