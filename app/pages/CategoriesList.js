import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Button} from 'react-native';
import styles from '../style/styles';

const CategoriesList = ({navigation, route}) => {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.map(item => {
            return (
              <TouchableOpacity
                key={item?.id}
                onPress={() => {
                  navigation.navigate('StoryList', {data: item});
                }}
                style={styles.category_card}>
                <Text style={{color: '#efefef', fontSize: 16}}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoriesList;
