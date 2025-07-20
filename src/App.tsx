import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './styles/global.css';
import {
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/host-grotesk';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <View className='flex-1 items-center justify-center bg-lime-500'>
      <Text className='text-base font-sans-semibold'>Buongiorno!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


