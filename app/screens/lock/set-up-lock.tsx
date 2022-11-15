import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
type SetUpLockProps = {};
export const SetUpLock: React.FunctionComponent<SetUpLockProps> = () => {
  const [pin, setPin] = useState<string>('');
  const onPress = (key: number) => {
    setPin((pin + key.toString()).slice(0, 6));
  };
  const handleDelete = () => {
    if (pin?.length > 0) {
      setPin(pin.slice(0, pin.length - 1));
    }
  };
  return (
    <LinearGradient colors={['#DEC4FC', '#91C6FC']} style={styles.container}>
      {/* Input pin code */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {Array.from({length: 6}).map((_, index) => {
            if (index < pin?.length) {
              return (
                <Icon
                  key={index}
                  name="circle"
                  size={15}
                  style={{marginHorizontal: 10}}
                />
              );
            } else {
              return (
                <Icon
                  key={index}
                  name="circle-thin"
                  size={15}
                  style={{marginHorizontal: 10}}
                />
              );
            }
          })}
        </View>
      </View>
      {/* Keyboard Custom */}
      <View style={styles.keyboards}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => onPress(item)}>
            <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '600'}}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.textDelete}>
        <TouchableOpacity onPress={handleDelete}>
          <Text
            style={{
              fontSize: 20,
              paddingRight: 20,
              fontWeight: 'bold',
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDelete: {
    alignItems: 'flex-end',
    width: '100%',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6A74CF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  keyboards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});
