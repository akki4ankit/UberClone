import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import fontStyles from "../Common/fontStyles";

const cardIcons = [
  { icon: "alert-circle-outline", color: "#a3a3a3" },
  { icon: "heart-broken-outline", color: "#BFD730" },
  { icon: "clock-outline", color: "#3E8E9E" },
  { icon: "check-circle-outline", color: "#3AAFA9" },
  { icon: "alert-circle-outline", color: "#D9534F" },
  { icon: "alert-circle-outline", color: "#D9534F" },
  { icon: "alert-circle-outline", color: "#D9534F" }
];

const Dashboard = () => {
  const cards = [
    {
      id: 1,
      count: 397,
      title: "Past Due Not Shipped",
      color: "#a3a3a3",
      detailColor: "#9E9E9E",
    },
    {
      id: 2,
      count: 24,
      title: "At Risk",
      color: "#b8bd49",
      detailColor: "#BFD730",
    },
    {
      id: 3,
      count: 113,
      title: "Tracking On Time",
      color: "#2a647a",
      detailColor: "#2a647a",
    },
    {
      id: 4,
      count: 39,
      title: "Delivered",
      color: "#3a9d98",
      detailColor: "#3a9d98",
    },
    {
      id: 5,
      count: 63,
      title: "Past Due Not Delivered",
      color: "#a22137",
      detailColor: "#a22137",
    },
    {
      id: 6,
      count: 63,
      title: "Past Due Not Delivered",
      color: "#2a647a",
      detailColor: "#2a647a",
    },
    {
      id: 7,
      count: 63,
      title: "Past Due Not Delivered",
      color: "#b8bd49",
      detailColor: "#BFD730",
    },
  ];

  const renderCard = ({ item, index }) => (
    <View key={item.id} style={[styles.card, { borderColor: item.color }]}>
      {/* Icon + Count block */}
      <View style={[styles.cardLeft, { backgroundColor: item.color + '22' }]}>
        <MaterialIcons
          name={cardIcons[index].icon}
          size={28}
          color={item.color}
          style={{ marginBottom: hp("0.2%") }}
        />
        <Text style={[styles.count, { color: item.color }]}>{item.count}</Text>
      </View>
      {/* Content */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.viewDetailsBtn}>
          <Text style={[styles.viewDetailsText, { color: item.detailColor }]}>View Details</Text>
          <Feather name="arrow-right-circle" size={18} color={item.detailColor} style={styles.cardArrowIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={28} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Uber Freight</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={{ marginRight: wp("3%") }}>
            <Feather name="filter" size={23} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-circle" size={23} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Nav */}
      <View style={styles.dateNav}>
        <View style={styles.dateArrowBlock}>
          <Feather name="chevron-left" size={20} color="#222" />
          <Text style={styles.dateNavText}>Previous day</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.todayText}>Today</Text>
          <Text style={styles.dateText}>08/03/23</Text>
        </View>
        <View style={styles.dateArrowBlock}>
          <Text style={styles.dateNavText}>Next day</Text>
          <Feather name="chevron-right" size={20} color="#222" />
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.scroll}
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: hp("7.5%"),
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: wp("3%"),
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: wp("6.4%"),
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    ...fontStyles.Montserrat_Medium
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("1.2%"),
    backgroundColor: "#fff",
    borderBottomColor: "#EDEDED",
    borderBottomWidth: 1,
    width:wp('95%'),
    alignSelf:"center"
  },
  dateArrowBlock: {
    flexDirection: "row",
    alignItems: "center",
  },
  dateNavText: {
    color: "#222",
    fontSize: wp("3%"),
    ...fontStyles.Montserrat_Regular
  },
  todayText: {
    fontWeight: "500",
    fontSize: wp("3.3%"),
    color: "#222",
    marginBottom: 0,
    ...fontStyles.Montserrat_Medium
  },
  dateText: {
    fontSize: wp("3.3%"),
    color: "#000",
    marginTop: hp("0.1%"),
    ...fontStyles.Montserrat_SemiBold
  },

  scroll: {
    padding: wp("4%"),
    paddingTop: hp("1.8%"),
    paddingBottom: hp("0.2%"),
  },
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1.2,
    marginBottom: hp("2%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 12,
    minHeight: hp("9.5%"),
    overflow: "hidden",
    opacity:4
  },
  cardLeft: {
    padding: wp("4%"),
    alignItems: "center",
    justifyContent: "center",
    minWidth: wp("22%"),
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  count: {
    fontWeight: "500",
    fontSize: wp("8%"),
    marginTop: hp("0.2%"),
    ...fontStyles.Montserrat_Regular
  },
  cardContent: {
    flex: 1,
    padding: wp("3%"),
    justifyContent: "center",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: wp("4%"),
    color: "#777",
    marginBottom: hp("0.7%"),
    ...fontStyles.Montserrat_SemiBold
  },
  viewDetailsBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  viewDetailsText: {
    fontSize: wp("3.1%"),
    fontWeight: "500",
    marginRight: 3,
    ...fontStyles.Montserrat_Medium
  },
  cardArrowIcon: {
    marginLeft: 3,
  },
});

export default Dashboard;
