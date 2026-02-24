# 🎯 Target - Finance App

<p align="center">
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/emanuelhenrique-dev/target-expoRouter" />
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/emanuelhenrique-dev/target-expoRouter" />
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/emanuelhenrique-dev/target-expoRouter" />

  <img alt="GitHub commit activity (branch)" src="https://img.shields.io/github/commit-activity/t/emanuelhenrique-dev/target-expoRouter">

  <a href="https://github.com/emanuelhenrique-dev/target-expoRouter/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/emanuelhenrique-dev/target-expoRouter" />
  </a>

  <a href="https://github.com/emanuelhenrique-dev/target-expoRouter/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/emanuelhenrique-dev/target-expoRouter" />
  </a>
</p>

Aplicação mobile para controle de metas financeiras, permitindo o registro de entradas, saídas e cálculo automático de saldo com persistência de dados local.

## 🚀 Tecnologias

- React Native
- Expo (v54 / Expo Router)
- TypeScript
- **SQLite** (expo-sqlite) para banco de dados local
- EAS Build (Android APK)
- Tamagui / Styled-components (ajuste conforme o que usou para estilo)
- Zod (validação de dados)

## 📦 Funcionalidades

- **Persistência Offline:** Uso de banco de dados SQLite para manter os dados salvos no dispositivo.
- **Navegação Nativa:** Implementação de rotas usando Expo Router (File-based routing).
- **Gestão de Metas:** Cadastro de objetivos financeiros com monitoramento de transações.
- **Cálculo em Tempo Real:** Soma de entradas e saídas processada diretamente via queries SQL.

## 📝 Coisas aprendidas

Durante o desenvolvimento deste projeto mobile, as principais experiências foram:

- **Integração com Banco de Dados Nativo:** Configuração e manipulação de tabelas SQL dentro do ambiente mobile.
- **Ciclo de Build Mobile:** Uso do EAS CLI para compilar o projeto na nuvem e gerar um APK instalável.
- **Estrutura de Navegação:** Migração do conceito de navegação tradicional para o sistema de rotas baseado em arquivos do Expo Router.
- **Gestão de Dependências:** Resolução de conflitos de peer dependencies (React 19) em ambientes de build rigorosos.

## 📝 Persistência de Dados (SQLite)

Diferente de aplicações web que usam APIs, este projeto foca no uso do armazenamento local. O uso do `expo-sqlite` permitiu entender como realizar operações de CRUD diretamente no sistema de arquivos do aparelho:

```ts
// Exemplo de execução de Query SQL no projeto
const result = await db.execAsync(`
  INSERT INTO goals (name, target_value) 
  VALUES ('Viagem de Férias', 5000.00)
`);

// Busca de dados com soma processada no banco
const transactions = await db.getAllAsync(
  'SELECT SUM(amount) as total FROM transactions WHERE goal_id = ?',
  [goalId]
);
```
