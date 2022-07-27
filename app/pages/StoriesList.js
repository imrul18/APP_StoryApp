import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../style/styles';

const StoriesList = ({navigation, route}) => {
  const data = route.params.data;

  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.story_table?.map(item => {
            return (
              <TouchableOpacity
                key={item?.id}
                onPress={() => {
                  navigation.navigate('Story', {data: item});
                }}
                style={styles.category_card}>
                <Text style={{color:'#efefef', fontSize:16}}>{item?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default StoriesList;
