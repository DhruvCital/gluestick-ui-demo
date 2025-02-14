import { ScrollView } from "react-native";
import { Box, Heading, Text, Icon } from "@gluestack-ui/themed";
import { Button, ButtonText } from "@/components/ui/button";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectIcon,
  SelectScrollView,
} from "@/components/ui/select";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@/components/ui/modal";
import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import { Toast, ToastTitle, useToast } from "@/components/ui/toast";
import { ChevronDownIcon, CheckIcon, AlertCircleIcon, CircleIcon } from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const toast = useToast();
  const [radioValue, setRadioValue] = useState("option1");
  const [checkboxValues, setCheckboxValues] = useState(["option1"]);
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ScrollView className="flex-1 p-4 bg-gray-50">
      <Card className="mb-6 p-4">
        <Box className="mb-4">
          <Text className="text-xl font-bold">Gluestack UI Components Demo</Text>
        </Box>
        <Box>
          {/* Form Controls */}
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Name</FormControlLabelText>
            </FormControlLabel>
            <Input variant="outline" size="md">
              <InputField placeholder="Enter your name" />
            </Input>
          </FormControl>

          {/* Radio Group */}
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Select Option</FormControlLabelText>
            </FormControlLabel>
            <RadioGroup value={radioValue} onChange={setRadioValue}>
              <Radio value="option1" className="mb-2" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Option 1</RadioLabel>
              </Radio>
              <Radio value="option2" className="mb-2" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Option 2</RadioLabel>
              </Radio>
            </RadioGroup>
          </FormControl>

          {/* Checkbox Group */}
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Choose Multiple</FormControlLabelText>
            </FormControlLabel>
            <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
              <Checkbox value="option1" className="mb-2" size="md">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Option 1</CheckboxLabel>
              </Checkbox>
              <Checkbox value="option2" className="mb-2" size="md">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>Option 2</CheckboxLabel>
              </Checkbox>
            </CheckboxGroup>
          </FormControl>

          {/* Select */}
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Select Item</FormControlLabelText>
            </FormControlLabel>
            <Select>
              <SelectTrigger>
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectScrollView>
                    <SelectItem label="Option 1" value="1" />
                    <SelectItem label="Option 2" value="2" />
                    <SelectItem label="Option 3" value="3" />
                  </SelectScrollView>
                </SelectContent>
              </SelectPortal>
            </Select>
          </FormControl>

          {/* Switch */}
          <FormControl className="mb-4">
            <FormControlLabel className="flex-row items-center justify-between">
              <FormControlLabelText>Enable Feature</FormControlLabelText>
              <Switch
                value={switchValue}
                onValueChange={(value: boolean) => setSwitchValue(value)}
                size="md"
              />
            </FormControlLabel>
          </FormControl>

          {/* Textarea */}
          <FormControl className="mb-4">
            <FormControlLabel>
              <FormControlLabelText>Comments</FormControlLabelText>
            </FormControlLabel>
            <Textarea size="md">
              <TextareaInput placeholder="Enter your comments" />
            </Textarea>
          </FormControl>

          {/* Alert */}
          <Alert className="mb-4" action="success">
            <AlertIcon as={CheckIcon} className="mr-3" />
            <AlertText>Form submitted successfully!</AlertText>
          </Alert>

          {/* Buttons */}
          <Button
            size="md"
            variant="solid"
            action="primary"
            className="mb-2"
            onPress={() => setShowModal(true)}
          >
            <ButtonText>Open Modal</ButtonText>
          </Button>

          <Button
            size="md"
            variant="outline"
            action="secondary"
            className="mb-2"
            onPress={() =>
              toast.show({
                placement: "top",
                render: ({ id }) => (
                  <Toast nativeID={id} action="success">
                    <ToastTitle>This is a toast message!</ToastTitle>
                  </Toast>
                ),
              })
            }
          >
            <ButtonText>Show Toast</ButtonText>
          </Button>
        </Box>
      </Card>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text className="text-xl font-bold">Modal Title</Text>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Text>This is a modal dialog with some content.</Text>
          </ModalBody>
          <ModalFooter>
            <Box className="flex-row gap-3">
              <Button
                variant="outline"
                action="secondary"
                onPress={() => setShowModal(false)}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button action="primary" onPress={() => setShowModal(false)}>
                <ButtonText>Confirm</ButtonText>
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ScrollView>
  );
}
