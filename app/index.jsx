import "../global.css";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<View style={styles.container}>
			<Text className="text-3xl font-pbold">App!!!</Text>
			<StatusBar style="auto" />
			<Link href={"/profile"} style={{ color: "blue" }}>
				Go to Profile
			</Link>
		</View>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
