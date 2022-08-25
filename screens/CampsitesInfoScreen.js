import RenderCampsite from "../features/campsites/RenderCampsite";
const CampsitesInfoScreen = (props) => {
  return <RenderCampsite campsites={props.campsites} />;
};

export default CampsitesInfoScreen;
