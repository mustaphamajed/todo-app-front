import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomBottomSheet } from "../shared";

interface SelectBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
}

const SelectBottomSheet = (props: SelectBottomSheetProps) => {
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <Text>SelectBottomSheet</Text>
    </CustomBottomSheet>
  );
};

export default SelectBottomSheet;

const styles = StyleSheet.create({});
