import { PageHeader } from '@/components/PageHeader';
import { router } from 'expo-router';
import { Button, StatusBar, Text, View } from 'react-native';

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 32 }}>
      <StatusBar barStyle="dark-content" />
      <View>
        <PageHeader
          title="Meta"
          subtitle="Economize para alcançar sua meta financeira."
          rightButton={{
            icon: 'edit',
            onPress: () => {}
          }}
        />
      </View>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
