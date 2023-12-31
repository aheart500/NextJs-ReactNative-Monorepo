import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { trpc } from "api/reactTRPC";

const Root = () => {
  const h = trpc.hello.hi.useQuery();
  console.log(h.data);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Root;
