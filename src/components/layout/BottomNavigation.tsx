
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

type NavItem = {
  name: string;
  icon: string;
  isActive?: boolean;
  onPress?: () => void;
};

interface BottomNavigationProps {
  items: NavItem[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ items }) => {
  return (
    <View style={styles.nav}>
      <View style={styles.navContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={item.onPress}
          >
            <SvgXml xml={item.icon} width={24} height={24} />
            <Text
              style={[
                styles.navText,
                item.isActive ? styles.activeNavText : null,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
    padding: 16,
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  navText: {
    fontSize: 12,
    lineHeight: 18,
    color: "#64748B", // slate-500
  },
  activeNavText: {
    color: "#4F46E5", // indigo-600
  },
});

export default BottomNavigation;
