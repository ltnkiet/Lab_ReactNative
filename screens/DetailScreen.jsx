import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchMovieDetail } from "../api/moviesData";
import { useRoute } from '@react-navigation/native'

export default function DetailScreen() {

  const [movieDetail, setMovieDetail] = useState({});
  const { params: data } = useRoute();

  useEffect(() => {
    getDetailMovies(data.imdbID);
  }, [data]);

  const getDetailMovies = async (id) => {
    try {
      const data = await fetchMovieDetail(id);
      if (data.Response === "True") {
        setMovieDetail(data);
      } else {
        console.error("API response is not True");
      }
    } catch (error) {
      console.error("Error fetching movie detail: ", error);
    }
  }

  return (
    <View className="flex-1 flex-row p-10 pt-10">
      {movieDetail ? (
        <>
          <View className="flex flex-col gap-5">
            <Image source={{ uri: movieDetail?.Poster }} className="w-44 h-64 object-cover" />
            <Text>IMDB: {movieDetail?.imdbRating}</Text>
            <Text>Meta: {movieDetail?.Metascore}</Text>
          </View>
          <View className="flex flex-col gap-5">
            <Text className="text-2xl">{movieDetail?.Title}</Text>
            <Text>{movieDetail?.Genre}</Text>
            <Text>{movieDetail?.Released}</Text>
            <Text>{movieDetail?.Plot}</Text>
            <Text>{movieDetail?.Director}</Text>
            <Text>{movieDetail?.Writer}</Text>
            <Text>{movieDetail?.Actors}</Text>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
