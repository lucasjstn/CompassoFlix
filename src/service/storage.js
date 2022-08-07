import AsyncStorage from '@react-native-async-storage/async-storage';

export const KeepToken = async (key, data) => {
  try {
    if (data !== null) {
      // console.log('   :', 'recebido', data);
      await AsyncStorage.setItem(key, data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const ClearToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('   :', error);
  }
};
