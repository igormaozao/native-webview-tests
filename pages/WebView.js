import React from "react";
import { WebView, Platform } from 'react-native';

export default class MockWebView extends React.Component {
	constructor() {
		super();

		this.marginTop = Platform.OS === 'ios' ? 20 : 0;
	}

	render() {
		const { navigation } = this.props;
		const url = navigation.getParam('url');

		return (
			<WebView source={{uri: url}} style={{ marginTop: this.marginTop }} />
		);
	}
}