import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { TaskCard } from "../cards";
import { useAppDispatch } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { fetchTasks } from "../../store/actions/taskActions";

const TasksList = ({ tasks, sortBy }: { tasks: any; sortBy: string }) => {
  const dispatch = useAppDispatch();
  const { loadingFetch } = useSelector((state: RootState) => state.taskReducer);
  return (
    <>
      <FlatList
        data={tasks}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <TaskCard item={item} />;
        }}
        refreshControl={
          <RefreshControl
            refreshing={loadingFetch}
            onRefresh={async () => {
              dispatch(fetchTasks(sortBy));
            }}
          />
        }
      />
    </>
  );
};

export default TasksList;

const styles = StyleSheet.create({});
