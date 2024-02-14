import React, { ReactNode } from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

interface ScreenContainerProps {
  children: ReactNode;
  customStyle?: object | Array<object>;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  customStyle,
}: ScreenContainerProps) => {
  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={[
        commonStyles.flex1,
        { backgroundColor: colors.white },
        customStyle ? customStyle : {},
      ]}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={colors.blue} />

      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({});
