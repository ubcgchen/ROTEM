import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';


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
        <Stack.Screen
          name='about'
          component={Screen21}
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='Algo'
          component={Screen22}
          options={{ headerShown: false }}/>

          <Stack.Screen
          name='E1'
          component={Screen23}
          options={{ headerShown: false }}/>
          <Stack.Screen
          name='E2'
          component={Screen24}
          options={{ headerShown: false }}/>
           <Stack.Screen
          name='E3'
          component={Screen25}
          options={{ headerShown: false }}/>
          <Stack.Screen
          name='E4'
          component={Screen26}
          options={{ headerShown: false }}/>
           <Stack.Screen
          name='E5'
          component={Screen27}
          options={{ headerShown: false }}/>
          <Stack.Screen
          name='E6'
          component={Screen28}
          options={{ headerShown: false }}/>
          <Stack.Screen
          name='E7'
          component={Screen29}
          options={{ headerShown: false }}/>
           <Stack.Screen
          name='E8'
          component={Screen30}
          options={{ headerShown: false }}/>
           <Stack.Screen
          name='E9'
          component={Screen31}
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

const SubBulletPoint = ({ text, bullet }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
      <Text style={{ fontSize: 15, marginLeft: 50, marginRight: 5, fontWeight: "bold", }}>{bullet}</Text>
      <Text style={{ fontSize: 15, flex: 1, marginRight: 10, fontWeight: "bold", }}>{text}</Text>
    </View>
  );
};

const SubSubBulletPoint = ({ text, bullet }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 }}>
      <Text style={{ fontSize: 15, marginLeft: 100, marginRight: 5, fontWeight: "bold", }}>{bullet}</Text>
      <Text style={{ fontSize: 15, flex: 1, marginRight: 10, fontWeight: "bold", }}>{text}</Text>
    </View>
  );
};

const Screen1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the ROTEM App!</Text>
      <Text style={styles.body}>The information provided in this app is based on published data and
professional opinion. It is intended for educational purposes only. This app serves as a guide for the management of coagulation during an obstetric hemorrhage. It is not intended as a guide for the administration of packed red cell transfusion and clinicians are advised to utilise point of care hemoglobin testing for this purpose. Clinical judgment by a qualified physician is required in every
circumstance. By using this app, the user acknowledges and assumes
all responsibility for any decisions made in connection with its use
and agrees to hold harmless the app developers and any affiliated
parties from any liability.</Text>
      <Text></Text>
      <Text>The information provided in this app is intended for application with
the Werfen ROTEM Sigma device.</Text>

      <TouchableOpacity
            style={styles.buttongreen}
            title="LAUNCH OB ROTEM"
            onPress={() =>
              navigation.navigate('2')}>
        <Text style={styles.buttonwhitetext}>Launch ROTEM App</Text>
      </TouchableOpacity>
    
    <TouchableOpacity
            style={styles.button}
            title="OB ROTEM algorithim"
            onPress={() =>
              navigation.navigate('Algo')}>
        <Text style={styles.buttontext}>OB ROTEM algorithim</Text>
      </TouchableOpacity>
    
    <TouchableOpacity
            style={styles.button}
            title="Learn about OB ROTEM"
            onPress={() =>
              navigation.navigate('E1')}>
        <Text style={styles.buttontext}>Learn about OB ROTEM</Text>
      </TouchableOpacity>

    <TouchableOpacity
          style={styles.buttonbottomright}
          onPress={() =>
            navigation.navigate('about')}>
      <Text style={styles.buttontext}>About</Text>
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
    
    <TouchableOpacity
      style={styles.button}
        onPress={() =>
          navigation.navigate('1')
        }
      >
        <Text>Back</Text>
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
      <BulletPoint text="Recommended targets:"/>
      <SubBulletPoint text="Hemoglobin 70 – 80 g/L" bullet="i."/>
      <SubBulletPoint text="Hematocrit 0.21 – 0.24" bullet="ii."/>
      <SubBulletPoint text="Platelets:" bullet="iii."/>
      <SubSubBulletPoint text="Aim > 50^9/L" bullet="1."/>
      <SubSubBulletPoint text="Transfuse if < 75^9/L" bullet="2."/>
      <SubBulletPoint text="INR < 1.5" bullet="iv."/>
      <SubBulletPoint text="aPTTr < 1.5" bullet="v."/>
      <SubBulletPoint text="Fibrinogen – treat if < 2 g/L" bullet="vi."/>
      <SubBulletPoint text="Temperature > 36 degC" bullet="vii."/>
      <SubBulletPoint text="pH > 7.2" bullet="viii."/>
      <SubBulletPoint text="Ionized calcium > 1 mmol/L" bullet="ix."/>

      <TouchableOpacity
      style={styles.buttonblue}
        onPress={() =>
          navigation.navigate('4')
        }
      >
        <Text style={styles.buttonwhitetext}>Analyze ROTEM</Text>
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
      <Text style={styles.prompt}>Give 2-4u FFP (15ml/kg)</Text>
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
        <Text style={styles.buttonwhitetext}>PLATELETS {'<'} 75 X 10^9 / L</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttongreen} onPress={() => navigation.navigate('15')}>
        <Text style={styles.buttonwhitetext}>PLATELETS {'>'} 75 X 10^9 / L</Text>
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

