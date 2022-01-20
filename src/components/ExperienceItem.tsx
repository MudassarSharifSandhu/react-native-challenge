import React from "react";
import { HStack, VStack, Image, Text, Icon, Pressable } from "native-base";

import { ChevronRight } from "./icons";

interface IProps {
  image: any;
  title: string;
  description: string;
  users: string;
  onPress: () => void;
}

const ExperienceItem = (props: IProps) => {
  return (
    <Pressable my="3" onPress={props.onPress}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack space={4}>
          <Image
            h="74"
            w="74"
            borderRadius={10}
            source={props.image}
            alt={props.description}
          />

          <VStack justifyContent="space-between">
            <Text color="#414047" fontSize={18} fontWeight="semibold">
              {props.title}
            </Text>
            <Text color="#6F6E73" fontSize={16}>
              {props.description}
            </Text>
            <Text color="#587BE0" fontSize={16}>
              {`+${props.users} users`}
            </Text>
          </VStack>
        </HStack>

        <Icon as={<ChevronRight height="20" width="20" />} />
      </HStack>
    </Pressable>
  );
};

export default ExperienceItem;
