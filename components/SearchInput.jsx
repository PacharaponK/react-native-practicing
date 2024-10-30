import { View, Text, TextInput, Image, Alert } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { icons } from "../constants";
import "../global.css";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
	const pathname = usePathname();
	const [query, setQuery] = useState(initialQuery || "");
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
				value={query}
				placeholder="Search for a video topic"
				placeholderTextColor="#CDCDE0"
				onChangeText={(e) => setQuery(e)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				style={{ flex: 1, paddingRight: 40 }}
			/>
			<TouchableOpacity
				onPress={() => {
					if (!query) {
						return Alert.alert(
							"Missing query",
							"Please input somthing to search"
						);
					}
					if (pathname.startsWith("/search")) {
						router.setParams({ query });
					} else router.push(`/search/${query}`);
				}}
			>
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
