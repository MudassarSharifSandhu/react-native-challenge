import { Input } from "native-base";
import React from "react";
interface props {
  pass: string;
  onChangeText: (id) => void;
}
const InputCom = ({ onChangeText, pass }: props) => {
  return (
    <Input
      borderWidth="1"
      borderRadius="md"
      p="1"
      textAlign={"center"}
      borderColor="#885FFF"
      maxLength={1}
      keyboardType={"numeric"}
      onChangeText={(value) => onChangeText(value)}
      value={pass.toString()}
    />
  );
};

export default InputCom;
