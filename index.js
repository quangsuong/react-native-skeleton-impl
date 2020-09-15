import { AppRegistry, Platform } from 'react-native'
import KeyboardManager from 'react-native-keyboard-manager'
import 'react-native-gesture-handler'

import App from './App'
import { name as appName } from './app.json'

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true)
  KeyboardManager.setEnableDebugging(false)
  KeyboardManager.setKeyboardDistanceFromTextField(10)
  KeyboardManager.setPreventShowingBottomBlankSpace(true)
  KeyboardManager.setEnableAutoToolbar(true)
  KeyboardManager.setToolbarDoneBarButtonItemText('Done')
  KeyboardManager.setToolbarManageBehaviour(0)
  KeyboardManager.setToolbarPreviousNextButtonEnable(true)
  KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false)
  KeyboardManager.setShouldShowToolbarPlaceholder(false)
  KeyboardManager.setOverrideKeyboardAppearance(false)
  KeyboardManager.setShouldResignOnTouchOutside(true)
}

AppRegistry.registerComponent(appName, () => App)
