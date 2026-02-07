import { fontFamily } from '@/theme/fontFamily';
import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
      }}
    >
      <Text style={{ fontFamily: fontFamily.bold }}>Olá, Expo Router</Text>
      <Button title="Nova meta" onPress={() => router.navigate('/target')} />
      <Button
        title="Transação"
        onPress={() => router.navigate('/transaction/456921')}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate('/in-progress/123')}
      />
    </View>
  );
}
