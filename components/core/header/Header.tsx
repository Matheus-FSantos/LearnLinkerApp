import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

	const handleMenuClick = () => {
		setMenuIsOpen(!menuIsOpen);
	}

  return (
    <View className="flex flex-row items-center justify-between gap-1 border border-red-500 w-full">
			<Pressable
				className="flex gap-1"
				onPress={ handleMenuClick }
			>
				<View className={ menuIsOpen ? "w-7 h-1 bg-blue-800" : "w-7 h-1 bg-blue-800" }/>
				<View className={ menuIsOpen ? "hidden" : "w-7 h-1 bg-blue-800" }/>
				<View className={ menuIsOpen ? "w-7 h-1 bg-blue-800" : "w-5 h-1 bg-blue-800" }/>
			</Pressable>
      <Text className="text-blue-300 text-base font-bold">LearnLinker</Text>
			<Pressable
				className="w-10 h-10 bg-blue-800 rounded-full"
			/>
    </View>
  );
}

export { Header };
