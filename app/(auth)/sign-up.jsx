import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

import { images } from "../../constants";
import FromField from "../../components/FromField";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const submit = async () => {
		if (!form.username || !form.password || !form.email) {
			Alert.alert("Error", "Please fill in all the fields");
		}

		setIsSubmitting(true);

		try {
			const result = await createUser(form.email, form.password, form.username);
			router.replace("/home");
		} catch (error) {
			Alert.alert("Error", error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

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
						Sign up to Aora
					</Text>
					<FromField
						title="Username"
						value={form.username}
						handleChangeText={(e) => setForm({ ...form, username: e })}
						otherStyle="mt-7"
					/>
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
						title="Sign Up"
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
							Have an account already?
						</Text>
						<Link
							href="/sign-in"
							className="text-lg font-psemibold text-secondary"
							style={{
								fontSize: 13,
								color: "#FF5722",
							}}
						>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
