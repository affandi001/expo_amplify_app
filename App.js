/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Authenticator} from '@aws-amplify/ui-react-native';
import {Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import HomeScreen from './src/screens/home';
Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator signUpAttributes={[]}>
        <HomeScreen />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
