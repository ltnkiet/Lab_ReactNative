import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export class BMICalculator extends Component {
  constructor(props) {
    super(props);
    this.state = { weight: 0, height: 0, bmi: 0 };
  }
  compote() {
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
    this.setState({ bmi: weight / Math.pow(height / 100, 2) });
  }

  render() {
    return (
      <View className="flex-1 flex-col items-center justify-center p-8">
        <View className="w-full">
          <Text className="text-lg mb-3">Weight(KG)</Text>
          <TextInput
            value={this.state.weight}
            onChangeText={(weight) => this.setState({ weight })}
            className="border-2 w-full border-gray-500 p-4 text-lg"
            keyboardType="numeric"
          />
        </View>
        <View className="w-full">
          <Text className="text-lg mb-3">Height(cm)</Text>
          <TextInput
            value={this.state.height}
            onChangeText={(height) => this.setState({ height })}
            className="border-2 border-gray-500 p-4 text-lg"
            keyboardType="numeric"
          />
        </View>
        <View className="py-4">
          <Text className="text-xl">BMI: {this.state.bmi}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.compote()}
            className="border-2 border-gray-800 p-5 bg-blue-400">
            <Text className="text-3xl font-semibold">Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BMICalculator;
