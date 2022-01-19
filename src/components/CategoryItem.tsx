import React from "react";
import { VStack, HStack, Pressable, Icon, Text } from "native-base";

import { Exchanges, ChevronRight } from "./icons";

interface IProps {
  icon: any;
  title: string;
  bg: string;
}

const CategoryItem = (props: IProps) => {
  return (
    <VStack flex={1} bg={props.bg} minH="95" w="150" p="4" borderRadius={6}>
      <Pressable>
        {props.icon}

        <HStack mt="5" justifyContent="space-between" alignItems="center">
          <Text color="#33373B" fontSize={17} fontWeight="bold">
            {props.title}
          </Text>

          <Icon as={<ChevronRight height="15" width="15" />} />
        </HStack>
      </Pressable>
    </VStack>
  );
};

export default CategoryItem;
