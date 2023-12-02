import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing} from '../utils/sizes'
export const Focus = ({ addsubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textInput}
          onChangeText={
            setSubject
          }
          label="write focus content"
        />
        <View style={style.button}>
          <RoundedButton
            
            title="+"
            size={50}
            onPress={() => {
              console.log('Hi from React Native');
              console.log(subject);
              addsubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    //    flex: 0.5,
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'flex-start',
  },
});
