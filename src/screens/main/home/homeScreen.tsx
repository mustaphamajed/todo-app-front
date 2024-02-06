import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScreenContainer, StatContainer } from "../../../components/shared";

import HomeHeader from "../../../components/headers/homeHeader";
import commonStyles from "../../../styles/commonStyles";
import { SortIcon } from "../../../utils/icons";
import { SortBottomSheet } from "../../../components/bottomSheet";

const HomeScreen = () => {
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);
  return (
    <ScreenContainer>
      <HomeHeader />
      <View
        style={{
          position: "absolute",
          width: "90%",
          alignSelf: "center",
          top: 100,
        }}
      >
        <StatContainer />
        <View
          style={[
            commonStyles.row,
            commonStyles.justifyBetween,
            commonStyles.py20,
          ]}
        >
          <Text>Due today</Text>
          <Pressable
            style={[commonStyles.row, commonStyles.alignCenter]}
            onPress={() => setOpenSortModal(true)}
          >
            <Text style={[commonStyles.pr10]}>Sort By</Text>
            <SortIcon />
          </Pressable>
        </View>
      </View>
      <SortBottomSheet
        openBottom={openSortModal}
        setOpenBottomModal={() => setOpenSortModal(false)}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
