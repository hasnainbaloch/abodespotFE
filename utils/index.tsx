import {Text} from 'react-native';

export const CurrencyFormatter = ({
  value,
  currency,
}: {
  value: number;
  currency: string;
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return <Text>{formatter.format(value)}</Text>;
};
