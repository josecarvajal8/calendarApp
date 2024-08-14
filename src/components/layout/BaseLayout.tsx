import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../../config/colors';

export const BaseLayout: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
});
