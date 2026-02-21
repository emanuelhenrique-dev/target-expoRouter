import { Button } from '@/components/Button';
import { CurrencyInput } from '@/components/CurrencyInput';
import { Input } from '@/components/Input';
import { PageHeader } from '@/components/PageHeader';
import { useTargetDataBase } from '@/database/useTargetDatabase';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';

export default function Target() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const param = useLocalSearchParams<{ id?: string }>();
  const targetDatabase = useTargetDataBase();

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert(
        'Atenção',
        'Preencha o nome e o valor precisa ser maior que zero'
      );
    }

    setIsProcessing(true);

    if (param.id) {
      update();
    } else {
      create();
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount });
      Alert.alert('Nova meta', 'Meta criada com sucesso', [
        { text: 'Ok', onPress: router.back }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Não foi possível criar a meta');
      console.log(error);
      setIsProcessing(false);
    }
  }

  async function update() {
    try {
      await targetDatabase.update({ id: Number(param.id), name, amount });
      Alert.alert('Sucesso', 'Meta atualizada com sucesso', [
        { text: 'Ok', onPress: router.back }
      ]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a meta.');
      console.log(error);
      setIsProcessing(false);
    }
  }

  async function fetchDetails(id: number) {
    try {
      const response = await targetDatabase.show(id);
      setName(response.name);
      setAmount(response.amount);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os detalhes da meta');
      console.log(error);
    }
  }

  useEffect(() => {
    if (param.id) {
      fetchDetails(Number(param.id));
    }
  }, [param.id]);

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
          value={name}
          onChangeText={setName}
        />
        <CurrencyInput
          label="Valor alvo"
          value={amount}
          onChangeValue={setAmount}
        />
        <Button
          title="Salvar"
          onPress={handleSave}
          isProcessing={isProcessing}
        />
      </View>
    </View>
  );
}
