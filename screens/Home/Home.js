import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import style from './style';
import Title from '../../components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import React from 'react';
import { userPosts, userStories } from '../../data';
import { scaleFontSize } from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import { Routes } from '../../navigation/Routes';
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Home({ navigation }) {
  //defining infinite scroll
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = React.useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = React.useState(
    [],
  );
  const [isLoadingUserStories, setIsLoadingUserStories] = React.useState(false);

  //userpost inifinite scroll
  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = React.useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = React.useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = React.useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialPost = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialPost);
    setIsLoadingUserPosts(false);
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.backgroundWhite}>
        <View style={style.userPostContainer}>
          <FlatList
            keyExtractor={item => 'post-' + item.id}
            ListHeaderComponent={
              <>
                <View style={style.header}>
                  <Title title="Let's Explore" />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <TouchableOpacity style={style.messageIcon}>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size={scaleFontSize(20)}
                        color="#898DAE"
                      />
                      <View style={style.messageNumberContainer}>
                        <Text style={style.messageNumber}>2</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={style.userStoryContainer}>
                  <FlatList
                    keyExtractor={item => 'story-' + item.id}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                      if (isLoadingUserStories) {
                        return;
                      }
                      setIsLoadingUserStories(true);
                      const contentToAppend = pagination(
                        userStories,
                        userStoriesCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 1) {
                        setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                        setUserStoriesRenderedData(prev => [
                          ...prev,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoriesRenderedData}
                    renderItem={({ item }) => (
                      <UserStory
                        key={'userStory' + item.id}
                        firstName={item.firstName}
                        profileImage={item.profileImage}
                      />
                    )}
                  />
                </View>
              </>
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserPosts) {
                return;
              }
              setIsLoadingUserPosts(true);
              const contentToAppend = pagination(
                userPosts,
                userPostsCurrentPage + 1,
                userPostsPageSize,
              );
              if (contentToAppend.length > 1) {
                setUserPostsCurrentPage(userPostsCurrentPage + 1);
                setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
              }
              setIsLoadingUserPosts(false);
            }}
            showsVerticalScrollIndicator={false}
            data={userPostsRenderedData}
            renderItem={({ item }) => (
              <UserPost
                key={'userPost' + item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                bookmarks={item.bookmarks}
                comments={item.comments}
                likes={item.likes}
                profileImage={item.profileImage}
              />
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Home;
