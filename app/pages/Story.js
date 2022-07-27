import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../style/styles';

const Story = ({navigation, route}) => {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 24, padding: 15}}>{data?.name}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{fontSize: 16, padding:5, textAlign: 'justify', color:'#000'}}>{data?.story}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Story;
