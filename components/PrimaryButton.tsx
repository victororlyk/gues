import {PropsWithChildren} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton({children, onPress}: PropsWithChildren<{onPress: any}>) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{color: '#650233'}}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
