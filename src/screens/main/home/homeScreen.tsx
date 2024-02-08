import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { ScreenContainer, StatContainer } from "../../../components/shared";

import HomeHeader from "../../../components/headers/homeHeader";
import commonStyles from "../../../styles/commonStyles";
import { SortIcon } from "../../../utils/icons";
import { SortBottomSheet } from "../../../components/bottomSheet";
import { useAppDispatch } from "../../../utils/helpers";
import { fetchTasks } from "../../../store/actions/taskActions";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);

  const fetchAllTasks = useCallback(() => {
    dispatch(fetchTasks());
  }, []);
  useEffect(() => {
    fetchAllTasks();
  }, []);

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
