import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import CampsitesInfoScreen from "./CampsitesInfoScreen";
const Main = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsiteId, setSelectedCampsiteId] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen
        campsites={campsites}
        onPress={(campsiteId) => {
          setSelectedCampsiteId(campsiteId);
        }}
      />
      <CampsitesInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id == selectedCampsiteId)[0]
        }
      />
    </View>
  );
};

export default Main;
