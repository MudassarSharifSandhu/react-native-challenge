import React from "react";
import {
  ScrollView,
  VStack,
  HStack,
  Input,
  Icon,
  Button,
  Text,
} from "native-base";

import {
  SearchIcon,
  FilterIcon,
  ChevronRight,
  Exchanges,
  Games,
  Defi,
  Collectibles2,
  Utilities,
} from "../components/icons";
import MarketPlaes from "../components/icons/MarketPlaes";
import ExperienceItem from "../components/ExperienceItem";
import CategoryItem from "../components/CategoryItem";

const Dashboard = ({ navigation, route }) => {
  return (
    <VStack safeArea mt="2" mb="20" mx='3.5'>
      <HStack alignItems="center">
        <Input
          h={12}
          w="85%"
          bg="#F5F5F5"
          fontSize={16}
          borderWidth={0}
          borderRadius={8}
          placeholder="Search experiences"
          InputLeftElement={
            <Icon as={<SearchIcon height="25" width="25" />} ml={3} />
          }
        />

        <Button
          w="15%"
          variant="ghost"
          leftIcon={<Icon as={<FilterIcon height="30" width="30" />} />}
        ></Button>
      </HStack>

      <ScrollView mt="4">
        <Text my="3" color="#414047" fontSize={18} fontWeight="semibold">
          Recent Experiences
        </Text>
        <ExperienceItem
          image={require("../assets/images/defi-swap.png")}
          title="DeFi Swap"
          description="Swap your digital assets"
          users="200"
          onPress={() => console.log("DeFi Swap Clicked!")}
        />
        <ExperienceItem
          image={require("../assets/images/docu-sign.png")}
          title="Docu sign"
          description="sign smart contracts seamlessly"
          users="1k"
          onPress={() => console.log("Docu sign Clicked!")}
        />

        <HStack justifyContent="space-between">
          <Text my="3" color="#414047" fontSize={18} fontWeight="semibold">
            Popular Categories
          </Text>

          <Button
            p="0"
            variant="ghost"
            _text={{ color: "#885FFF", fontSize: 18 }}
            rightIcon={
              <Icon as={<ChevronRight height="15" width="15" />} ml={3} />
            }
          >
            See All
          </Button>
        </HStack>

        <HStack space={4}>
          <CategoryItem
            bg="#EAEFFF"
            icon={<Icon as={<Exchanges height="35" width="35" />} />}
            title="Exchanges"
          />
          <CategoryItem
            bg="#F5F5F5"
            icon={<Icon as={<Games height="35" width="35" />} />}
            title="Games"
          />
        </HStack>
        <HStack space={4} mt="2">
          <CategoryItem
            bg="#E2F9F3"
            icon={<Icon as={<MarketPlaes height="35" width="35" />} />}
            title="Marketplaces"
          />
          <CategoryItem
            bg="#F5F5F5"
            icon={<Icon as={<Defi height="35" width="35" />} />}
            title="Dufi"
          />
        </HStack>
        <HStack space={4} mt="2">
          <CategoryItem
            bg="#EBF5FF"
            icon={
              <Icon
                as={<Collectibles2 height="35" width="35" color="#54AAF9" />}
              />
            }
            title="Collectibles"
          />
          <CategoryItem
            bg="#F5F5F5"
            icon={<Icon as={<Utilities height="35" width="35" />} />}
            title="Utilities"
          />
        </HStack>

        <HStack justifyContent="space-between">
          <Text my="3" color="#414047" fontSize={18} fontWeight="semibold">
            Trending Experiences
          </Text>

          <Button
            p="0"
            variant="ghost"
            _text={{ color: "#885FFF", fontSize: 18 }}
            rightIcon={
              <Icon as={<ChevronRight height="15" width="15" />} ml={3} />
            }
          >
            See All
          </Button>
        </HStack>
        <ExperienceItem
          image={require("../assets/images/docu-sign.png")}
          title="Docu sign"
          description="sign smart contracts seamlessly"
          users="200"
          onPress={() => navigation.navigate("Docusign")}
        />
      </ScrollView>
    </VStack>
  );
};

export default Dashboard;
