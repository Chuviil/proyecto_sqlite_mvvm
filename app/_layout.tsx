import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {Slot} from 'expo-router';
import {useColorScheme} from 'react-native';
import {PaperProvider} from "react-native-paper";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(app)',
};

export default function RootLayout() {
    return <RootLayoutNav/>;
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <PaperProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Slot/>
            </ThemeProvider>
        </PaperProvider>
    );
}
