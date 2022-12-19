import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {useState} from 'react';
import {theme} from '../../../../theme';
import RheoStat from './RheoStat';
import Tooltip from 'react-native-walkthrough-tooltip';
import {ArrowDown2} from 'iconsax-react-native';

const Filters = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [maxBudget, setMaxBudget] = useState([0, 2500]);

  return (
    <View style={styles.filtersContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        snapToInterval={100}>
        <>
          <Tooltip
            isVisible={activeFilter === 1}
            content={
              <RheoStat setMaxBudget={setMaxBudget} maxBudget={maxBudget} />
            }
            contentStyle={{
              width: Dimensions.get('window').width - 40,
              height: 220,
            }}
            onClose={() => setActiveFilter(0)}
            placement="bottom">
            <TouchableOpacity
              onPress={() => setActiveFilter(1)}
              activeOpacity={0.8}
              style={[
                styles.filterBox,
                activeFilter === 1 && styles.activeFilter,
              ]}>
              <View style={styles.filterBtnContent}>
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === 1 && styles.activeColor,
                  ]}>
                  Under ${maxBudget[1].toFixed(2)}
                </Text>
                <ArrowDown2
                  color={
                    activeFilter === 1
                      ? theme.colors.background
                      : theme.colors.secondary
                  }
                  size={16}
                  variant="Bold"
                />
              </View>
            </TouchableOpacity>
          </Tooltip>
        </>
      </ScrollView>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  filtersContainer: {
    position: 'absolute',
    top: 60,
    left: 0,
    paddingLeft: 15,
  },
  filterBox: {
    height: 40,
    backgroundColor: '#ffffff',
    marginHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 8,
    fontWeight: 'bold',
  },
  filterColor: {
    fontWeight: 'bold',
    marginRight: 2,
    fontFamily: 'Poppins-bold',
  },
  activeFilter: {
    backgroundColor: `${theme.colors.primary}`,
  },
  activeColor: {
    color: '#ffffff',
  },
  filterText: {
    fontFamily: 'Poppins-bold',
    color: `${theme.colors.secondary}`,
  },
  buttonWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterBtnContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
