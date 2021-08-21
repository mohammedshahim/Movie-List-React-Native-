import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import COLORS from "../constants/Colors";

const { width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenerCard = ({ generName, onPress, active }) => {
  return (
    <TouchableOpacity
      style={{
        ...style.container,
        backgroundColor: active ? COLORS.ACTIVE : COLORS.WHITE,
      }}
      activeOpacity={0.5}
      onPress={() => onPress(generName)}
    >
      <Text
        style={{
          ...style.generText,
          color: active ? COLORS.WHITE : COLORS.BLACK,
        }}
      >
        {generName}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  generText: {
    fontSize: 13,
    color: COLORS.ACTIVE,
  },
});

export default GenerCard;
