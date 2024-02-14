import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { CustomBottomSheet, CustomButton } from "../shared";
import commonStyles from "../../styles/commonStyles";
import { RadioButton } from "../form";

interface SortBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
  setSortBy: (value: string) => void;
  sortBy: string;
}

const SortBottomSheet = (props: SortBottomSheetProps) => {
  const [sort, setSort] = useState<string>(props.sortBy);
  const sortList = [
    { id: 1, label: "Created At", value: "created_at" },
    { id: 2, label: "Name", value: "user_name" },
    { id: 3, label: "Status", value: "status" },
    { id: 4, label: "Received", value: "received" },
  ];
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <View style={[commonStyles.p20]}>
        <Text style={[commonStyles.fs18, commonStyles.textBold]}>Sort By:</Text>
        <View style={[commonStyles.mt20]}>
          {sortList.map(({ id, label, value }) => {
            return (
              <Pressable
                key={id}
                style={[
                  commonStyles.row,
                  commonStyles.w100,
                  commonStyles.justifyBetween,
                  commonStyles.my10,
                ]}
                onPress={() => setSort(value)}
              >
                <Text style={[commonStyles.fs16, commonStyles.textMedium]}>
                  {label}
                </Text>
                <RadioButton isChecked={value === sort} />
              </Pressable>
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
            onPress={() => props.setSortBy(sort)}
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
