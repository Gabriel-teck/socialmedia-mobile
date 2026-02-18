import React from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView contentContainerStyle={globalStyle.flexGrow}>
          <View style={style.profileImageContainer}>
            <View style={style.profileImageContent}>
              <Image
                style={style.profileImage}
                source={require('../../assets/images/default_profile.png')}
              />
            </View>
          </View>
          <Text style={style.userName}>Gabriel Devs</Text>
          <View style={style.statContainer}>
            <View>
              <Text style={style.statAmount}>45</Text>
              <Text style={style.statType}>Following</Text>
            </View>
            <View style={style.statBorder}></View>
            <View>
              <Text style={style.statAmount}>40M</Text>
              <Text style={style.statType}>Followers</Text>
            </View>
            <View style={style.statBorder}></View>
            <View>
              <Text style={style.statAmount}>458</Text>
              <Text style={style.statType}>Posts</Text>
            </View>
          </View>
        <View style={globalStyle.flex}>
          <ProfileTabsNavigation />
        </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
