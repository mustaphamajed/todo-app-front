import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomBottomSheet } from "../shared";

interface SortBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
}

const SortBottomSheet = (props: SortBottomSheetProps) => {
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <Text>SortBottomSheet</Text>
    </CustomBottomSheet>
  );
};

export default SortBottomSheet;

const styles = StyleSheet.create({});
