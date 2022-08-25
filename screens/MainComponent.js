import { useState } from "react";
import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import CampsitesInfoScreen from "./CampsitesInfoScreen";
const Main = () => {
  const [campsites, setCampsites] = useState(CAMPSITES);
  const [selectedCampsite, setSelected] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <DirectoryScreen campsites={campsites} setSelected={setSelected} />
      <CampsitesInfoScreen
        campsite={
          campsites.filter((campsite) => campsite.id == selectedCampsite)[0]
        }
      />
    </View>
  );
};

export default Main;
