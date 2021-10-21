import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Keyboard } from "react-native";

class Inputs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };
  handlePassword = (text) => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert("First Name: " + email + " Last Name: " + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="First Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
          onBlur={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Last Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          onBlur={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Department"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          onBlur={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Positives"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          onBlur={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Opportunities"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          onBlur={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Other Notes"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handlePassword}
          onBlur={Keyboard.dismiss}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}> Add </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    width: 300,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});

// Formik x React Native example
// import React from "react";
// import { Button, TextInput, View, StyleSheet } from "react-native";
// import { Formik } from "formik";

// export const Form = (props) => (
//   <Formik
//     initialValues={{ firstName: "" }}
//     onSubmit={(values) => console.log(values)}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View style={styles.container}>
//         <TextInput
//           style={styles.textInput}
//           placeholder="First Name"
//           onChangeText={handleChange("firstName")}
//           onBlur={handleBlur("firstName")}
//           value={values.firstName}
//         />
//         <Button onPress={handleSubmit} title="Submit" />
//       </View>
//     )}
//   </Formik>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 45,
//     backgroundColor: "#F5FCFF",
//   },
//   textInput: {
//     borderColor: "#CCCCCC",
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     height: 50,
//     fontSize: 25,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
// });

// export default Form;

// import React, { Component } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import {
//   // ...
//   ScrollView,
//   TextInput,
// } from "react-native";
// import {
//   // ...
//   Keyboard,
// } from "react-native";
// import {
//   // ...
//   TouchableOpacity,
// } from "react-native";
// import { saveSettings, loadSettings } from "../storage/settingsStorage";

// export default class Form extends React.Component {
//   handleNameChange(firstName) {
//     this.setState({ firstName });
//   }

//   handleSubmit() {
//     saveSettings(this.state);
//   }

//   constructor(props) {
//     super(props);
//     this.state = { firstName: "" };
//     this.state = { lastName: "" };
//     this.state = { department: "" };
//     this.state = { positives: "" };
//     this.state = { oppurtunities: "" };
//     this.state = { other: "" };
//     this.handleNameChange = this.handleNameChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Text style={styles.header}>Settings</Text>
//           <ScrollView>
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="First Name"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.firstName}
//                 onChangeText={this.handleNameChange}
//               />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Last Name"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.lastName}
//                 onChangeText={this.handleNameChange}
//               />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Department Name"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.department}
//                 onChangeText={this.handleNameChange}
//               />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Positives"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.positives}
//                 onChangeText={this.handleNameChange}
//               />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Oppurtunities"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.oppurtunities}
//                 onChangeText={this.handleNameChange}
//               />
//               <TextInput
//                 style={styles.textInput}
//                 placeholder="Other Notes"
//                 maxLength={20}
//                 onBlur={Keyboard.dismiss}
//                 value={this.state.other}
//                 onChangeText={this.handleNameChange}
//               />
//               <TouchableOpacity
//                 style={styles.saveButton}
//                 onPress={this.handleSubmit}
//               >
//                 <Text style={styles.saveButtonText}>Save</Text>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 45,
//     backgroundColor: "#F5FCFF",
//   },
//   header: {
//     fontSize: 25,
//     textAlign: "center",
//     margin: 10,
//     fontWeight: "bold",
//   },
//   inputContainer: {
//     paddingTop: 15,
//   },
//   textInput: {
//     borderColor: "#CCCCCC",
//     borderTopWidth: 1,
//     borderBottomWidth: 1,
//     height: 50,
//     fontSize: 25,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },
//   saveButton: {
//     borderWidth: 1,
//     borderColor: "#007BFF",
//     backgroundColor: "#007BFF",
//     padding: 15,
//     margin: 5,
//   },
//   saveButtonText: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     textAlign: "center",
//   },
// });
