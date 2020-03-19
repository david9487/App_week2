import React from "react";
import { StyleSheet, Text, View, ColorPropType } from "react-native";
const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>一押しのアルバム</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fffffd",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 2
  },
  textStyle: {
    fontSize: 24,
    fontWeight: "200",
  },
});

export default Header;


