import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignUpScreen = ({navigation}) => {
  return (
    <Button
        title="Log In"
        onPress={() =>
            navigation.navigate('Login')   
        }
        />    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignUpScreen;