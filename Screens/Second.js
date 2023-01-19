//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { BackgroundImage } from 'react-native-elements/dist/config';

// create a component
const Second = () => {
    return (
        <View style={styles.container}>
            <View style={styles.story}>
                <View style={styles.img}>
                    <BackgroundImage source={{ uri: 'https://i.pinimg.com/736x/6c/28/d6/6c28d6f3f1e1a21d592916d88607fa5a.jpg' }}
                        style={{ height: '100%', width: '100%' }

                        }
                    ></BackgroundImage>
                </View>
                <Text></Text>
            </View>
            <View style={styles.moral}>
                <ScrollView>


                    <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: 25, color: 'white', position: 'relative' }}>  The Apple Tree and the Farmer: </Text>
                    <Text style={{ fontSize: 20, textAlign:"justify",marginLeft: 10, marginRight: 10, color: 'black', marginTop: 10, fontWeight: 'bold' }}>


                        Once upon a time, there lived a farmer in a village, beside a forest. He had a big garden that had an old apple tree and other plants, trees and beautiful flowers. When the farmer was a little boy, he spent much of his time playing with the apple tree. Those days, the apple tree had given the choicest of apples to him. However, as time passed, the apple tree became old and stopped bearing fruits.
                        Now that the farmer was not getting any apples from the tree, he decided that the tree was useless. Therefore, he decided to cut the tree and use its wood to make some new furniture. He felt that since the tree was old and huge, he did not have to cure it, and it would make great furniture. He forgot that as a boy, he had spent his entire childhood climbing the tree and eating its apples.
                        Now the apple tree was home to several little animals in the neighborhood. This included squirrels, sparrows and a huge variety of birds and insects. When the farmer took his axe and began chopping the tree, all the little animals came rushing down.
                        They all began to plead with the farmer. They gathered round the farmer and said, "Please don't cut the tree. We used to play with you when you were small, under this very tree. This is our home and we have no other place to go".
                        The farmer was adamant. He raised his axe and the commotion grew.
                        "Please don't chop and destroy my home and kids," cried the squirrel.
                        "Please don't chop and destroy my nest," cried the little birds.
                        "Please don't cut the apple tree," cried the grasshopper.
                        The farmer, however, forgot his childhood and his animal friends. He began to chop the tree harder. All the little animals became desperate, and wanted to protect the apple tree at any cost.
                        The little animals said, "We will sing for you when you are toiling away in the fields. We will look after your little boy. He will not cry, but instead will be entertained and happy. You will like our songs and will not feel tired."
                        However, their cries for help fell on deaf ears. Despite all their requests, the farmer continued to chop down the tree.
                        All of a sudden, he noticed something shiny. On inspecting it, he realized that it was a beehive, full of honey. He took a little and put it in his mouth. The taste of the honey woke up the little boy in him. Suddenly, the memories of his childhood came rushing back. The honey tasted so good that he wanted more. It brought a sense of happiness to him. He smiled and exclaimed, "This tastes amazing."
                        Realizing the change in the farmer's attitude, the little animals spoke in unison: The bee said, "I will always provide you with sweet honey." The squirrel said, "I will share any amount of nuts that you want." The birds cried, "We will sing as many songs as you want."
                        Finally, the farmer realized his folly, and put down his axe. He understood that the tree was home to many lovely animals that provided him with so many things. He wanted his little boy to have the childhood that he had.
                        The farmer realized that the apple tree was not that fruitless. The little boy in him saved the apple tree.
                        He threw away the axe and said to the little creatures, "I promise that I would never cut this tree. I have realized my mistake and you all can now live in peace and harmony."
                        The little creatures thanked the bee profusely. If the farmer had not found the beehive, they would have been homeless by now. They continued living happily in the old apple tree.
                        Moral: Each and every living thing in nature is of some use: we should not destroy any living
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
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    story: {
        height: '30%',
        width: '100%'
    },
    moral: {
        height: '70%',
        width: '100%',
        borderWidth: 1,
        backgroundColor: '#C19A6B'

    }
});

//make this component available to the app
export default Second;
