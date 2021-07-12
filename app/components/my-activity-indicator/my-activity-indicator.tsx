import React from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"

const MyActivityIndicator = (props) => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={props.size} color={props.color} />
    </View>
  )
}

const styles = StyleSheet.create({
  activityContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
})

export default MyActivityIndicator
