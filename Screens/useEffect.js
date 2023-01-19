import react, { useEffect, useState } from "react";
import react, {View,Text} from "react";

const App = () => {
    const [num, setnum] = useState(0);

    useEffect = (() =>{

        console.log("aman")
    });

    

    return (
        <View>
        <Text>
        <button onPress={() => { setnum(num + 1) }}> click me {num}</button>
        </Text>
            
        </View>
       
    );

}
export default App;
