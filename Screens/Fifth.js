//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

// create a component
const Fifth = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <View style={styles.img}>
                    
                    <BackgroundImage source={{uri:'https://images-na.ssl-images-amazon.com/images/I/61fZf+yyQ8L.jpg'}}
                     style={{height:'100%',width:'100%'}
                       
                    }
                    ></BackgroundImage>
                    
                </View>
                <Text></Text>
            </View>
            <View style={styles.moral}>
                <ScrollView>

                    
              <Text style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:25,color:'white',position:'relative'}}>   Alaudeen and The Magical Lamp:
 </Text>
                <Text style={{fontSize:20,textAlign: "justify",marginLeft:10,marginRight:10,color:'black',marginTop:10,fontWeight:'bold'}}>
             

                Alaudeen and The Magical Lamp:

Alaudeen was a small boy. He lived in a village in Persia. He played in the streets with his friends often. One day he met a stranger in the road, while he was playing. He said that he was his father’s brother. He had seen him as a small boy. So you didn’t recognize me. "I am your uncle. If you come with me, I will show a wonderful thing" he said in a low voice. Alaudeen saw his face and followed him with confidence.

The stranger went into a dark place under a mountain with Alaudeen. He was a good magician. "Here is a wonderful thing in the center of the Cave". He said to Alaudeen. "You can take whatever your want. "At one corner, you will find an old lamp. Bring it to me. Now wear this ring and it will save you from any danger" he said.

Alaudeen wore the ring and went inside the Cave confidently. When he entered the cave the ring brightened up and gave light to the cave.

Inside the cave, he saw precious stones and gold ornaments diamond fixed jewels on all sides. Alaudeen was astonished for a while. He filled all his pockets full of valuables. Then he went near the corner and found the lamp the magician had mentioned. He took the lamp and came near the cave’s entrance. The magician stood there to get the lamp.

“Quick" give the lamp quick." He asked Alaudeen.

But Alaudeen said, “First you help me to come out". The magician asked for the lamp and Alaudeen requested help to come out. Both were adamant. The magician got angry and suddenly pushed Alaudeen into the cave. Alaudeen lay inside the cave frightened.

Then he remembered the ring that was given by the magician. He rubbed the ring gently. Suddenly a huge man with a gigantic figure appeared before him and asked, “I am the slave of you and the ring. I shall serve you Master. Now what do you want me to do"

Alaudeen quickly said, "Take me home, please!". The very next moment he was in his home before his mother. He and his mother were in surprise. His mother was so happy to see his son with lot of jewels and precious stones. Alaudeen told all that had happened in the cave and about the old lamp that the magician wanted to get. His mother took the lamp and began to clean the lamp.

But to their surprise there also a might figure appeared before them and said, “Master I am also a slave of you and the lamp. I can fulfill all your wish in no time."

Alaudeen ordered. “Oh! Build a palace".

In no time his old house was changed into a beautiful palace. Then Alaudeen ordered one by one, delicious food, fine cloths and all that he needed to be a King. The genie gave all they wanted in such a way that they had never seen before.

Months after, he chanced to see the daughter of Sultan, the beautiful princess Yasmin. Soon he fell in love with Yasim. His mother asked the Sultan to give his daughter in marriage to Alaudeen. The Sultan agreed and Alaudeen married Yasmin.

Later the unlucky magician came to know about the lamp and Alaudeen’s wealthy condition. He knew that it was only because of the magical lamp. He wanted to get it by any means. So he disguised himself as a lamp vendor and entered Alaudeen's palace. At that time Alaudeen was out on work. The magician shouted aloud, "Lamps, new lamp for old one, come and see, then buy".

The princess saw the old lamp on the table and wanted to change it for a new one.

So the princess gave the old lamp to the magician and took the new one. The magician was happy. He left the place and rubbed the lamp and called the genie, “Change the palace and all as desert. In no time the palace was gone. Alaudeen’s mother and princess were in a desert area. When Alaudeen returned nothing was there. He knew that a strange man came to his palace. He thought that it was the magician, So he wandered for many days in search of his wife and mother.

He had forgotten …
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
export default Fifth;
