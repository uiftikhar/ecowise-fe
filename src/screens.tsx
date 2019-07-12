import { Navigation } from 'react-native-navigation';

/*
create & export a function that calls
Navigation.registerComponent() on any components
we would like to have available to our Navigation.
*/

export const registerScreens = () => {
  Navigation.registerComponent(
    'Initializing',
    () => require('./Initializing').default,
  );
  Navigation.registerComponent('Home', () => require('./Home').default);
};
