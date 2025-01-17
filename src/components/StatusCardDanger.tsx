import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { CardRemedy } from "./CardRemedy";
import { RegistrationActivitiesHealth } from "./RegistrationActivitiesHealth";
import { TimeCard } from "./TimeCard";
import { AntDesign } from '@expo/vector-icons';
import { CardDanger } from "./CardDanger";
import { MaterialIcons } from '@expo/vector-icons';

export function StatusCardDanger() {
  const [showCards, setShowCards] = useState(true);
  const [arrowRotation, setArrowRotation] = useState(0);

  const toggleShowCards = () => {
    setShowCards(!showCards);
    setArrowRotation(arrowRotation === 0 ? 270 : 0); // Rotate arrow 90 degrees if it's not rotated, otherwise rotate it back to 0
  };

  return (
    <View className="flex-1">
      <View className="flex-row mt-10 mb-5 ml-10">
        <TouchableOpacity
          className="flex-row items-center p-2 mr-[120px]"
          onPress={toggleShowCards}
        >
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black"
            style={{ transform: [{ rotate: `${arrowRotation}deg` }], marginRight: 7 }}
          />
          <Text className="mr-2 text-base font-bold">Intercorrências</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity className="bg-blue-400 rounded-full w-9 h-9 m-auto "/*onPress={toggleShowCards}*/>
            <View className="m-auto">
              <MaterialIcons name="add" size={22} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {showCards && (
        <View className="pl-2">
          <CardDanger />
        </View>
      )}
    </View>
  );
}
