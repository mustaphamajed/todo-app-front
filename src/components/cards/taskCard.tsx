import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { SelectBottomSheet } from "../bottomSheet";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { mapUsersData } from "../../utils/helpers";

interface ModalData {
  title: string;
  data: { label: string; value: string }[];
  handleSubmit: () => void;
}
const TaskCard = ({ item }: { item: any }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { users } = useSelector((state: RootState) => state.userReducer);
  const [modalData, setModalData] = useState<ModalData>({
    title: "",
    data: [],
    handleSubmit: () => {},
  });
  return (
    <View
      style={[
        commonStyles.p20,
        commonStyles.mx10,
        commonStyles.my10,
        commonStyles.br10,
        commonStyles.bgWhite,
        { elevation: 5, borderLeftWidth: 3, borderLeftColor: colors.blue },
      ]}
    >
      <View
        style={[
          commonStyles.row,
          commonStyles.justifyBetween,
          commonStyles.alignCenter,
          commonStyles.pb10,
        ]}
      >
        <Text
          style={[
            commonStyles.fs12,
            { color: "#CBD5E1", textTransform: "uppercase" },
          ]}
        >
          {item?.title}
        </Text>
        <Pressable
          style={[commonStyles.row, commonStyles.alignCenter]}
          onPress={() => {
            setModalData({
              data: [],
              handleSubmit: () => console.log("first"),
              title: "Update Status",
            });
            setOpenModal(true);
          }}
        >
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: 50,
              backgroundColor: colors.blue,
              marginRight: 5,
            }}
          />
          <Text
            style={[
              commonStyles.fs12,
              { color: "#64748B", textTransform: "uppercase" },
            ]}
          >
            {item?.status}
          </Text>
        </Pressable>
      </View>
      <View style={[commonStyles.pb10]}>
        <Text style={[commonStyles.fs16, { color: "#334155" }]}>
          {item?.description}
        </Text>
      </View>
      <Pressable
        style={[commonStyles.row, commonStyles.alignCenter]}
        onPress={() => {
          setModalData({
            data: mapUsersData(users),
            handleSubmit: () => console.log("first"),
            title: "Select User",
          });
          setOpenModal(true);
        }}
      >
        <Text style={[commonStyles.fs14, { color: "#CBD5E1" }]}>For </Text>
        <View style={[commonStyles.w50]}>
          <Text> {item?.user?.firstname} </Text>
          <Text>{item?.user?.name}</Text>
        </View>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </Pressable>
      <SelectBottomSheet
        openBottom={openModal}
        setOpenBottomModal={() => setOpenModal(false)}
        title={modalData.title}
        data={modalData.data}
      />
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
