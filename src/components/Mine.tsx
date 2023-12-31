import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Mine() {
  return (
    <View style={styles.Container}>
      <View style={styles.CoreMine}></View>
      <View style={styles.Line}></View>
      <View style={[styles.Line, { transform: [{ rotate: "45deg" }] }]}></View>
      <View style={[styles.Line, { transform: [{ rotate: "90deg" }] }]}></View>
      <View style={[styles.Line, { transform: [{ rotate: "135deg" }] }]}></View>
    </View>
  );
}


const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  CoreMine: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black'
  }
});
