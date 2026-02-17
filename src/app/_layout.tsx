import { colors } from '@/theme/colors';
import { Stack } from 'expo-router';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { Loading } from '@/components/Loading';

import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
import { SQLiteProvider } from 'expo-sqlite';
import { migrate } from '@/database/migrate';
import { Suspense } from 'react';

const db = SQLite.openDatabaseSync('target.db');

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });

  useDrizzleStudio(db);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider databaseName="target.db" onInit={migrate} useSuspense>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.white }
          }}
        />
      </SQLiteProvider>
    </Suspense>
  );
}
