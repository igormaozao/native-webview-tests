import React from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	Button
} from "react-native";

export default class Main extends React.Component {
	constructor() {
		super();

		this.state = {
			webViewUrl: "192.168.1.100",
			webViewPort: "3000"
		};
	}

	onUrlChange = e => {
		const url = e.text;
		this.setState({ webViewUrl: url });
	};

	onPortChange = e => {
		const port = e.text;
		this.setState({ webViewPort: port });
	};

	onButtonPress = e => {
		const { webViewUrl, webViewPort } = this.state;
		const url = `http://${webViewUrl}:${webViewPort}`;

		this.props.navigation.navigate('MockWebView', { url: url });
	};

	render() {
		const {
			webViewUrl,
			webViewPort
		} = this.state;

		return ( 
			<View style = { styles.container } >
				<Text>IP/URL:</Text>
				<TextInput style = { styles.textInput } value = { webViewUrl } onChangeText = { (text) => this.onUrlChange({ text }) } />

				<Text>PORT:</Text>
				<TextInput style = { styles.textInput } value = { webViewPort } onChange = { (text) => this.onPortChange({ text }) } />

				<Button title="Acessar" onPress={ this.onButtonPress } />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	textInput: {
		width: "70%",
		marginBottom: 30,
		height: 40,
		borderColor: 'grey',
		borderWidth: 1,
		textAlign: "center"
	}
});