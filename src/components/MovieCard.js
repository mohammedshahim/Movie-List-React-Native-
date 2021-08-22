import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import COLOR from "../constants/Colors";
import FONTS from "../constants/Fonts";
import IMAGES from "../constants/Images";
import { Ionicons } from "@expo/vector-icons";
import { getLanguage, getPoster } from "../services/MovieService";

const MovieCard = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  size,
  heartLess,
}) => {
  const [liked, setLiked] = useState(false);
  const [voteCountValue, setVoteCountValue] = useState(voteCount);
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ImageBackground
        style={{ ...style.container, width: 230 * size, height: 340 * size }}
        imageStyle={{ borderRadius: 12 }}
        source={{ uri: getPoster(poster) }}
      >
        <View style={{ ...style.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={IMAGES.IMDB}
            resizeMode="cover"
            style={{ ...style.imdbImage, height: 20 * size, width: 50 * size }}
          />
          <Text
            style={{
              ...style.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}
          >
            {voteAverage}
          </Text>
        </View>
        {!heartLess ? (
          <TouchableNativeFeedback
            onPress={() => {
              setLiked(!liked);
              setVoteCountValue(
                liked ? voteCountValue - 1 : voteCountValue + 1
              );
            }}
          >
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={25 * size}
              color={liked ? COLOR.HEART : COLOR.WHITE}
              style={{ position: "absolute", bottom: 10, left: 10 }}
            />
          </TouchableNativeFeedback>
        ) : null}
      </ImageBackground>
      <View>
        <Text
          style={{ ...style.movieTitle, width: 230 * size }}
          numberOfLines={2}
        >
          {title}
        </Text>
        <View style={style.movieSubTitleContainer}>
          <Text style={style.movieSubTitle}>
            {getLanguage(language).english_name}
          </Text>
          <View style={style.rowAndCenter}>
            <Ionicons
              name="heart"
              size={17 * size}
              color={COLOR.HEART}
              style={{ marginRight: 5 }}
            />
            <Text style={style.movieSubTitle}>{voteCountValue}</Text>
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

MovieCard.defaultProps = {
  size: 1,
  heartLess: true,
};

export default MovieCard;
