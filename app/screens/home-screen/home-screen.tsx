import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, Alert } from "react-native"
import { Screen, Text } from "../../components"
import { Header } from "../../components"
//import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"
//import { StyleSheet} from 'react-native';
import { Image, View, Dimensions } from 'react-native';
import { spacing } from "../../theme";

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

export function MyAlert(astring) {
  Alert.alert(astring)
}
{/* <Image  source={require('./background.jpg')} style={{ position:"absolute",
                                                              left:0,
                                                              top:65,
                                                              width:windowWidth,
                                                              height:mywindowHeight,
                                                              opacity:0.55}} >*/}
export const HomeScreen = observer(function HomeScreen() {
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
        <Header
          headerTx="homeScreen.headertitle"
          style={HEADER}
          titleStyle={HEADER_TITLE}
          leftIcon={"menu"}
          onLeftPress={()=> {MyAlert("now is the time for all good people to come to the aid of their country")}}
        />
        <Image  source={require('./background.jpg')} style={{ 
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
