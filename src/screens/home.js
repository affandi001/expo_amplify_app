import React from 'react';
import {Button, Text} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {useAuthenticator} from '@aws-amplify/ui-react-native';

function SignOutButton() {
  const {signOut} = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, user</Text>
      <SignOutButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
