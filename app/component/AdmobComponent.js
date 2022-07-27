import React from 'react';
import {View} from 'react-native';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const AdmobComponent = () => {
  // main ca-app-pub-2939525677565175/8884380852
  // test ca-app-pub-3940256099942544/6300978111

  return (
    <View pointerEvents="none">
      <BannerAd
        size={BannerAdSize.BANNER}
        // unitId={TestIds.BANNER}
        unitId="ca-app-pub-3940256099942544/6300978111"
      />
    </View>
  );
};

export default AdmobComponent;
