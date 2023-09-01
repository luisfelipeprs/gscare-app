import { useTheme } from "native-base"
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/home.svg"
import ClockSvg from "@assets/clock.svg"
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

type AppRoutes = {
  home: undefined;
  attendanceCalendar: undefined;
  clientsPathologies: undefined;
  complaintsAndNotices: undefined;
  dailyReport: undefined;
  emergencyPhones: undefined;
  foodAndMedicineAllergies: undefined;
  patientsMedicalDocuments: undefined;
  profile: undefined;
  settings: undefined;
  supplyMonitoring: undefined;
  medicationSchedules: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes } = useTheme()

  const iconSize = sizes[7]

  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen 
        name="home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="attendanceCalendar" 
        component={AttendanceCalendar} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="clientsPathologies" 
        component={ClientsPathologies} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="complaintsAndNotices" 
        component={ComplaintsAndNotices} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="dailyReport" 
        component={DailyReport} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="emergencyPhones" 
        component={EmergencyPhones} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="foodAndMedicineAllergies" 
        component={FoodAndMedicineAllergies} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="patientsMedicalDocuments" 
        component={PatientsMedicalDocuments} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="settings" 
        component={Settings} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="supplyMonitoring" 
        component={SupplyMonitoring} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
      <Screen 
        name="medicationSchedules" 
        component={MedicationSchedules} 
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize}/>
          )
        }}
      />
    </Navigator>
  )
}