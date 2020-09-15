import i18n from '../i18n'

const { PermissionsAndroid, Platform } = require('react-native')

const askForLocationPermission = async ({ title, message }: { title: string; message: string }) => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title,
        message,
        buttonPositive: i18n.t('common.agree'),
        buttonNegative: i18n.t('common.disagree'),
        buttonNeutral: i18n.t('common.checkLater'),
      })

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error("Permission was granted, but app can't get user's location")
      }
    } catch (error) {
      throw new Error('Permission was not granted')
    }
  }
}

const permissionUtils = {
  askForLocationPermission,
}

export default permissionUtils
