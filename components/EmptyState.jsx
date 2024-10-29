import "../global.css";
import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
	return (
		<View className="justify-center items-center px-4">
			<Image
				source={images.empty}
				style={{ width: 270, height: 215 }}
				resizeMode="contain"
			/>
			<Text className="text-xl text-center font-psemibold text-white mt-2">
				{title}
			</Text>
			<Text className="font-pmedium text-sm text-gray-100 mb-5">
				{subtitle}
			</Text>
			<CustomButton
				title="Create video"
				handlePress={() => router.push("/create")}
				containerStyles="w-full my-5"
			/>
		</View>
	);
};

export default EmptyState;