import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { UserIcon } from './UserIcon';


interface IProps {
  url?: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number; // Adicionado para representar a classificação do usuário
}

export const CardPeopleCare = ({ url, name, specialty, experience, rating }: IProps) => {
  // Função para renderizar as estrelas cheias e vazias baseadas na classificação
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? 'star' : 'star-o'} // 'star-o' é o ícone de estrela vazia
          size={16}
          color={i <= rating ? 'orange' : 'grey'} // Estrelas vazias em cinza
        />
      );
    }
    return stars;
  };

  return (
    <View className="bg-[#f7fafc] p-4 rounded-3xl shadow-md flex-row items-center justify-between">
      <View className="w-14 h-14">
        <UserIcon url={url} name={name} />
      </View>
      <View className="flex-1 ml-4">
        <Text className="text-lg font-bold">{name}</Text>
        <Text>{specialty}</Text>
        <Text>{experience}</Text>
        <View className="flex-row">
          {renderStars()}
        </View>
      </View>
      <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-2xl w-20 items-center">
        <Text className="text-white font-bold">Chat</Text>
      </TouchableOpacity>
    </View>
  );
};
