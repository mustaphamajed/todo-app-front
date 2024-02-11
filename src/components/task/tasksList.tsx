import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import { TaskCard } from "../cards";

const TasksList = ({ tasks, loading }: { tasks: any; loading: boolean }) => {
  return (
    <View style={commonStyles.flex1}>
      {loading ? (
        <ActivityIndicator size={20} color={colors.black} />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return <TaskCard item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default TasksList;

const styles = StyleSheet.create({});
