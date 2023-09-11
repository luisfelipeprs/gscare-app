import { Platform } from 'react-native'
import { Icon, useTheme } from "native-base"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg"
import ProfileSvg from "@assets/profile.svg"
import CalendarSvg from "@assets/calendar.svg"

import { Home } from "@screens/Home";
import { AttendanceCalendar } from "@screens/AttendanceCalendar";
import { ClientsPathologies } from "@screens/ClientsPathologies";
import { ComplaintsAndNotices } from "@screens/ComplaintsAndNotices";
import { DailyReport } from "@screens/DailyReport";
import { EmergencyPhones } from "@screens/EmergencyPhones";
import { FoodAndMedicineAllergies } from "@screens/FoodAndMedicineAllergies";
import { PatientsMedicalDocuments } from "@screens/PatientsMedicalDocuments";
import { Profile } from "@screens/Profile";
import { Settings } from "@screens/Settings";
import { SupplyMonitoring } from "@screens/SupplyMonitoring";
import { MedicationSchedules } from "@screens/MedicationSchedules";
import { PatientCalendar } from '@screens/PatientCalendar';
import { MaterialIcons } from '@expo/vector-icons';

export type AppRoutes = {
  // ? rotas que ficaram no rodape
  home: undefined;
  patientCalendar: undefined; 
  settings: undefined;
  // ? rotas que ficaram nas divs da home
  attendanceCalendar: undefined;
  clientsPathologies: undefined;
  dailyReport: undefined;
  emergencyPhones: undefined;
  supplyMonitoring: undefined;
  medicationSchedules: undefined;
  // ! essas rotas abaixo só seram usadas na segunda versa
  patientsMedicalDocuments: undefined;
  foodAndMedicineAllergies: undefined;
  complaintsAndNotices: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = sizes[7]

  return (
    <Navigator screenOptions={{ 
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.blue[600],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            // <HomeSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="home" size={6} m={2} color="#fff"/>
          )
        }}
      />
      <Screen 
        name="patientCalendar" 
        component={PatientCalendar} 
        options={{
          tabBarIcon: ({ color }) => (
            // <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="date-range" size={6} m={2} color="#fff"/>
          )
        }}
      />
      <Screen 
        name="settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color }) => (
            // <ProfileSvg fill={color} width={iconSize} height={iconSize}/>
            <Icon as={MaterialIcons} name="menu" size={6} m={2} color="#fff"/>
          )
        }}
      />
      <Screen 
        name="medicationSchedules" 
        component={MedicationSchedules} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="dailyReport" 
        component={DailyReport} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="foodAndMedicineAllergies" 
        component={FoodAndMedicineAllergies} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="attendanceCalendar" 
        component={AttendanceCalendar} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="clientsPathologies" 
        component={ClientsPathologies} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="complaintsAndNotices" 
        component={ComplaintsAndNotices} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="emergencyPhones" 
        component={EmergencyPhones} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="patientsMedicalDocuments" 
        component={PatientsMedicalDocuments} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="profile" 
        component={Profile} 
        options={{ tabBarButton: () => null }}
      />
      <Screen 
        name="supplyMonitoring" 
        component={SupplyMonitoring} 
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  )
}