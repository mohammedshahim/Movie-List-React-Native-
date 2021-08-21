import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import GenerCard from "../components/GenerCard";
import ItemSeperator from "../components/ItemSeperator";
import COLORS from "../constants/Colors";
import FONTS from "../constants/Fonts";

const Geners = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGener, setActiveGener] = useState("All");
  return (
    <ScrollView style={styles.container}>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={COLORS.BASIC_BACKGROUND}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
      <View style={styles.generListContainer}>
        <FlatList
          data={Geners}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          ListHeaderComponent={() => <ItemSeperator width={20} />}
          ListFooterComponent={() => <ItemSeperator width={20} />}
          renderItem={({ item }) => (
            <GenerCard
              generName={item}
              active={item === activeGener ? true : false}
              onPress={setActiveGener}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.REGULAR,
  },
  headerSubTitle: {
    fontSize: 13,
    color: COLORS.ACTIVE,
    fontFamily: FONTS.BOLD,
  },
  generListContainer: {
    paddingVertical: 10,
  },
});

export default HomeScreen;
