import { useSQLiteContext } from 'expo-sqlite';

export type TargetCreate = {
  name: string;
  amount: number;
};

export function useTargetDataBase() {
  const database = useSQLiteContext();

  async function create(data: TargetCreate) {
    const statement = await database.prepareAsync(
      'INSERT INTO targets (name, amount) values ($name, $amount)'
    );

    statement.executeAsync({
      $name: data.name,
      $amount: data.amount
    });
  }

  return { create };
}
