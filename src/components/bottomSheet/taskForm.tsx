import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomBottomSheet } from "../shared";

interface FormBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
}
const TaskForm = (props: FormBottomSheetProps) => {
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <Text>TaskForm</Text>
    </CustomBottomSheet>
  );
};

export default TaskForm;

const styles = StyleSheet.create({});
