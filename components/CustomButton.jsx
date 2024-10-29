import { TouchableOpacity, Text, View } from "react-native";
import React from "react";

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`${containerStyles} ${isLoading ? "opacity-50" : ""}`}
			disabled={isLoading}
			style={{
				backgroundColor: "#FF9C01",
				borderRadius: 10,
				minHeight: 62,
				justifyContent: "center",
				alignItems: "center",
				paddingHorizontal: 10,
				marginTop: 20,
			}}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
