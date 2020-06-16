import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Text, View, Button, TextInput, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Header } from 'react-native-elements';


class App extends React.Component {
  render() {
    return (

      <View


        style={styles.container}>

        <Header
          containerStyle={{
            backgroundColor: 'white',
            justifyContent: 'space-around',
          }}
          

          leftComponent={{ icon: 'person', color: '#282C34' }}
          centerComponent={{
            text: 'Profile',
            style: { fontWeight: "bold", color: '#000', fontSize: 18, alignSelf: "flex-start" }
          }}
        />

        <StatusBar translucent backgroundColor="black" />

        <SafeAreaView
          style={styles.container}
          contentContainerStyle={{ flex: 1, justifyContent: "center" }} >

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{ flex: 1, justifyContent: "center" }}>


            <KeyboardAwareScrollView
              extraScrollHeight={40}
              resetScrollToCoords={{ x: 0, y: 0 }}
              enableOnAndroid={true}
              keyboardVerticalOffset={100}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >



              <View style={styles.containerInput}>


                <View style={styles.viewStyle}>
                  <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput

                    placeholder="Enter first name" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                  />
                </View>

                <View style={styles.viewStyle}>
                  <Icon name="user" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput

                    placeholder="Enter last name" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }}
                  />
                </View>


                <View style={styles.viewStyle}>

                  <Icon name="envelope" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput placeholder="Enter email"  keyboardType={'email-address'}
                  style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
                </View>


                <View style={styles.viewStyle}>

                  <Icon name="phone" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput placeholder="Enter mobile number" keyboardType={'numeric'}
                   style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
                </View>
                <View style={styles.viewStyle}>

                  <Icon name="home" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput placeholder="Enter address" style={{ fontSize: 16, color: 'black', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
                </View>


                <View style={styles.viewStyle}>

                  <Icon name="lock" size={20} color="#000" style={{ alignSelf: "center", alignItems: "center" }} />
                  <TextInput placeholder="Enter password" secureTextEntry={true} style={{ fontSize: 16, color: '', alignSelf: "center", alignItems: "center", marginLeft: 10, }} />
                </View>

                <TouchableOpacity style={styles.loginBtn}>
                  <Text style={styles.textStyle}>Submit</Text>
                </TouchableOpacity>



              </View>




            </KeyboardAwareScrollView>
          </ScrollView>
        </SafeAreaView>
      </View>

    );
  }
}
export default App;
const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    width: "100%",
    alignContent: 'center',
    alignItems: "center",
    alignSelf: 'center',


  }, container: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#282C34",
  },


  viewStyle: {

    width: "90%", flexDirection: 'row',
    height: 40, borderColor: 'white', borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,.9)',
    paddingLeft: 10, margin: 10,
  },
  loginBtn: {
    width: "90%",
    backgroundColor: "#EAB15A",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },

  textStyle: {
    color: "white",
    fontSize: 16,
    width: "80%",
    height: 40,
    padding: 10,
    textAlign: "center",
  },


});