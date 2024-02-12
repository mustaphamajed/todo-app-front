import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { CustomBottomSheet, CustomButton } from "../shared";
import { TaskFormData } from "../../interfaces/task-interface";
import { ValidationData } from "../../interfaces/user-interface";
import { taskInput } from "../../utils/statics";
import { CustomInput } from "../form";
import commonStyles from "../../styles/commonStyles";
import { useAppDispatch } from "../../utils/helpers";
import { createTask, markAsCompleted } from "../../store/actions/taskActions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface FormBottomSheetProps {
  openBottom: boolean;
  setOpenBottomModal: (value: boolean) => void;
  task?: any;
}
type Action = { type: string; payload: string };
const formReducer = (state: TaskFormData, action: Action): TaskFormData => {
  return { ...state, [action.type]: action.payload };
};

const TaskForm = (props: FormBottomSheetProps) => {
  const dispatch = useAppDispatch();
  const { loadingAdd } = useSelector((state: RootState) => state.taskReducer);
  const { user } = useSelector((state: RootState) => state.userReducer);
  const [formData, formDispatch] = useReducer(formReducer, {
    title: props.task?.title ?? "",
    description: props.task?.description ?? "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationData>({});
  const inputChangehandler = useCallback(
    (field: string, inputValue: string) => {
      formDispatch({ type: field, payload: inputValue });

      if (
        validationErrors &&
        validationErrors[field as keyof ValidationData] &&
        inputValue.trim().length > 0
      ) {
        const updatedErrors = { ...validationErrors };
        delete updatedErrors[field as keyof ValidationData];
        setValidationErrors(updatedErrors);
      }
    },
    [formData, formDispatch, validationErrors, setValidationErrors]
  );

  const validateForm = () => {
    const requiredFields: (keyof TaskFormData)[] = ["title", "description"];
    const errors: Partial<ValidationData> = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required!`;
      }
    });

    if (formData.title.length < 4) {
      errors["title"] = `Title must be at least 4 characters long!`;
    }
    if (formData.description.length < 10) {
      errors[
        "description"
      ] = `Description must be at least 10 characters long!`;
    }
    setValidationErrors(errors as ValidationData);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(
        createTask(formData, () => {
          props.setOpenBottomModal(false);
        })
      );
    }
  };
  const markTaskAsCompleted = () => {
    dispatch(markAsCompleted(props.task.id));
  };
  return (
    <CustomBottomSheet
      openBottom={props.openBottom}
      setOpenBottomModal={props.setOpenBottomModal}
    >
      <View style={[commonStyles.p20]}>
        <View style={[commonStyles.alignCenter, commonStyles.pb20]}>
          <Text style={[commonStyles.fs20]}>
            {props.task ? "Update" : "New"} Task
          </Text>
        </View>
        {taskInput.map(({ field, id, label, placeholder, type, required }) => {
          return (
            <CustomInput
              key={id}
              field={field}
              label={label}
              placeholder={placeholder}
              formData={formData}
              setFormData={inputChangehandler}
              type={type}
              required={required}
              validationError={validationErrors[field]}
            />
          );
        })}
        {props.task &&
        +user?.id === +props.task?.user_id &&
        props.task.status === "pending" ? (
          <TouchableOpacity
            style={[
              commonStyles.br8,
              commonStyles.alignCenter,
              commonStyles.justifyCenter,
              { height: 40, backgroundColor: "#008020" },
            ]}
            onPress={markTaskAsCompleted}
          >
            <Text
              style={[
                commonStyles.fs14,
                commonStyles.textWhite,
                { fontWeight: "500" },
              ]}
            >
              Mark As Completed
            </Text>
          </TouchableOpacity>
        ) : null}
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
            onPress={handleSubmit}
            text="Confirm"
            fullWidth={false}
            loading={loadingAdd}
          />
        </View>
      </View>
    </CustomBottomSheet>
  );
};

export default TaskForm;

const styles = StyleSheet.create({});
