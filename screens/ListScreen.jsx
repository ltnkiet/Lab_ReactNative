import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchListMovies } from "../api/moviesData";
import { useNavigation } from "@react-navigation/native";


export default function ListScreen() {
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getListMovies() {
      try {
        const data = await fetchListMovies();
        if (data.Response === "True") {
          const movieList = data.Search;
          setMovies(movieList); 
        } else {
          console.error("API response is not True");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    getListMovies();
  }, []);

  return (
    <View className="h-full w-full flex-1 flex-col items-start">
      <ScrollView>
        {movies.map((data, index) => (
          <View key={index}  className="flex flex-row py-3 gap-2">
            <Image source={{ uri: data.Poster }} className="w-44 h-64 object-cover"/>
            <Text onPress={() => navigation.push("DetailScreen", data)} className="font-semibold">{data.Title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
