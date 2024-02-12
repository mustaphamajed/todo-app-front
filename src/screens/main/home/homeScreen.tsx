import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { ScreenContainer, StatContainer } from "../../../components/shared";

import HomeHeader from "../../../components/headers/homeHeader";
import commonStyles from "../../../styles/commonStyles";
import { SortIcon } from "../../../utils/icons";
import { SortBottomSheet } from "../../../components/bottomSheet";
import { useAppDispatch } from "../../../utils/helpers";
import { fetchTasks } from "../../../store/actions/taskActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { TasksList } from "../../../components/task";
import { fetchAllUsers } from "../../../store/actions/userActions";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const { loadingFetch: loading, tasks } = useSelector(
    (state: RootState) => state.taskReducer
  );
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);

  const initializeData = useCallback(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchTasks());
  }, []);
  useEffect(() => {
    initializeData();
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
        <TasksList tasks={tasks} loading={loading} />
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
