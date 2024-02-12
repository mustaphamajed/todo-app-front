import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CustomBottomSheet, CustomButton } from "../shared";
import { SelectCard } from "../cards";
import commonStyles from "../../styles/commonStyles";

interface SelectBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
  title: string;
  data: { value: number; label: string }[] | [];
  handleSubmit: (selectedItem: number) => void;
  selectedItem: number;
}

const SelectBottomSheet = (props: SelectBottomSheetProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  useEffect(() => {
    setSelectedItem(props.selectedItem);
  }, [props.selectedItem]);
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
                isSelected={value === selectedItem ? true : false}
                onPress={() => setSelectedItem(value)}
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
            onPress={() => props.handleSubmit(selectedItem)}
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
