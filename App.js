import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList'

//Lib para acesso e apis
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      peoples:[]
    };

  }
  
  componentDidMount(){
    axios
    .get('https://randomuser.me/api/?nat=br&results=5')
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
      <View >
        <Header title="Pessoas"  />
        <PeopleList peoples={this.state.peoples} />
      </View>
    );
  }
}
