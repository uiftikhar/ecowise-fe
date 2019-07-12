import { Navigation } from 'react-native-navigation';

const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: 'SignIn',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign In',
                  icon: require('./signin.png'),
                },
              },
            },
          },
          {
            component: {
              name: 'SignUp',
              options: {
                bottomTab: {
                  fontSize: 12,
                  text: 'Sign Up',
                  icon: require('./signup.png'),
                },
              },
            },
          },
        ],
      },
    },
  });

const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });

export { goHome, goToAuth };
