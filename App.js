import {
	createStackNavigator,
	createAppContainer
} from 'react-navigation';

import Main from './pages/Main';
import MockWebView from './pages/WebView';

const MainNavigator = createStackNavigator({
	Main: {
		screen: Main
	},
	MockWebView: {
		screen: MockWebView,
		navigationOptions: {
			header: null,
		}
	},
}, {
	initialRouteName: "Main"
});

const App = createAppContainer(MainNavigator);

export default App;