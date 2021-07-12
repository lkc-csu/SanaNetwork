import { useForceUpdate } from "mobx-react-lite"
import React, { useEffect } from "react"
import { StyleSheet } from "react-native"
import { WebView } from "react-native-webview"
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace"
import MyActivityIndicator from "../my-activity-indicator/my-activity-indicator"

const MyWebView = (props) => {
  const Spinner = () => {
    return <MyActivityIndicator size="large" color={"white"} />
  }

  return (
    <WebView
      bounces={false}
      startInLoadingState={true}
      renderLoading={Spinner}
      style={styles.container}
      source={{ uri: props.url }}
      showsHoizontalScrollIndicator={false}
      scalesPageToFit
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MyWebView