const Screen21 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}> Created by: </Text>
      <Text style={styles.body}> Dr. Elise Hindle – Staff OB Anesthesiologist, BC Women’s Hospital </Text>
      <Text style={styles.body}> Dr. Katie Seligman  - Staff OB Anesthesiologist, BC Women’s Hospital </Text>
      <Text style={styles.body}> George Chen - Medical Student Class of 2025, UBC </Text>
      <Text style={styles.body}> Michael Gong – Medical Student Class of 2025, UBC </Text>

      <Text style={styles.prompt}> Image Sources: </Text>
      <Text style={styles.bodyabout}> User Perceptions of ROTEM-Guided Haemostatic Resuscitation: A Mixed Qualitative–Quantitative Study - Scientific Figure on ResearchGate. Available from: https://www.researchgate.net/figure/A-A-conventional-ROTEM-result-showing-a-heparin-effect-B-A-Visual-Clot_fig1_369469473 </Text>
      <Text style={styles.bodyabout}> Pavoni, V.; Gianesello, L.; Conti, D.; Ballo, P.; Dattolo, P.; Prisco, D.; Görlinger, K. “In Less than No Time”: Feasibility of Rotational Thromboelastometry to Detect Anticoagulant Drugs Activity and to Guide Reversal Therapy. J. Clin. Med. 2022, 11, 1407. https://doi.org/10.3390/jcm11051407 </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('1')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen22 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageZoom cropWidth={Dimensions.get('window').width}
                 cropHeight={Dimensions.get('window').height*0.7}
                 imageWidth={Dimensions.get('window').width}
                 imageHeight={Dimensions.get('window').height*0.7}>
                <Image source={require('./assets/RotemAlgo.png')} style={styles.imageA} />
            </ImageZoom>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('1')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen23 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.prompt}> Learn about ROTEM for OB </Text>
      <Text style={styles.body}> ROTEM (rotational thromboelastometry) is a point of care coagulation analyzer. It evaluates the capacity of a patient's whole blood to form a stable clot and provides valuable information to direct the administration of blood products within minutes of initiating the test. </Text>
      
      <Image
        source={require('./assets/Rotem.png')}
        style={styles.image} />

      <Text style={styles.body}>  The use of ROTEM (rotational thromboelastometry) to guide blood product management in postpartum hemorrhage has several benefits. It has been shown to reduce the total number of blood products transfused, decrease the risk of transfusion-related injuries such as transfusion-related acute lung injury (TRALI) and transfusion-associated cardiac overload (TACO), and lessen the need for intensive care unit (ICU) admissions.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E2')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('1')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen24 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.bodyfit}> The ROTEM analyzer provides several different test results on the screen. A summary of these results is presented below:</Text>
      
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• EXTEM</Text> approximates the external clotting pathway, similar to the INR result. </Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• INTEM</Text> approximates the internal clotting pathway, similar to the aPTTr result. </Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• FIBTEM</Text> includes a platelet inhibitor, thus analyzing only the fibrinogen component of the clot. It correlates with the Clauss fibrinogen laboratory result. Due to the absence of platelet activity, the FIBTEM normally appears much thinner than the other tests. </Text>     
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• APTEM</Text> contains an antifibrinolytic agent. By comparing APTEM with EXTEM results, it can highlight hyperfibrinolysis and identify patients who might benefit from an antifibrinolytic, such as tranexamic acid. </Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• HEPTEM</Text> is an optional test that includes heparinase. If the HEPTEM result is normal but the INTEM result is abnormal, it indicates that heparin is present in the patient’s system and affecting clotting. This test is not commonly required for obstetric patients. </Text> 
      
      <Image
        source={require('./assets/Rotem4p.png')}
        style={styles.image2} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E3')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E1')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen25 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.bodyfit}> Several variables are presented for each test, as shown in the image and described below:</Text>

       <Image
        source={require('./assets/Rotem2.png')}
        style={styles.image3} />
      
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• Clotting Time (CT): </Text> The time from the start of the test to clot initiation. A prolonged CT indicates a shortage of clotting factors or the presence of anticoagulants like Warfarin or Heparin. </Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• Clot Formation Time (CFT): </Text> The time from clot initiation to the formation of a stable clot, estimating the velocity of clot formation. </Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• Alpha Angle: </Text> This is related to CFT, representing the angle of the tangent at the time of clot formation. It indicates the speed of clot build-up.</Text>     
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• Maximum Clot Firmness (MCF):</Text> The thickness of the final ROTEM graph, representing the strength of the clot. MCF depends on platelets, fibrinogen, and factor XIII activity.</Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• A5 and A10: </Text> The MCF at 5 and 10 minutes, respectively. These are early indicators of clot strength and correlate well with MCF.</Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• Maximum Lysis (ML): </Text> The decrease in clot strength due to hyperfibrinolysis, shown as the final clot firmness as a percentage of MCF.</Text> 
      <Text style={styles.bodyfit}> <Text style={styles.boldText}>• LI30 and LI60: </Text> Clot firmness as a percentage of MCF at 30 minutes and 60 minutes, respectively.</Text> 

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E4')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E2')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen26 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}>  In the third trimester of pregnancy, patients are typically hypercoagulable. This manifests on the ROTEM as an increase in the Maximum Clot Firmness (MCF), as well as in the A5 and A10 values, across all tests. Consequently, reference ranges differ from those of the non-pregnant population. Therefore, an obstetric-specific algorithm, such as the one used in this app, should be utilized when interpreting ROTEM data.</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E5')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E3')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen27 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}> Some common ROTEM patterns in coagulopathy following postpartum hemorrhage include:</Text>

       <Image
        source={require('./assets/RotemhypoF.png')}
        style={styles.image4} />
      
      <Text style={styles.body}> <Text style={styles.boldText}>Hypofibrinogenemia:</Text> All causes of postpartum hemorrhage can lead to a loss of fibrinogen, which pregnant patients rely on more for clot formation compared to non-pregnant patients. On the ROTEM, this condition is most noticeable in the FIBTEM test, which will appear extremely narrow or flat, with corresponding reductions in MCF, A5, A10, and the alpha angle. The EXTEM, INTEM, and APTEM tests are also likely to show reductions in MCF, A5, A10, and the alpha angle. However, in these tests, such reductions are not specific to hypofibrinogenemia and could also result from low platelet counts. </Text> 
    
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E6')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E4')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen28 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}> <Text style={styles.boldText}>Reduced Clotting Factors:</Text> This condition generally causes a noticeable prolongation of the Clotting Time (CT) in all tests. The EXTEM test (which assesses Factors VII, X, V, II, and I) and the INTEM test (which assesses Factors XII, XI, IX, VIII, X, V, II, and I) can be used to identify which specific clotting factors are deficient. However, the exact CT cut-off for the replacement of clotting factors with fresh frozen plasma in postpartum hemorrhage has not yet been defined.</Text> 
        
        <Image
        source={require('./assets/RotemhypoC.png')}
        style={styles.image4} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E7')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E5')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen29 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}> <Text style={styles.boldText}>Low Platelets:</Text> This condition will cause a reduction in the MCF, A5, and A10 values in all tests except for the FIBTEM, which will remain normal. The ROTEM cut-off for triggering platelet transfusion has not been defined, so clinicians are advised to run a complete blood count to assess platelet concentration.</Text> 
        
        <Image
        source={require('./assets/RotemhypoP.png')}
        style={styles.image4} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E8')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E6')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen30 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}> <Text style={styles.boldText}>Hyperfibrinolysis:</Text> This condition, characterized by accelerated clot breakdown, presents as increased maximum lysis (ML), LI30, and LI60 across all tests except for the APTEM. In pregnant patients, hyperfibrinolysis is often poorly represented by ROTEM, possibly because the primary hyperfibrinolysis occurs in the placental bed rather than in the patient’s circulation. Therefore, tranexamic acid should be administered to all patients suffering from postpartum hemorrhage and should not be withheld based on a normal ROTEM lysis result.</Text> 
        
        <Image
        source={require('./assets/RotemhypoL.png')}
        style={styles.image4} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E9')}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E7')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const Screen31 = ({ navigation }) => {
  return (
    <View style={styles.container_top}>
      <Text style={styles.body}> <Text style={styles.boldText}> Disseminated Intravascular Coagulopathy (DIC):</Text> This condition can occur in patients with placental abruption, intrauterine fetal demise, sepsis, or amniotic fluid embolism. In DIC, all ROTEM parameters will likely be extremely abnormal. Patients may require supplementation of fibrinogen, clotting factors, and platelets, as well as the administration of tranexamic acid.</Text> 
        
        <Image
        source={require('./assets/RotemDIC.png')}
        style={styles.image4} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('1')}>
        <Text>Main Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('E8')}>
        <Text>Back</Text>
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
  },
  buttonbottomright: {
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  imageA:{
    flex: 1,
    width: "95%",
    height: "100%",
    resizeMode: 'contain'
  },
  image:{
    width: "85%",
    height: "30%",
    resizeMode: 'contain',
    aspectRatio: 1.5,
  },
  image2:{
    width: "85%",
    height: "25%",
    resizeMode: 'contain',
    aspectRatio: 1.85,
  },
    image3:{
    width: "85%",
    height: "20%",
    resizeMode: 'contain',
    aspectRatio: 3.2,
  },
    image4:{
    width: "85%",
    height: "40%",
    resizeMode: 'contain',
    aspectRatio: 1.2,
  },
  boldText: {
    fontWeight: 'bold',
  },
  bodyfit: {
    textAlign: 'justify',
    margin: 8,
    fontSize: 13,
  },
  bodyabout: {
    TextAlign: 'left',
    fontSize: 10,
    margin: 10,
  },
  containerE: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
}
}
)
