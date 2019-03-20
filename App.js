import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state = {
        bal: 1.00,
        newBal: 0,
        inputValue: 'Input Text Here',
        newText: '',
    }
    
    usdToEuro = () => {
        this.setState({
            newBal: this.state.inputValue * .85,
        })
}

usdToPound = () => {
        this.setState({
            newBal: this.state.inputValue * .75,
        })
}

usdToRupee = () => {
        this.setState({
            newBal: this.state.inputValue * 67.60,
        })
}

usdToAussie = () => {
        this.setState({
            newBal: this.state.inputValue * 1.32,
        })
}

usdToCad = () => {
        this.setState({
            newBal: this.state.inputValue * 1.30,
        })
}

usdToFranc = () => {
        this.setState({
            newBal: this.state.inputValue * .99,
        })
}

usdToYuan = () => {
        this.setState({
            newBal: this.state.inputValue * 6.40,
        })
}

usdToYen = () => {
        this.setState({
            newBal: this.state.inputValue * 110.67,
        })
}

_handleTextChange = inputValue => {
        this.setState({ inputValue });
    }
    changeText = ()=>{
        this.setState({
            newText:this.state.inputValue,
        })
    }
    
    

    render() {
        return (
        
            <View style={styles.container}>
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor: 'grey', borderWidth: 1,}}
                />
                    <Text style={styles.paragraph}>
                   Type how many USD you would like to convert.
                    </Text>
                <TouchableHighlight
                    onPress = {this.changeText}
                >
                    <Text style={styles.paragraph}> 
                    Touch here to change the following line
                    </Text>
                </TouchableHighlight>
                <Text style={styles.paragraph}>
                    {this.state.newText}
                </Text>
                
            
       
    

                <Text style={styles.title}>
                   Kegan's Currency Converter App
                </Text>
                
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                    
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToPound}
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                    
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToAussie}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                 <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToCad}
                >
                    <Text style={styles.buttonText}>
                        USD to Cad
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToFranc}
                >
                    <Text style={styles.buttonText}>
                        USD to Franc
                    </Text>
                </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                 <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToYuan}
                >
                    <Text style={styles.buttonText}>
                        USD to Yuan
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.usdToYen}
                >
                    <Text style={styles.buttonText}>
                        USD to Yen
                    </Text>
                </TouchableHighlight>
                </View>
                
                
                
                <Text style={styles.paragraph}>
                    Converted currency value: {this.state.newBal.toFixed(2)}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8BB0D3',
        
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#38CAD6',
        height: 40,
        width: 100,
        borderColor: '#7B5DF9',
        borderWidth: 1,
        marginHorizontal: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    paragraph: {
      marginBottom: 10,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
      marginBottom: 10,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#068723',
    },
    
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    
    
});