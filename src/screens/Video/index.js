import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Video extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Video</Text>
            </View>
        );
    }
}
export default Video;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});