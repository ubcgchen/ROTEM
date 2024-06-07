import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="1"
          component={Screen1}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="2"
          component={Screen2}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="3" 
          component={Screen3}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="4" 
          component={Screen4}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="5" 
          component={Screen5}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="6" 
          component={Screen6}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="7" 
          component={Screen7}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="8" 
          component={Screen8}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="9" 
          component={Screen9}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="10" 
          component={Screen10}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="11"
          component={Screen11}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="12" 
          component={Screen12}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='13'
          component={Screen13}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="14" 
          component={Screen14}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='15'
          component={Screen15}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name="16"
          component={Screen16}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="17" 
          component={Screen17}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='18'
          component={Screen18}
          options={{ headerShown: false }}/>
        <Stack.Screen 
          name="19" 
          component={Screen19}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='20'
          component={Screen20}
          options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const BulletPoint = ({ text }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 15 }}>
      <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 5, fontWeight: "bold", }}>•</Text>
      <Text style={{ fontSize: 20, flex: 1, marginRight: 10, fontWeight: "bold", }}>{text}</Text>
    </View>
  );
};

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the ROTEM App!</Text>
      <Text style={styles.body}>The information provided in this app is based on published data and
professional opinion. It is intended for educational purposes only.
Clinical judgment by a qualified physician is required in every
circumstance. By using this app, the user acknowledges and assumes
all responsibility for any decisions made in connection with its use
and agrees to hold harmless the app developers and any affiliated
parties from any liability.</Text>
      <Text></Text>
      <Text>The information provided in this app is intended for application with
the Werfen ROTEM Sigma device.</Text>

      <TouchableOpacity
            style={styles.button}
            title="LAUNCH OB ROTEM"
            onPress={() =>
              navigation.navigate('2')}>
        <Text style={styles.buttontext}>Launch ROTEM App</Text>
      </TouchableOpacity>

    </View>
  )
}

const Screen2 = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.prompt}>Has the patient bled more than 1000mL after delivery with ongoing bleeding?</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('3')
      }
    >
      <Text style={styles.buttontext}>Yes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate('19')
      }
    >
      <Text style={styles.buttontext}>No</Text>
    </TouchableOpacity>
    </View>
  )
}

const Screen3 = ({navigation}) => {
  return (
    <View style={styles.container_top}>
      <BulletPoint text="Give 1g tranexamic acid IV, inform the charge nurse and consult with obstetrics and anesthesia" />
      <BulletPoint text="Send urgent labs – ROTEM, CBC, Coag with fibrinogen, Calcium, Group & Screen" />
      <BulletPoint text="Consider empirical use of FFP / fibrinogen if patient is high risk for DIC e.g. placental abruption / AFE" />
      <TouchableOpacity style={styles.buttonblue} onPress={() => navigation.navigate('4')}>
        <Text style={styles.buttonwhitetext}>ANALYSE ROTEM</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
        onPress={() =>
          navigation.navigate('2')
        }
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
const Screen4 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Review FIBTEM A5</Text>
      <TouchableOpacity
        style={styles.buttonred}
        onPress={() =>
          navigation.navigate('5')
      }
      >
        <Text style={styles.buttonwhitetext}>FIBTEM A5: {'<'} 7</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonred}
        onPress={() => navigation.navigate('6')}
      >
        <Text style={styles.buttonwhitetext}>FIBTEM A5: 7-11</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.buttongreen}
        onPress={() => navigation.navigate('9')}
      >
        <Text style={styles.buttonwhitetext}>FIBTEM A5: {'>'}11</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('3')}
      >
        <Text>Back</Text>
      </TouchableOpacity>

    </View>
  )
}

const Screen5 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Replace fibrinogen with fibrinogen concentrate 6 g</Text>
      <TouchableOpacity
        style={styles.buttonred}
        onPress={() => navigation.navigate('10')}
      >
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('4')}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const Screen6 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Does the patient have ongoing bleeding?</Text>
      <TouchableOpacity
        style={styles.buttonred}
        onPress={() => navigation.navigate('7')}
      >
        <Text style={styles.buttonwhitetext}>Yes</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.buttonorange}
        onPress={() => navigation.navigate('8')}
      >
        <Text style={styles.buttonwhitetext}>No</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('4')}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const Screen7 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Replace fibrinogen with fibrinogen concentrate 4g</Text>
      <TouchableOpacity
        style={styles.buttonred}
        onPress={() => navigation.navigate('10')}
      >
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('6')}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const Screen8 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Do not replace fibrinogen</Text>
      <Text style={styles.prompt}>Repeat ROTEM and CBC in 10 minutes</Text>
      <TouchableOpacity 
      style={styles.buttongreen}
      onPress={() => navigation.navigate('10')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button} 
      onPress={() => navigation.navigate('6')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen9 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Do NOT replace fibrinogen</Text>
      <TouchableOpacity
      style={styles.buttongreen} 
      onPress={() => navigation.navigate('10')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.button} 
      onPress={() => navigation.navigate('4')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen10 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Review EXTEM CT</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('11')}>
        <Text style={styles.buttonwhitetext}>EXTEM CT {'>'}75 SECS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('12')}>
        <Text style={styles.buttonwhitetext}>EXTEM CT {'<'}75 SECS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('4')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
const Screen11 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Give FFP (15mL / kg)</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('13')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('10')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen12 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Do NOT give FPP</Text>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('13')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('10')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen13 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Review CBC</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('14')}>
        <Text style={styles.buttonwhitetext}>PLATELETS {'<'} 75 X 1e9 / L</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('15')}>
        <Text style={styles.buttonwhitetext}>PLATELETS {'>'} 75 X 1e9 / L</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('10')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen14 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Give platelets (1 adult dose)</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('16')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('13')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen15 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Do NOT give platelets</Text>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('16')}>
        <Text style={styles.buttonwhitetext}>OK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('13')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen16 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Did the patient receive blood products or fibrinogen?</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('17')}>
        <Text style={styles.buttonwhitetext}>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonorange} onPress={() => navigation.navigate('18')}>
        <Text style={styles.buttonwhitetext}>NO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('13')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen17 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Repeat ROTEM and CBC 10 minutes after blood product delivery or previous ROTEM if no products administered</Text>
      <TouchableOpacity style={styles.buttonblue} onPress={() => navigation.navigate('4')}>
        <Text style={styles.buttonwhitetext}>ANALYSE NEW ROTEM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('16')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen18 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Was FIBTEM A5 {'<'} 11?</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('17')}>
        <Text style={styles.buttonwhitetext}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('19')}>
        <Text style={styles.buttonwhitetext}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('16')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen19 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Is there any ongoing bleeding?</Text>
      <TouchableOpacity style={styles.buttonred} onPress={() => navigation.navigate('17')}>
        <Text style={styles.buttonwhitetext}>Yes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonorange} onPress={() => navigation.navigate('20')}>
        <Text style={styles.buttonwhitetext}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('18')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen20 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>Send ROTEM and CBC in 1 hour if clinically indicated</Text>
      <TouchableOpacity style={styles.buttonblue} onPress={() => navigation.navigate('4')}>
        <Text style={styles.buttonwhitetext}>ANALYSE NEW ROTEM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('18')}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('1')}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
    margin: 20
  },
  button: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonblue: {
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: '#2F5596',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttongreen: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#70AC47',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonorange: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#EC7D31',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttonred: {
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#C00001',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  buttontext: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonwhitetext: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_top: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex_start',
    paddingTop: 75
  },
  prompt: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 15
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  }
})

