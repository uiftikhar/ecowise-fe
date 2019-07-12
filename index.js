/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { registerScreens } from "./src/screens";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  // the initial routes we would like our application to render
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Initializing',
            },
          },
        ],
      },
    },
  });
});
