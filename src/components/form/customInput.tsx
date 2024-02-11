import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface InputProps {
  label: string;
  type?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "visible-password";
  placeholder: string;
  field: string;
  formData: any;
  setFormData: (field: string, value: string) => void;
  validationError?: string | undefined;
  required?: boolean;
}

const CustomInput = (props: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prevState) => !prevState);
  }, []);
  const handleChange = (text: string) => {
    props.setFormData(props.field, text);
  };
  return (
    <View style={[commonStyles.mb20]}>
      <View style={[commonStyles.pb10, commonStyles.row]}>
        <Text style={[styles.label, commonStyles.fs14]}>{props.label}</Text>
        {props.required && (
          <Text style={{ color: "red", marginLeft: 5 }}>*</Text>
        )}
      </View>
      <View
        style={[
          commonStyles.row,
          commonStyles.bgWhite,
          commonStyles.alignCenter,
          commonStyles.br8,
          commonStyles.borderW1,
          commonStyles.justifyBetween,
          commonStyles.px10,
          { height: 44, borderColor: "#E2E8F0" },
        ]}
      >
        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.gray}
          onChangeText={(v) => handleChange(v)}
          autoCapitalize="none"
          keyboardType={props.type}
          secureTextEntry={
            ["password", "confirmPassword"].includes(props.field) &&
            !isPasswordVisible
              ? true
              : false
          }
          style={[commonStyles.w90]}
        />
        {["password", "confirmPassword"].includes(props.field) && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <MaterialCommunityIcons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.validationError && (
        <Text style={[commonStyles.fs14, { color: "red", padding: 5 }]}>
          {props.validationError}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    height: 44,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginBottom: 20,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    color: colors.black,
  },
});
