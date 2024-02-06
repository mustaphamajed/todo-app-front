import { StyleSheet, View, Modal, Pressable } from "react-native";
import React from "react";
import colors from "../../styles/colors";

interface BottomSheetModalProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
  children?: React.ReactNode;
}

const CustomBottomSheet = ({
  openBottom,
  setOpenBottomModal,
  children,
}: BottomSheetModalProps) => {
  return (
    <Modal animationType="slide" visible={openBottom} transparent={true}>
      <Pressable
        style={styles.container}
        onPress={() => setOpenBottomModal(false)}
      >
        <View
          style={[styles.modalContainer, { backgroundColor: colors.white }]}
        >
          <View style={styles.line} />
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    height: "100%",
    backgroundColor: "rgba(46, 54, 96, 0.5)",
    justifyContent: "flex-end",
  },
  modalContainer: {
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "flex-end",
    maxHeight: "80%",
  },
  line: {
    width: 48,
    height: 6,
    backgroundColor: "#EBEBEB",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 20,
  },
});
