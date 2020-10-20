import {
  Dimensions,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle
} from "react-native"
import { color as colour } from "./color"
import color from 'color'
import Config from "react-native-config"
//import Instance from "../../instance"
import { spacing } from "./spacing"
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs"

// Constants (not exported)
const customFormElMaxHeight = 120 // For e.g., the `<DatePicker/>` element
const selectInputMaxHeight = 100 // On Android the height is 80, iOS is closer to 300, set max height to allow default on Android and limit on iOS
const labelColor = "#848484" // for our custom form elements, what color should the labels be?
const helperTextColor = color(labelColor).lighten(0.2).hex() // we'll take the label color and lighten it slightly for the helper text

// Export the instance logo
//export const LOGO_IMG = Instance.logo

// Root and Body styling (use like <html><body></body></html>) for consistent spacing throughout screens
export const ROOT: ViewStyle = {
  backgroundColor: colour.palette.white
}
export const ROOT_LIST: ViewStyle = {
  ...ROOT,
  /* FlatList bug fix: https://github.com/facebook/react-native/issues/6002#issuecomment-366435492 */
  height: Dimensions.get('window').height
}
export const BODY: ViewStyle = {
  padding: spacing[4]
}

// Logo and Header styling
export const LOGO_HEADER: ViewStyle = {
  justifyContent: "center",
  backgroundColor: Config.BRAND_DARK
}
export const HEADER: ViewStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  height: 80,
  backgroundColor: Config.BRAND_DARK
}

// Modal header
export const MODAL_HEADER: ViewStyle = {
  ...HEADER,
  backgroundColor: Config.BRAND_PRIMARY,
  shadowColor: "transparent",
  borderBottomColor: color(Config.BRAND_PRIMARY)
    .darken(0.4)
    .hex()
}

// header left/body/right content styling
export const HEADER_LEFT: ViewStyle = {
  flex: 1
}
export const HEADER_BODY: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1
}
export const HEADER_RIGHT: ViewStyle = {
  flex: 1
}

export const HEADER_ICON: TextStyle = {
  color: colour.palette.offWhite
}

// Custom form styling
export const FORM: ViewStyle = {
  paddingVertical: spacing[4]
}
export const FORM_BUTTON: ViewStyle = {
  marginTop: 15
}
export const FORM_PICKER = {
  //backgroundColor: colour.palette.light,
  borderRadius: 10,
  marginBottom: 10
}
export const FROM_PICKER_SELECT = {
  maxHeight: selectInputMaxHeight
}
export const FORM_PICKER_ITEM = {
  maxHeight: FROM_PICKER_SELECT.maxHeight
}

// Avatar settings
export const AVATAR: ViewStyle = {
  backgroundColor: colour.palette.offWhite,
  padding: 0,
  borderRadius: 100,
  borderColor: Config.BRAND_PRIMARY,
  borderStyle: "solid",
  borderWidth: 2,
  width: 42,
  height: 42,
  alignItems: "center",
  overflow: "hidden"
}
export const AVATAR_IMAGE: ImageStyle = {
  width: 40,
  height: 40
}

// Badge text
export const BADGE_TEXT: TextStyle = {
  color: colour.palette.white,
  fontSize: 10,
  fontWeight: "700",
  padding: 5
}

// List item styling for `<ListItem/>` component
export const LIST_ITEM_ICON: ViewStyle = {
  flex: 0.5
}
export const LIST_ITEM_BODY: ViewStyle = {
  flex: 1
}
export const LIST_ITEM_ACTIONS: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end"
}
export const LIST_ITEM_ACTION: ViewStyle = {
  flex: 1,
  marginLeft: 5
}

// Custom alert style
export const ALERT: ViewStyle = {
  alignItems: "center",
  //backgroundColor: colour.warning,
  flexDirection: "row",
  marginHorizontal: 15,
  padding: 10
}
export const ALERT_TEXT: TextStyle = {
  color: colour.palette.white,
  fontWeight: "500",
  flexWrap: "wrap",
  paddingHorizontal: 15
}
export const ALERT_ICON: TextStyle = {
  color: colour.palette.white
}

// Tab bar settings
// Info: https://reactnavigation.org/docs/bottom-tab-navigator/
export const tabBarText = StyleSheet.create({
  active: {
    color: Config.BRAND_PRIMARY
  },
  inactive: {
    color: colour.palette.lightGrey
  }
})
export const TAB_BAR_OPTIONS: BottomTabBarOptions = {
  activeTintColor: tabBarText.active.color,
  activeBackgroundColor: colour.palette.white,
  inactiveTintColor: tabBarText.inactive.color,
  inactiveBackgroundColor: colour.palette.offWhite
}

// Divider/horizontal rule
export const DIVIDER: ViewStyle = {
  height: 1,
  marginVertical: 4,
  marginHorizontal: 2,
  backgroundColor: colour.palette.black
}
export const DIVIDER_LIGHT: ViewStyle = {
  ...DIVIDER,
  backgroundColor: colour.palette.offWhite
}

/*
 * Custom input styles so we can style non-text inputs to match our default forms!
 */
const inputInner = {
  //borderBottomColor: colour.palette.light,
  borderBottomWidth: 1,
  paddingBottom: 10,
  paddingRight: 15
}
export const customFormEl = StyleSheet.create({
  errorText: {
    color: colour.error,
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 2,
    paddingTop: 2
  },
  helperText: {
    color: helperTextColor,
    fontSize: 12,
    paddingLeft: 2,
    paddingTop: 2
  },
  image: {
    alignItems: "center",
    padding: 10
  },
  inner: {
    ...inputInner
  },
  innerDateField: {
    ...inputInner,
    height: customFormElMaxHeight + 25
  },
  innerDateFieldError: {
    ...inputInner,
    borderBottomColor: colour.error
  },
  innerError: {
    ...inputInner,
    borderBottomColor: colour.error
  },
  input: {
    flex: 1,
    maxHeight: customFormElMaxHeight
  },
  label: {
    color: labelColor,
    fontSize: 15,
    marginBottom: 10
  },
  repeaterField: {
    marginBottom: 25,
    marginLeft: 15
  },
  replicateLabel: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  wrapper: {
    flexDirection: 'column',
    paddingLeft: 15,
    paddingVertical: 15
  }
})

// Safe area style
export const SAFE_AREA: ViewStyle = {
  height: 1,
  backgroundColor: colour.palette.black,
  paddingTop: 0
}

/*
 * Custom card styling
 */
export const cardStyle = StyleSheet.create({
  body: {
    // ...
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerActions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  headerLabel: {
    color: labelColor,
    fontSize: 15,
    marginBottom: 0
  }
})
