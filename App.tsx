import { NativeWindStyleSheet } from 'nativewind';
import { SafeAreaView, Text, View } from 'react-native';
import { useDinamicTitle } from './hooks/useDinamicTitle';

/* COMPONENTS */
import { Header } from './components/core/header';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App(): React.ReactElement {
  useDinamicTitle("Início");

  return (
    <SafeAreaView className="w-screen">
      <Header />
    </SafeAreaView>
  );
}
