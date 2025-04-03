
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "../ui/ProgressBar";

interface ActiveGroupCardProps {
  title: string;
  duration: string;
  location: string;
  memberCount: number;
  totalMembers: number;
  monthlyAmount: string;
  isOpen?: boolean;
  onJoinNow?: () => void;
}

const ActiveGroupCard: React.FC<ActiveGroupCardProps> = ({
  title,
  duration,
  location,
  memberCount,
  totalMembers,
  monthlyAmount,
  isOpen = true,
  onJoinNow,
}) => {
  const progressPercentage = (memberCount / totalMembers) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Duration: {duration}</Text>
          <Text style={styles.subtitle}>Location: {location}</Text>
        </View>
        {isOpen && (
          <View style={styles.openBadge}>
            <Text style={styles.openBadgeText}>Open</Text>
          </View>
        )}
      </View>
      <View style={styles.content}>
        <View style={styles.membersRow}>
          <Text style={styles.membersLabel}>Members</Text>
          <Text style={styles.membersCount}>
            {memberCount}/{totalMembers}
          </Text>
        </View>
        <ProgressBar progress={progressPercentage} />
        <View style={styles.joinRow}>
          <Text style={styles.monthlyAmount}>{monthlyAmount}/month</Text>
          <TouchableOpacity style={styles.joinButton} onPress={onJoinNow}>
            <Text style={styles.joinButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: "column",
    gap: 4,
  },
  title: {
    color: "#1E293B", // slate-800
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  subtitle: {
    color: "#64748B", // slate-500
    fontSize: 14,
    lineHeight: 21,
  },
  openBadge: {
    backgroundColor: "rgba(31, 175, 56, 0.10)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  openBadgeText: {
    color: "#1FAF38", // green
    fontSize: 12,
    lineHeight: 18,
  },
  content: {
    flexDirection: "column",
    gap: 8,
  },
  membersRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  membersLabel: {
    color: "#64748B", // slate-500
    fontSize: 14,
    lineHeight: 21,
  },
  membersCount: {
    color: "#1E293B", // slate-800
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 21,
  },
  joinRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthlyAmount: {
    color: "#1E293B", // slate-800
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 24,
  },
  joinButton: {
    backgroundColor: "#4F46E5", // indigo-600
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  joinButtonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 21,
  },
});

export default ActiveGroupCard;
