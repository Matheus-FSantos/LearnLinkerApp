import { NativeWindStyleSheet } from 'nativewind';
import { SafeAreaView, Text, View } from 'react-native';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <SafeAreaView className='bg-slate-950 w-screen flex-1 items-center justify-center'>
      <Text className='text-slate-100 text-2xl font-bold'>Hello, World!!!</Text>
      <Text className='text-slate-500 font-semibold'>Expo + TailwindCSS</Text>
    </SafeAreaView>
  );
}
