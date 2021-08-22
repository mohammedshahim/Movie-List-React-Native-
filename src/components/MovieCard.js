import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import COLOR from "../constants/Colors";
import FONTS from "../constants/Fonts";
import IMAGES from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = () => {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <View style={style.imdbContainer}>
          <Image
            source={IMAGES.IMDB}
            resizeMode="cover"
            style={style.imdbImage}
          />
          <Text style={style.imdbRating}>9.4</Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={25}
            color={liked ? COLOR.HEART : COLOR.WHITE}
            style={{ position: "absolute", bottom: 10, left: 10 }}
          />
        </TouchableNativeFeedback>
      </View>
      <View>
        <Text style={style.movieTitle} numberOfLines={3}>
          URI - Surgical Strike
        </Text>
        <View style={style.movieSubTitleContainer}>
          <Text style={style.movieSubTitle}>Hindi | (U/A)</Text>
          <View style={style.rowAndCenter}>
            <Ionicons
              name="heart"
              size={17}
              color={COLOR.HEART}
              style={{ marginRight: 5 }}
            />
            <Text style={style.movieSubTitle}>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLOR.ACTIVE,
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRABOLD,
    color: COLOR.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieSubTitle: {
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  rowAndCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: COLOR.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: COLOR.HEART,
    fontFamily: FONTS.EXTRABOLD,
  },
});

export default MovieCard;
