
import React from "react";
import { View, StyleSheet } from "react-native";

interface ProgressBarProps {
  progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Ensure progress is between 0 and 100
  const safeProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.progressBar,
          { width: `${safeProgress}%` },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    backgroundColor: "#E5E7EB", // gray-200
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4F46E5", // indigo-600
    borderRadius: 2,
    position: "absolute",
    left: 0,
    top: 0,
  },
});

export default ProgressBar;
