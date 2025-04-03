
import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import Header from "../components/layout/Header";
import BottomNavigation from "../components/layout/BottomNavigation";
import GroupCard from "../components/groups/GroupCard";
import ActiveGroupCard from "../components/groups/ActiveGroupCard";
import FilterButton from "../components/groups/FilterButton";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen: React.FC = () => {
  // Navigation items with SVG icons
  const navigationItems = [
    {
      name: "Home",
      icon: '<svg id="I2017:4154;2017:4093" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" stroke-width="2"/></svg>',
      isActive: true,
    },
    {
      name: "Groups",
      icon: '<svg id="I2017:4154;2017:4096" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="black" stroke-width="2"/><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="black" stroke-width="2"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="black" stroke-width="2"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="black" stroke-width="2"/></svg>',
    },
    {
      name: "Payments",
      icon: '<svg id="I2017:4154;2017:4102" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="black" stroke-width="2"/><path d="M1 10H23" stroke="black" stroke-width="2"/></svg>',
    },
    {
      name: "Profile",
      icon: '<svg id="I2017:4154;2017:4106" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2"/><path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2"/></svg>',
    },
  ];

  // Handler functions
  const handleViewDetails = () => {
    console.log("View details clicked");
  };

  const handleJoinNow = () => {
    console.log("Join now clicked");
  };

  const handleFilterClick = (filterName: string) => {
    console.log(`Filter clicked: ${filterName}`);
  };

  const handleNotificationPress = () => {
    console.log("Notification pressed");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Header */}
        <Header
          userName="Rahul"
          companyName="Shiv Netra Finance"
          hasNotifications={true}
          onNotificationPress={handleNotificationPress}
        />

        {/* Main Content */}
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
          {/* My Groups Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Groups</Text>
            <View style={styles.cardContainer}>
              <GroupCard
                title="Premium Savings"
                duration="12 months"
                memberCount={20}
                totalMembers={20}
                monthlyAmount="₹30,000"
                nextPayout="₹35,000"
                onViewDetails={handleViewDetails}
              />
              <GroupCard
                title="Quick Growth Fund"
                duration="6 months"
                memberCount={10}
                totalMembers={10}
                monthlyAmount="₹15,000"
                nextPayout="₹17,000"
                onViewDetails={handleViewDetails}
              />
            </View>
          </View>

          {/* Active Groups Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Active Groups</Text>

            {/* Filters */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.filtersContainer}
              contentContainerStyle={styles.filters}
            >
              <FilterButton
                label="All Locations"
                onPress={() => handleFilterClick("locations")}
              />
              <FilterButton
                label="All Amounts"
                onPress={() => handleFilterClick("amounts")}
              />
              <FilterButton
                label="All Durations"
                onPress={() => handleFilterClick("durations")}
              />
            </ScrollView>

            {/* Active Group Cards */}
            <View style={styles.cardContainer}>
              <ActiveGroupCard
                title="Monthly Savings Fund"
                duration="12 months"
                location="Mumbai"
                memberCount={12}
                totalMembers={20}
                monthlyAmount="₹25,000"
                isOpen={true}
                onJoinNow={handleJoinNow}
              />
            </View>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <BottomNavigation items={navigationItems} />
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
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 24,
    gap: 24,
  },
  section: {
    gap: 16,
  },
  sectionTitle: {
    color: "#1E293B", // slate-800
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 27,
  },
  cardContainer: {
    gap: 16,
  },
  filtersContainer: {
    marginBottom: 16,
  },
  filters: {
    flexDirection: "row",
    gap: 12,
    paddingRight: 16,
  },
});

export default HomeScreen;
