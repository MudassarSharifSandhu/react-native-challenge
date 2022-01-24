import { Box, HStack, Image, Pressable, Text, VStack } from "native-base";
import React from "react";
interface IProps {
  image: any;
  title: string;
  type: string;
  secondPerson: string;
  onPress: () => void;
}

const TranscationItem = (props: IProps) => {
  return (
    <Pressable mx='2' my='5'>
      <HStack
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        width={"100%"}
        px="7"

      >
        <HStack space={4}>
          <Box alignSelf={"center"}>
            <Image
              width="20px"
              height="20px"
              borderRadius={10}
              source={props.image}
              alt={props.title}
            />
          </Box>

          <VStack justifyContent="space-between" pl="5">
            <Text color="#885FFF" fontSize={14} fontWeight="semibold">
              {props.title}{" "}
            </Text>
            <Text color="#414047" fontSize={14} fontWeight="semibold">
              {props.type}{" "}
              <Text color="#885FFF" fontSize={14}>
                {props.secondPerson}
              </Text>
            </Text>
          </VStack>
        </HStack>

        <Text color="#808080">3 days ago</Text>
      </HStack>
    </Pressable>
  );
};

export default TranscationItem;
