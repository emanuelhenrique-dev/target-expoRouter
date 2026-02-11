import { Button } from '@/components/Button';
import { CurrencyInput } from '@/components/CurrencyInput';
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
        />
      </View>

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nova meta"
          placeholder="Ex: Viagem para praia, Apple Watch"
        />
        <CurrencyInput label="Valor alvo" value={1240.43} />
        <Button title="Salvar" />
      </View>
    </View>
  );
}
