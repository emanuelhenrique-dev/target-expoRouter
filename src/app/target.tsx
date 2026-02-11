import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { PageHeader } from '@/components/PageHeader';
import { StatusBar, View } from 'react-native';

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

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nova meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
