import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import { MenuIcon, PlusIcon, WhiteAppLogo } from "../../utils/icons";
import commonStyles from "../../styles/commonStyles";
import { StatContainer } from "../shared";

const HomeHeader = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.child}>
        <View
          style={[
            commonStyles.row,
            commonStyles.alignCenter,
            commonStyles.justifyBetween,
            commonStyles.pt10,
          ]}
        >
          <MenuIcon />
          <WhiteAppLogo />
          <PlusIcon />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  parent: {
    height: "20%",
    width: "100%",
    transform: [{ scaleX: 2 }],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],
    backgroundColor: colors.blue,
    padding: 20,
  },
});
