import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { TaskCard } from "../cards";

const TasksList = ({ tasks, loading }: { tasks: any; loading: boolean }) => {
  return (
    <>
      <FlatList
        data={tasks}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return <TaskCard item={item} />;
        }}
      />
    </>
  );
};

export default TasksList;

const styles = StyleSheet.create({});
