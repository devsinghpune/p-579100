
import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Shiv Netra Finance</Text>
          <Text style={styles.headerSubtitle}>Welcome back, Rahul</Text>
        </View>
        
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Groups</Text>
            {/* Group cards will go here */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Premium Savings</Text>
              <Text style={styles.cardSubtitle}>Duration: 12 months</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Active Groups</Text>
            {/* Filter buttons will go here */}
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Monthly Savings Fund</Text>
              <Text style={styles.cardSubtitle}>Duration: 12 months</Text>
            </View>
          </View>
        </ScrollView>
        
        <View style={styles.bottomNav}>
          <Text style={[styles.navItem, styles.activeNavItem]}>Home</Text>
          <Text style={styles.navItem}>Groups</Text>
          <Text style={styles.navItem}>Payments</Text>
          <Text style={styles.navItem}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748B",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E293B",
    marginBottom: 12,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E293B",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#64748B",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  navItem: {
    fontSize: 14,
    color: "#64748B",
  },
  activeNavItem: {
    color: "#4F46E5",
  },
});

export default HomeScreen;
