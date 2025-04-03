
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProgressBar from "../ui/ProgressBar";

interface GroupCardProps {
  title: string;
  duration: string;
  memberCount: number;
  totalMembers: number;
  monthlyAmount: string;
  nextPayout: string;
  onViewDetails?: () => void;
}

const GroupCard: React.FC<GroupCardProps> = ({
  title,
  duration,
  memberCount,
  totalMembers,
  monthlyAmount,
  nextPayout,
  onViewDetails,
}) => {
  const progressPercentage = (memberCount / totalMembers) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Duration: {duration}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton} onPress={onViewDetails}>
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.membersRow}>
          <Text style={styles.membersLabel}>Members</Text>
          <Text style={styles.membersCount}>
            {memberCount}/{totalMembers}
          </Text>
        </View>
        <ProgressBar progress={progressPercentage} />
        <View style={styles.payoutRow}>
          <Text style={styles.monthlyAmount}>{monthlyAmount}/month</Text>
          <Text style={styles.nextPayout}>Next Payout: {nextPayout}</Text>
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
  viewButton: {
    backgroundColor: "#4F46E5", // indigo-600
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  viewButtonText: {
    color: "white",
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
  payoutRow: {
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
  nextPayout: {
    color: "#64748B", // slate-500
    fontSize: 14,
    lineHeight: 21,
  },
});

export default GroupCard;
