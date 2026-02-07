import { ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { colors } from '@/theme/colors';

export function Loading() {
  return (
    <ActivityIndicator
      color={colors.blue[500]}
      size={32}
      style={styles.container}
    />
  );
}
