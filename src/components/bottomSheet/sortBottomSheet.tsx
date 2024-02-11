import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomBottomSheet, CustomButton } from "../shared";
import commonStyles from "../../styles/commonStyles";
import { RadioButton } from "../form";

interface SortBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
}

const SortBottomSheet = (props: SortBottomSheetProps) => {
  const sort = [
    { id: 1, label: "Name", value: "name" },
    { id: 2, label: "Status", value: "status" },
    { id: 3, label: "Received", value: "received" },
  ];
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <View style={[commonStyles.p20]}>
        <Text>Sort By:</Text>
        <View style={[commonStyles.mt20]}>
          {sort.map(({ id, label, value }) => {
            return (
              <View
                key={id}
                style={[
                  commonStyles.row,
                  commonStyles.justifyBetween,
                  commonStyles.my10,
                ]}
              >
                <Text>{label}</Text>
                <RadioButton isChecked={value === "name"} />
              </View>
            );
          })}
        </View>
        <View
          style={[
            commonStyles.justifyBetween,
            commonStyles.row,
            commonStyles.mt20,
          ]}
        >
          <CustomButton
            isPrimary={false}
            onPress={() => props.setOpenBottomModal(false)}
            text="Cancel"
            fullWidth={false}
            loading={false}
          />
          <CustomButton
            isPrimary={true}
            onPress={() => console.log("first")}
            text="Confirm"
            fullWidth={false}
            loading={false}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default SortBottomSheet;

const styles = StyleSheet.create({});
