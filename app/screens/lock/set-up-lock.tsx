import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

type SetUpLockProps = {};
export const SetUpLock: React.FunctionComponent<SetUpLockProps> = () => {
  const [pin, setPin] = useState<string>('');
  const onPress = (key: number) => {
    setPin(pin + key.toString());
  };
  return (
    <View style={styles.container}>
      {/* Input pin code */}
      <View>
        <Text>{pin}</Text>
      </View>
      {/* Keyboard Custom */}
      <View style={styles.keyboards}>
        {Array.from({length: 10}).map((_, index) => (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => onPress(index)}>
            <Text>{index}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  keyboards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
