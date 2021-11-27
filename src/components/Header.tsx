import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

interface IHeaderProps {
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.fatText}>{title}</Text>
    </View>
  );
};
