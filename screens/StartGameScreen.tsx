import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  function reset() {}
  function confirm() {
    console.log('hello');
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={reset}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirm}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#4e0329',
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    color: '#ddb52f',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer:{
    flex:1
  }
});

export default StartGameScreen;
