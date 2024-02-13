import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
import {
  fetchAllUsers,
  fetchStatisctics,
} from "../../../store/actions/userActions";
import colors from "../../../styles/colors";
const screenheight = Dimensions.get("screen").height;
const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const [sortBy, setSortBy] = useState<string>("created_at");
  const { loadingFetch: loading, tasks } = useSelector(
    (state: RootState) => state.taskReducer
  );
  const [openSortModal, setOpenSortModal] = useState<boolean>(false);

  const getAllUsers = useCallback(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchStatisctics());
  }, []);
  const initializeData = useCallback(() => {
    dispatch(fetchTasks(sortBy));
  }, [sortBy]);
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  useEffect(() => {
    initializeData();
  }, [initializeData]);

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
        <View style={{ height: screenheight * 0.55 }}>
          {loading ? (
            <View
              style={[
                commonStyles.h100,
                commonStyles.alignCenter,
                commonStyles.justifyCenter,
              ]}
            >
              <ActivityIndicator size={20} color={colors.black} />
            </View>
          ) : (
            <TasksList tasks={tasks} sortBy={sortBy} />
          )}
        </View>
        <TouchableOpacity
          style={[
            commonStyles.br8,
            commonStyles.alignCenter,
            commonStyles.justifyCenter,
            commonStyles.mt10,
            { height: 40, borderWidth: 1, borderColor: "red" },
          ]}
        >
          <Text
            style={[
              commonStyles.fs14,
              commonStyles.textWhite,

              { fontWeight: "500", color: "red" },
            ]}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <SortBottomSheet
        openBottom={openSortModal}
        setOpenBottomModal={() => setOpenSortModal(false)}
        sortBy={sortBy}
        setSortBy={(value) => {
          setOpenSortModal(false);
          setSortBy(value);
        }}
      />
    </ScreenContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
