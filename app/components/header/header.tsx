import * as React from "react"
import { View } from "react-native"
import { Header, Button, Icon, Left } from "native-base"
import { ParamListBase } from "@react-navigation/native"
import { DrawerNavigationProp } from "@react-navigation/drawer"
import {
  HEADER,
  HEADER_BODY,
  HEADER_RIGHT, HEADER_LEFT, HEADER_ICON
} from "../../theme/common"

export interface HeaderProps {
  navigation: DrawerNavigationProp<ParamListBase>
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function AppHeader(props: HeaderProps) {
  return (
    <View>
      <Header style={HEADER}>
        <Left style={HEADER_LEFT}>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon style={HEADER_ICON} name="menu" />
          </Button>
        </Left>
      </Header>
    </View>
  )
}
