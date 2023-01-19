//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

// create a component
const Fourth = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <View style={styles.img}>
                    
                    <BackgroundImage source={{uri:'http://4.bp.blogspot.com/-ilGGJeIwIHM/UYSuT72p3LI/AAAAAAAAAaI/oQnhkkpW_nk/s1600/lion1jpg.jpg'}}
                     style={{height:'100%',width:'100%'}
                       
                    }
                    ></BackgroundImage>
                    
                </View>
                <Text></Text>
            </View>
            <View style={styles.moral}>
                <ScrollView>

                    
              <Text style={{color:'black',fontWeight:'bold',textAlign:'center',fontSize:25,color:'white',position:'relative'}}>  The lion and the hare: </Text>
                <Text style={{fontSize:20,textAlign: "justify",marginLeft:10,marginRight:10,color:'black',marginTop:10,fontWeight:'bold'}}>
             

There lived a lion by the name of Bhasuraka, in a dense jungle. He was very powerful, cruel and arrogant. He used to kill the animals of the jungle unnecessarily. He even killed the human beings, who travelled through the jungle. This became a cause of worry for all the animals. They discussed this problem among themselves and ultimately came upon a decision to hold a meeting with the lion and make an amicable settlement with him and put an end to this ongoing trauma.

So, one day, all the animals of the jungle assembled under a big tree. They also invited king lion to attend the- meeting. In the meeting the animals said to king lion, "Your Majesty, we are happy that you are our king. We are all-the-more happy that you are presiding over the meeting." King lion thanked them and asked, "Why is it that we have gathered here?" All the animals began looking at each other. They had to muster enough courage to broach the topic. "Sir," said one of the animals, "Its natural that you kill us for food. But, killing more than what is required is a positive vice and unnecessary. If you go on killing the animals without any purpose, soon a day will come, when there will be no animals left in the jungle."
"So what do you want?" roared king lion.

"Your Majesty, we have already discussed the problem among ourselves and have come upon a solution. We have decided to send one animal a day to your den. You can kill and eat it. This will save you from the trouble of hunting and you will not have to kill a number of animals unnecessarily for your meals."

"Good," the lion roared back. "I agree to this proposal, but the animals must reach to me in time, otherwise, I'll kill all the animals of the jungle."

The animals agreed to this proposal. Everyday one animal walked into the lion's den to become his feast. The lion too was very happy to have his food right before him. He stopped hunting for his prey.

One day, it was the turn of a hare to go into the lion's den. The little hare was unwilling to go and become a meal of the lion, but the other animals forced him to go to the lion's den.

Having no alternative, the hare began thinking quickly. He thought of a plan. He began wandering around and made a deliberate delay, and reached the lion's den a little late than the lion's meal time. By now, the lion had already lost his patience and seeing the hare coming slowly, he became furious and demanded for an explanation.

"Your Majesty", the hare said with folded hands, "I am not to be blamed for that. I have come late because another lion began chasing me and wanted to eat me. He said that he too was the king of the jiungle."

The king lion roared in great anger and said, "Impossible, there cannot exist another king in this jungle. Who is he? I'll kill him. Show me where he lives."

The lion and the hare set out to face the other lion. The hare took the lion to a deep well, full of water.

When they reached near the well, the hare said to the lion, "This is the place where he lives. He might be hiding inside."
The lion again roared in great anger; climbed up the puteal of the well and peeped in. He saw his own reflection in the water and thought that the other lion was challenging his authority. He lost his temper.

"I must kill him", said the lion unto himself and jumped into the well. He was soon drowned.

The hare was happy. He went back to other animals and narrated the whole story. All the animals took a sigh of relief and praised him for his cleverness. They all lived happily thereafter.
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
export default Fourth;
