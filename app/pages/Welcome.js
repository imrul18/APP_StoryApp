import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/styles';

import {useDispatch, useSelector} from 'react-redux';
import {clearRead, loadData} from '../redux/StoryStore';

import WaitingModal from '../component/WaitingModal';


const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, read} = useSelector(state => state.storyStore);

  const [loading, setLoading] = useState(true);

  const setDataToStorage = async data => {
    await AsyncStorage.setItem('data', JSON.stringify(data));
  };

  const setUp = async () => {
    const res = await AsyncStorage.getItem('data');
    if (res) {
      dispatch(loadData(JSON.stringify(res)));
    }
    NetInfo.fetch().then(res => {
      if (res.isConnected) {
        read.map(item => {
          axios.put(`http://api.story.imrul.xyz/api/get_all/${item}`);
        });
        axios.get('http://api.story.imrul.xyz/api/get_all').then(response => {
          setDataToStorage(response.data);
          dispatch(loadData(response.data));
          dispatch(clearRead());
        });
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    setUp();
  }, []);

  const nativeAdViewRef = useRef();

  useEffect(() => {
    nativeAdViewRef.current?.loadAd();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CategoryList', {data: data});
        }}>
        <Text style={styles.button}>গল্প পড়ুন</Text>
      </TouchableOpacity>

      <WaitingModal loading={loading} />
    </View>
  );
};

export default Welcome;
