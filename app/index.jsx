import "../global.css";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<View style={styles.container}>
			<Text className="text-3xl font-pblack">Aura!!!</Text>
			<StatusBar style="auto" />
			<Link href={"/home"} style={{ color: "blue" }}>
				Go to Home
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
