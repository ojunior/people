import { createAppContainer, createStackNavigator } from 'react-navigation';
import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizaFirstLetter } from './src/util';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage
  },

  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
			const peopleName = capitalizaFirstLetter(
				navigation.state.params.people.name.first );
			

			return ({
				title: peopleName,
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
				}
			});
		}
    
  }
}, {
    defaultNavigationOptions: {
      title: 'Pessoas',
      headerTintColor: 'white', //Cor da botao de voltar do header.
      headerStyle: {
        backgroundColor: '#4886ea',
        borderBottomWidth: 1,
        borderBottomColor: '#C5C5C5',

      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow: 1, //Utilizado para ocupar todo o espaço
        textAlign: 'center'
      }
    }

  });

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;

