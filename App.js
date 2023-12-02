import React, { useState } from 'react';
import{FocusHistory} from './src/features/FocusHistory'
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'
export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addsubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history, subject])
          }}
          clearSubject={()=>setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
