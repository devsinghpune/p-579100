
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

interface HeaderProps {
  userName: string;
  companyName: string;
  profileImage?: string;
  hasNotifications?: boolean;
  onNotificationPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  companyName,
  profileImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/77fa5b08d194f239ea566706827e847016c37b8f",
  hasNotifications = true,
  onNotificationPress,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.welcomeText}>Welcome back, {userName}</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <TouchableOpacity
          style={styles.notificationButton}
          onPress={onNotificationPress}
          accessibilityLabel="Notifications"
        >
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <G clipPath="url(#clip0_2061_1116)">
              <Path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="black"
                strokeWidth={2}
              />
              <Path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="black"
                strokeWidth={2}
              />
            </G>
            <Defs>
              <ClipPath id="clip0_2061_1116">
                <Rect width={24} height={24} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>
        {hasNotifications && <View style={styles.notificationDot} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textContainer: {
    flexDirection: "column",
  },
  companyName: {
    color: "#1E293B", // slate-800
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  welcomeText: {
    color: "#64748B", // slate-500
    fontSize: 14,
    lineHeight: 21,
  },
  notificationContainer: {
    position: "relative",
  },
  notificationButton: {
    width: 40,
    height: 40,
    backgroundColor: "#F8FAFC", // slate-50
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  notificationDot: {
    width: 8,
    height: 8,
    backgroundColor: "#1FAF38", // green
    borderRadius: 4,
    position: "absolute",
    right: 8,
    top: 8,
  },
});

export default Header;
