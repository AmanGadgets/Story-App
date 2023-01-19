//import liraries

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ScrollView } from 'react-native';
import { Card } from 'react-native-elements/dist/card/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


// create a component
const First = () => {

    const navigation= useNavigation();
    return (

        <ScrollView>
       <SafeAreaView style={styles.container}>
           
             <View style={{}}>
                 <View style={styles.card}>
                     <View style={styles.img}>
                          <Image
                            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/91unUcQQ94L.jpg'}}

                            style={{height:285,width:250,borderRadius:10}}
                        
                          />
                     </View>
                     <View style={styles.btn}>
                     <TouchableOpacity onPress={() => navigation.navigate('Moral Story')}>
                         <Text style={{fontWeight:'bold',fontSize:30,color:'white',fontFamily:'sans-serif'}}>Read</Text>
                     </TouchableOpacity>
                     </View>
                 </View>


                 <View style={styles.card}>
                     <View style={styles.img}>
                          <Image
                            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/81ztsfyw67L.jpg'}}

                            style={{height:285,width:250,borderRadius:10}}
                            
                          />
                     </View>
                     <View style={styles.btn}>
                     <TouchableOpacity  onPress={() => navigation.navigate('Bedtime Story')}>
                         <Text style={{fontWeight:'bold',fontSize:30,color:'white',}}>Read</Text>
                     </TouchableOpacity>
                     </View>
                 </View>


                 <View style={styles.card}>
                     <View style={styles.img}>
                          <Image
                            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/919xvXSwIcL.jpg'}}

                            style={{height:285,width:250,borderRadius:10}}
                            
                          />
                     </View>
                     <View style={styles.btn}>
                     <TouchableOpacity onPress={()=>navigation.navigate('Panchatara Story')}>
                         <Text style={{fontWeight:'bold',fontSize:30,color:'white',}}>Read</Text>
                     </TouchableOpacity>
                     </View>
                 </View>


                 <View style={styles.card}>
                     <View style={styles.img}>
                          <Image
                            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/914Ek4+mv6L.jpg'}}

                            style={{height:285,width:250,borderRadius:10}}
                            
                          />
                     </View>
                     <View style={styles.btn}>
                     <TouchableOpacity onPress={()=>navigation.navigate('Arabian Night Story')}>
                         <Text style={{fontWeight:'bold',fontSize:30,color:'white',}}>Read</Text>
                     </TouchableOpacity>
                     </View>
                 </View>


                 <View style={styles.card}>
                     <View style={styles.img}>
                          <Image
                            source={{uri:'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/4791580/4791580-1594817747381-6d7dac6a8ebce.jpg'}}
                            
                            style={{height:285,width:250,borderRadius:10}}
                            
                          />
                     </View>
                     <View style={styles.btn}>
                     <TouchableOpacity onPress={()=>navigation.navigate('Akbar Birbal Story')}>
                         <Text style={{fontWeight:'bold',fontSize:30,color:'white',}}>Read</Text>
                     </TouchableOpacity>
                     </View>
                 </View>  

             </View>
            
        </SafeAreaView>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor:'#D5B230',
        
        
    },
    card:{
        height:350,width:260,borderRadius:10,marginTop:10,
        shadowColor:'black',
        borderWidth:1,
        backgroundColor:'#C97E46',
        borderRadius:20,
        
        

    },
    img:{
        alignItems:'center',
        marginTop:10
    },
    btn:{
        borderWidth:1,
        height:48,
        alignItems:'center',
        justifyContent:'center',
        borderTopEndRadius:30,
        backgroundColor:'red',
        marginTop:3,
        borderColor:'brown',
        width:150,
        alignSelf:'center',
        borderBottomStartRadius:30
        
        
    }
    
});

//make this component available to the app
export default First;
