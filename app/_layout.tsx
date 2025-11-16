import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/components/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // IBM Plex Sans - for headers
    'IBMPlexSans-Thin': require('../assets/fonts/IBMPlexSans-Thin.otf'),
    'IBMPlexSans-ThinItalic': require('../assets/fonts/IBMPlexSans-ThinItalic.otf'),
    'IBMPlexSans-ExtraLight': require('../assets/fonts/IBMPlexSans-ExtraLight.otf'),
    'IBMPlexSans-ExtraLightItalic': require('../assets/fonts/IBMPlexSans-ExtraLightItalic.otf'),
    'IBMPlexSans-Light': require('../assets/fonts/IBMPlexSans-Light.otf'),
    'IBMPlexSans-LightItalic': require('../assets/fonts/IBMPlexSans-LightItalic.otf'),
    'IBMPlexSans-Regular': require('../assets/fonts/IBMPlexSans-Regular.otf'),
    'IBMPlexSans-Italic': require('../assets/fonts/IBMPlexSans-Italic.otf'),
    'IBMPlexSans-Text': require('../assets/fonts/IBMPlexSans-Text.otf'),
    'IBMPlexSans-TextItalic': require('../assets/fonts/IBMPlexSans-TextItalic.otf'),
    'IBMPlexSans-Medium': require('../assets/fonts/IBMPlexSans-Medium.otf'),
    'IBMPlexSans-MediumItalic': require('../assets/fonts/IBMPlexSans-MediumItalic.otf'),
    'IBMPlexSans-SemiBold': require('../assets/fonts/IBMPlexSans-SemiBold.otf'),
    'IBMPlexSans-SemiBoldItalic': require('../assets/fonts/IBMPlexSans-SemiBoldItalic.otf'),
    'IBMPlexSans-Bold': require('../assets/fonts/IBMPlexSans-Bold.otf'),
    'IBMPlexSans-BoldItalic': require('../assets/fonts/IBMPlexSans-BoldItalic.otf'),
    // Inter - for body text
    'Inter-Thin': require('../assets/fonts/Inter-Thin.otf'),
    'Inter-ThinItalic': require('../assets/fonts/Inter-ThinItalic.otf'),
    'Inter-ExtraLight': require('../assets/fonts/Inter-ExtraLight.otf'),
    'Inter-ExtraLightItalic': require('../assets/fonts/Inter-ExtraLightItalic.otf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.otf'),
    'Inter-LightItalic': require('../assets/fonts/Inter-LightItalic.otf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.otf'),
    'Inter-Italic': require('../assets/fonts/Inter-Italic.otf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.otf'),
    'Inter-MediumItalic': require('../assets/fonts/Inter-MediumItalic.otf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.otf'),
    'Inter-SemiBoldItalic': require('../assets/fonts/Inter-SemiBoldItalic.otf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.otf'),
    'Inter-BoldItalic': require('../assets/fonts/Inter-BoldItalic.otf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.otf'),
    'Inter-ExtraBoldItalic': require('../assets/fonts/Inter-ExtraBoldItalic.otf'),
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
    'Inter-BlackItalic': require('../assets/fonts/Inter-BlackItalic.otf'),
    'Inter-V': require('../assets/fonts/Inter-V.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}
