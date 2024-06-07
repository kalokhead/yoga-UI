import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import AntDesign from "@expo/vector-icons/AntDesign";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const data = [
  {
    img: require("./images/img.png"),
    headerText: "Meet Up UI-Kit",
    subHeaderText:
      " When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.",
  },
  {
    img: require("./images/img2.png"),
    headerText: "Discover",
    subHeaderText:
      " When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.",
  },
  {
    img: require("./images/img3.png"),
    headerText: "Get Started",
    subHeaderText:
      " When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.",
  },
  {
    img: require("./images/img4.png"),
    headerText: "Welcome",
    subHeaderText:
      " When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up.",
  },
];

const imageAndDescription = () => {
  return data.map((item, index) => (
    <View key={index} style={styles.slide}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.headerText}>{item.headerText}</Text>
      <Text style={styles.subHeaderText}>{item.subHeaderText}</Text>
    </View>
  ));
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        showsButtons={true}
        buttonWrapperStyle={styles.buttonWrapper}
        nextButton={
          <View style={styles.nextPrevButton}>
            <AntDesign name="arrowright" size={22} color="#FFF" />
          </View>
        }
        prevButton={
          <View style={styles.nextPrevButton}>
            <AntDesign name="arrowleft" size={22} color="#FFF" />
          </View>
        }
        paginationStyle={styles.pagination}
        activeDotColor="#8A56AC"
        dotColor="#998FA2"
      >
        {data && imageAndDescription()}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    flex: 1,
    marginTop: 18,
  },
  image: {
    width: w / 1.4,
    height: h / 2,
    marginBottom: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    alignSelf: "center",
  },
  headerText: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  subHeaderText: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  buttonWrapper: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  nextPrevButton: {
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    backgroundColor: "#8A56AC",
    marginHorizontal: 20,
  },
  pagination: {
    marginRight: w * 0.7,
    marginBottom: h * 0.01,
  },
});
