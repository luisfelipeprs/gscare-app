import { CardProfileEmployee } from '@components/CardProfileEmployee';
import { CardProfilePatient } from '@components/CardProfilePatient';
import { PageHeader } from '@components/PageHeader';
import { TabEmployee } from '@components/TabEmployee';
import { TabPatient } from '@components/TabPaciente';
import React from 'react';
import { Text, View } from 'react-native';

export const ProfileEmployee = () => {

  return (
    <View className='flex-1'>
      <PageHeader title='Perfil do Funcionário' />
      <View className='p-4'>
        <CardProfileEmployee rating={5} />
      </View>
      <View className='p-4'>
        <Text className='text-gray-500'>Profissional de home care com 10 anos de experiência, dedicado ao cuidado compassivo e de alta qualidade aos pacientes.</Text>
      </View>
      <View className='m-3'>
        <TabEmployee />
      </View>
    </View>
  );
};