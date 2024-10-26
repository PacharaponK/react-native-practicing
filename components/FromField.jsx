import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";

const FromField = ({
	title,
	value,
	placeholder,
	handleChangeText,
	otherStyle,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const [isFocused, setIsFocused] = useState(false);

	return (
		<View className={`space-y-2 ${otherStyle}`}>
			<Text className="text-base text-gray-100 font-pmedium">{title}</Text>
			<View
				style={{
					flexDirection: "row",
					borderWidth: 2,
					borderColor: isFocused ? "#FF5722" : "#232533",
					width: "100%",
					height: 64,
					paddingHorizontal: 16,
					backgroundColor: "#1E1E2D",
					borderRadius: 16,
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					marginTop: 5,
				}}
			>
				<TextInput
					className="flex-1 text-white font-psemibold text-base"
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7b7b8b"
					onChangeText={handleChangeText}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					secureTextEntry={title === "Password" && !showPassword}
					style={{ flex: 1, paddingRight: 40 }}
				/>
				{title === "Password" && (
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
						style={{
							position: "absolute",
							right: 16,
							top: "50%",
							transform: [{ translateY: -10 }],
						}}
					>
						<Image
							source={!showPassword ? icons.eye : icons.eyeHide}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FromField;
