import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import commonStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { SelectBottomSheet, TaskForm } from "../bottomSheet";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  getStatusColor,
  mapUsersData,
  useAppDispatch,
} from "../../utils/helpers";
import { assignTaskToUser } from "../../store/actions/taskActions";
import moment from "moment";

interface ModalData {
  title: string;
  data: { label: string; value: number }[];
  handleSubmit: (selectedItem: number) => void;
  selectedItem: number;
}
const TaskCard = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const { users } = useSelector((state: RootState) => state.userReducer);
  const [modalData, setModalData] = useState<ModalData>({
    title: "",
    data: [],
    handleSubmit: (selectedItem: number) => {},
    selectedItem: 0,
  });

  const assignTask = (userId: number) => {
    dispatch(assignTaskToUser(item.id, userId));
    setOpenModal(false);
    setModalData({
      title: "",
      data: [],
      handleSubmit: (selectedItem: number) => {},
      selectedItem: 0,
    });
  };
  const itemCreatedAt = moment(item.created_at);
  const currentTime = moment();

  const duration = moment.duration(currentTime.diff(itemCreatedAt));
  const daysElapsed = duration.asDays();
  const hoursElapsed = duration.hours();
  const minutesElapsed = duration.minutes();

  return (
    <Pressable
      style={[
        commonStyles.px20,
        commonStyles.mx10,
        commonStyles.my10,
        commonStyles.br10,
        commonStyles.bgWhite,
        {
          elevation: 5,
          borderLeftWidth: 3,
          paddingVertical: 14,
          borderLeftColor: getStatusColor(item.status),
        },
      ]}
      onPress={() => setOpenFormModal(true)}
    >
      <View
        style={[
          commonStyles.row,
          commonStyles.justifyBetween,
          commonStyles.alignCenter,
        ]}
      >
        <Text
          style={[
            commonStyles.fs12,
            commonStyles.textRegular,
            { color: "#CBD5E1", textTransform: "uppercase" },
          ]}
        >
          {item?.title}
        </Text>
        <Pressable style={[commonStyles.row, commonStyles.alignCenter]}>
          <View
            style={{
              width: 7,
              height: 7,
              borderRadius: 50,
              backgroundColor: getStatusColor(item.status),
              marginRight: 5,
            }}
          />
          <Text
            style={[
              commonStyles.fs12,
              commonStyles.textMedium,
              { color: "#64748B", textTransform: "uppercase" },
            ]}
          >
            {item?.status}
          </Text>
        </Pressable>
      </View>
      <View style={[commonStyles.p5]}>
        <Text
          style={[
            commonStyles.fs16,
            commonStyles.textMedium,
            { color: "#334155" },
          ]}
        >
          {item?.description}
        </Text>
      </View>
      <View
        style={[
          commonStyles.row,
          commonStyles.alignCenter,
          commonStyles.justifyBetween,
        ]}
      >
        <Pressable
          style={[
            commonStyles.row,
            commonStyles.alignCenter,
            commonStyles.justifyBetween,
            { width: "80%" },
          ]}
          onPress={() => {
            setModalData({
              data: mapUsersData(users),
              handleSubmit: (selectedItem) => assignTask(selectedItem),
              title: "Select User",
              selectedItem: item?.user_id ? Number(item?.user_id) : 0,
            });
            setOpenModal(true);
          }}
        >
          <Text
            style={[
              commonStyles.fs14,
              commonStyles.textRegular,
              { color: "#CBD5E1" },
            ]}
          >
            For{" "}
          </Text>
          <View
            style={[
              commonStyles.w50,
              commonStyles.row,
              commonStyles.alignCenter,
            ]}
          >
            <Text
              style={[
                commonStyles.fs14,
                commonStyles.textRegular,
                { color: "#64748B" },
              ]}
            >
              {" "}
              {item?.user?.firstname}{" "}
            </Text>
            <Text
              style={[
                commonStyles.fs14,
                commonStyles.textRegular,
                { color: "#64748B" },
              ]}
            >
              {item?.user?.name}
            </Text>
          </View>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </Pressable>
        <Text
          style={[
            commonStyles.fs12,
            commonStyles.textRegular,
            { color: "#CBD5E1" },
          ]}
        >
          {Math.floor(daysElapsed) !== 0
            ? `${Math.floor(daysElapsed)}d`
            : Math.floor(hoursElapsed) !== 0
            ? `${Math.floor(hoursElapsed)}h`
            : `${Math.floor(minutesElapsed)}m`}
        </Text>
      </View>

      <SelectBottomSheet
        openBottom={openModal}
        setOpenBottomModal={() => {
          setModalData({
            title: "",
            data: [],
            handleSubmit: () => {},
            selectedItem: 0,
          });
          setOpenModal(false);
        }}
        title={modalData.title}
        data={modalData.data}
        handleSubmit={modalData.handleSubmit}
        selectedItem={modalData.selectedItem}
      />
      <TaskForm
        openBottom={openFormModal}
        setOpenBottomModal={() => setOpenFormModal(false)}
        task={item}
      />
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
