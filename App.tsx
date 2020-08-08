import { StatusBar } from 'expo-status-bar';
import React, { ContextType } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const {isLoadingComplete, user, setUser} = useCachedResources();
  const colorScheme = useColorScheme();
  
  console.log("User: ", user)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} authUser={user} setUser={setUser} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

