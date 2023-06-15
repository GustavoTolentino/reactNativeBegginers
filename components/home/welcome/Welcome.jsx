import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const eventTypes = ["Neurociencia", "Neurotecnologia", "Tecnologia", "Consciencia", "Neuroetica", "Entretenimento"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeEventType, setActiveEventType] = useState("Neurociencia");
  return (
    <View>
      <View>
        <Text>Eventos</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChange={(text) => setSearchTerm(text)}
            placeholder='Pesquisar'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={eventTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeEventType, item)}
              onPress={() => {
                setActiveEventType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeEventType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome;