import React from 'react';
import { View } from 'react-native';

//import Header from '../components/Header';
import PeopleList from '../components/PeopleList'

//Lib para acesso e apis
import axios from 'axios';

export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples:[]
    };
 
  }
  
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=150')
    .then(response => {
      const { results } = response.data;

      this.setState({
        peoples: results
      } )

/*      const names = results.map(people => {
        return people.name.first;
      })
*/
    }) 
  
  }
  renderList(){
// Criado uma constante que e preenchida percorrendo o names.
// usando o .map, vc percorre o array..no primeiro parametro criamos uma arrow function
// criando um component text      
/*      const textElements = names.map(name => {
        return <Text key={name}>{ name }</Text>
      })*/
      

  }
    render() {
        return (
//        <Header title="Pessoas"  /> retirado de dentro da View
            <View >
                <PeopleList 
                    peoples={this.state.peoples} 
                    onPressItem={(pageParams) => {
                        this.props.navigation.navigate('PeopleDetail', pageParams);
                    }}
                />
            </View>
    );
  }
}
