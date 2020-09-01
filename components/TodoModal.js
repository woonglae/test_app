import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {AntDesign} from '@expo/vector-icons';
import colors from '../Colors';
import tempData from "../tempData";

export default class TodoModal extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>List Modal!!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
    // title: {
    //     fontSize:28,
    //     fontWeight:"800",
    //     color: colors.black,
    //     alignSelf: "center",
    //     marginBottom: 16
    // },
    // input : {
    //     borderWidth: StyleSheet.hairlineWidth,
    //     borderColor:colors.blue,
    //     borderRadius:6,
    //     height:50,
    //     marginTop:8,
    //     paddingHorizontal:16,
    //     fontSize:18
    // },
    // create: {
    //     marginTop:24,
    //     height:50,
    //     borderRadius:6,
    //     alignItems:"center",
    //     justifyContent:"center"
    // },
    // colorSelect: {
    //     width:30,
    //     height:30,
    //     borderRadius:4   
    // }
})