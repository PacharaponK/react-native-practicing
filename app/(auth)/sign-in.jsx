import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

import { images } from "../../constants";
import FromField from "../../components/FromField";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = () => {};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-center min-h-[85vh] px-4 my-6">
					<Image
						source={images.logo}
						style={{ width: 115, height: 35 }}
						resizeMode="contain"
					/>
					<Text
						className="text-white text-semibold font-psemibold"
						style={{ marginTop: 40, fontSize: 24 }}
					>
						Log in to Aora!
					</Text>
					<FromField
						title="Email"
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyle="mt-7"
						keyboardType="email-address"
					/>
					<FromField
						title="Password"
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyle="mt-7"
					/>
					<CustomButton
						title="Sign In"
						handlePress={submit}
						containerStyles="mt-7"
						isLoading={isSubmitting}
					/>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							paddingTop: 20,
							gap: 8,
						}}
					>
						<Text
							className="text-lg text-gray-100 font-pregular"
							style={{
								fontSize: 13,
							}}
						>
							Don't have account?
						</Text>
						<Link
							href="/sign-up"
							className="text-lg font-psemibold text-secondary"
							style={{
								fontSize: 13,
								color: "#FF5722",
							}}
						>
							Sign Up
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
