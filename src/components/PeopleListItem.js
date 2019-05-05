import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { capitalizaFirstLetter }  from '../util'
 
const PeopleListItem = (props) => {
   const { people, navigateToPeopleDetail } = props;
   const { title, first, last } = people.name;
   
    return(
        <TouchableOpacity onPress={() => {
            navigateToPeopleDetail({ people });
          

        }} >
            <View key={first} style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
                <Text style={styles.lineText}>
                    { `${ 
                        capitalizaFirstLetter(title ) 
                    }  ${ 
                        capitalizaFirstLetter(first)
                    }  ${ 
                        capitalizaFirstLetter(last)
                    }` }
                
                </Text>
            </View>
        </TouchableOpacity>
    )
    
};

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        //Para alinhar verticalmente,precisa esta em row
        alignItems: "center",
        flexDirection: 'row',
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7 //Vai separar 7/8 avos da tela
    },
    avatar: {
        aspectRatio: 1,
        flex: 1, ///vai separar 1/8 avos da tela.
        marginLeft: 15,
        borderRadius: 50,


    }
})


export default PeopleListItem;