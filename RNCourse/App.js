import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


// Default Function
export default function App() {

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput styles={styles.customInput} placeholder='Your course goal!!' />
				<Button title="Add Goal" />
			</View>
		</View>
	);
}


// Our stylesheet object
const styles = StyleSheet.create({
	appContainer: {
		padding: 50
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: { // for flex box
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	customInput: {
		borderWidth: 2,
		borderColor: '#cccccc',
		width: '80%',
		marginRight: 8,
		padding: 8
	}
});
