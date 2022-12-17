import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const GoogleMap = () => {
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default GoogleMap;


const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  }
})