import {useEffect, useState} from 'react';
import {Alert, StyleSheet, View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({
  userNumber,
  onGameOver,
}: {
  userNumber: number;
  onGameOver: Function;
}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [computerGuess, setComputerGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (computerGuess === userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver(guessRounds.length);
    }
  }, [computerGuess, userNumber, onGameOver, guessRounds]);

  function nextGuessHandler(direction: 'lower' | 'greater') {
    if (
      (direction === 'lower' && computerGuess < userNumber) ||
      (direction === 'greater' && computerGuess > userNumber)
    ) {
      Alert.alert('it is not true', 'it is not true', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = computerGuess;
    } else {
      minBoundary = computerGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      computerGuess,
    );
    setComputerGuess(newRndNumber);
    setGuessRounds(prevState => [newRndNumber, ...prevState]);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{computerGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttons}>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            <Icon name="plus" size={24} color={Colors.accent500} />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            <Icon name="minus" size={24} color={Colors.accent500} />
          </PrimaryButton>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={itemData => {
            return <Text>{itemData.item}</Text>;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  instructionText: {
    marginBottom: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GameScreen;

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
