//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

// create a component
const Third = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <View style={styles.img}>
                    <BackgroundImage source={{uri:'https://i.ytimg.com/vi/ykQqO8VcHdo/maxresdefault.jpg'}}
                     style={{height:'100%',width:'100%'}
                       
                    }
                    ></BackgroundImage>
                </View>
                <Text></Text>
            </View>
            <View style={styles.moral}>
                <ScrollView>

                    
              <Text style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:25,color:'white',position:'relative'}}>  The hungry mouse: </Text>
                <Text style={{fontSize:20,textAlign: "justify",marginLeft:10,marginRight:10,color:'black',marginTop:10,fontWeight:'bold'}}>


                

A mouse was having a very thought time. She had no food for many days and made strenuous efforts get her food. All her efforts went in vain. She looked everywhere to find her food. As the days pass by, she became very thin.

One day, the mouse found a basket with corns. She also noticed a tiny hole in the basket, which was sufficient enough to move her in. She easily moved inside the hole.

Since she had no foods for many days, she ate a large amount of corn. Without realizing her, she continuously ate more and more corns. She realized very later that she ate a lot more than she actually required. After eating a whole lot of corn, she became very fat!

Satisfied with corns, the fat mouse tried to come out of the basket through the small hole. Unfortunately, the tiny hole could not accommodate the big mouse!!!!

The mouse started screaming 'Oh god! Let me come out, how can I come out?'

A rat after hearing mouse's screaming voice from the basket, asked her what happened!

Mouse told the story and asked rat a solution.

Rat told, 'if you want to come out the basket, wait for sometime or even days to lose your all your fat until you grow thin.'

Mouse started to starve now but with lots of food to come out of the trap!

Anything too much is good for nothing!
                </Text>
                </ScrollView>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: 'yellow',
    },
    story:{
        height:'30%',
        width:'100%'
    },
    moral:{
        height:'70%',
        width:'100%',
        borderWidth:1,
        backgroundColor:'#C19A6B'

    }
});

//make this component available to the app
export default Third;
