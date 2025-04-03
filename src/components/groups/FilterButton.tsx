
import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Svg, Path } from "react-native-svg";

interface FilterButtonProps {
  label: string;
  onPress?: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconContainer}>
        <Svg width={10} height={11} viewBox="0 0 10 11" fill="none">
          <Path d="M9 1H1L5 9L9 1Z" stroke="black" />
        </Svg>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
  },
  iconContainer: {
    marginLeft: 4,
  },
});

export default FilterButton;
