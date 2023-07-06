import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react'



// Main Function
export default function App() {

	// for keeping the state of the content
	const [enteredGoalText, setEnteredGoalText] = useState('');

	// the input handler
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText)

		// console.log(enteredText); // for debugging 
	};

	// add button hander
	function addGoalHandler() {
		console.log(enteredGoalText)
	};

	return (
		<View style={styles.appContainer}>
			
			<View style={styles.inputContainer}>
				<TextInput 
					styles={styles.customInput}
					placeholder='Your course goal!!'
					onChangeText={goalInputHandler} />
				
				<Button title="Add Goal" onPress={addGoalHandler} />
			
			</View>

			<View style={styles.goalsContainer}>
				<Text>List of goals ...</Text>
			</View>
		</View>
	);
}


// Our stylesheet object
const styles = StyleSheet.create({
	// the main container
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
	},

	// dummy container
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	// the input container
	inputContainer: { 
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#cccccc'
	},

	// for text input container
	customInput: {
		borderWidth: 2,
		borderColor: '#cccccc',
		width: '80%',
		marginRight: 8,
		padding: 8
	},

	// goals container
	goalsContainer: {
		flex: 5
	}
});
