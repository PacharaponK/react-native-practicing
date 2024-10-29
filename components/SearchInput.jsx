import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";
import "../global.css";

const SearchInput = ({
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
		<View
			className="space-x-4"
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
				className="flex-1 text-white font-pregular text-base"
				value={value}
				placeholder="Search for a video topic"
				placeholderTextColor="#7b7b8b"
				onChangeText={handleChangeText}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				secureTextEntry={title === "Password" && !showPassword}
				style={{ flex: 1, paddingRight: 40 }}
			/>
			<TouchableOpacity>
				<Image
					source={icons.search}
					style={{
						width: 20,
						height: 20,
					}}
					resizeMode="contain"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
