import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text } from "../../components"
import { AppHeader } from "../../components"
//import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
//import { StyleSheet} from 'react-native';
import { Image, View, Dimensions } from 'react-native';
import { spacing } from "../../theme";

import { ParamListBase } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const mywindowHeight = windowHeight * .75;

const BOLD: TextStyle = { fontWeight: "bold" }
const FULL: ViewStyle = { flex: 1, backgroundColor: "black" }

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export interface ProjectsScreenProps {
  navigation: DrawerNavigationProp<ParamListBase>
}

export interface HomeScreenProps {
  navigation: DrawerNavigationProp<ParamListBase>
}

//export const HomeScreen = observer(function HomeScreen() {
  export const HomeScreen: React.FunctionComponent<HomeScreenProps> = observer((props) => {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  //const navigation = useNavigation()
  //const goBack = () => navigation.goBack()
  return (
    <View style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <AppHeader  {...props} />
        <Image  source={require('./background.jpg')} style={{ position:"absolute",
                                                              left:0,
                                                              top:65,
                                                              width:windowWidth,
                                                              height:mywindowHeight,
                                                              opacity:0.55}} >
        </Image>
      </Screen>
    </View>
  )
})
