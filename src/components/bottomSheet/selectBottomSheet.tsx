import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CustomBottomSheet, CustomButton } from "../shared";
import { SelectCard } from "../cards";
import commonStyles from "../../styles/commonStyles";

interface SelectBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
  title: string;
  data: { value: string; label: string }[] | [];
  handleSubmit: () => void;
}

const SelectBottomSheet = (props: SelectBottomSheetProps) => {
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <View style={[commonStyles.p20]}>
        <View style={[commonStyles.alignCenter, commonStyles.pb20]}>
          <Text style={[commonStyles.fs20]}>{props.title}</Text>
        </View>
        <ScrollView>
          {props.data.map(({ label, value }) => {
            return (
              <SelectCard
                key={value}
                label={label}
                isSelected={value === "1" ? true : false}
              />
            );
          })}
        </ScrollView>
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
            onPress={props.handleSubmit}
            text="Confirm"
            fullWidth={false}
            loading={false}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default SelectBottomSheet;

const styles = StyleSheet.create({});
