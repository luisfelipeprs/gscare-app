import { useNavigation } from '@react-navigation/native'
import { VStack, Text, Center, Heading, ScrollView, Image } from 'native-base'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/backgroundLogin/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { View } from 'react-native'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} px={10} alignContent="space-around">

        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="cover"
          h={'100%'}
          position="absolute"
          blurRadius={12}
        />

        <Center my={24}>
          <LogoSvg width={200} height={50}/>

          {/* <Text color="orange.300" fontSize="md" fontWeight="medium">
            Cuide com segurança
          </Text> */}
        </Center>
        <Center mt={6}>

          <View className='bg-black w-full'>
           <Text className='text-white text-bold text-xl'>Funcionaaaaaaaaaaaaaaaaaaaa</Text>
          </View>

          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading">
            Acesse sua conta
          </Heading>
          <Input
            placeholder='Email'
            value=''
          />

          <Input
          placeholder='Senha'
          />

          <Button title="Acessar" />
        </Center>

        <Center mt={32}>
          {/* <Text color="white" mb={3} fontFamily="body"  fontSize="md" fontWeight="medium">
            Ainda não tem acesso?
          </Text> */}

          <Button 
            title="Crie sua conta!" 
            variant="outline" 
            onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}