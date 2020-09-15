import EStyleSheet from 'react-native-extended-stylesheet'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width
const baseScreenWidth = 375
const bestScreenWidthFitDesign = 350

function screenRatio() {
  if (screenWidth >= baseScreenWidth) {
    return 1
  }

  if (screenWidth <= bestScreenWidthFitDesign) {
    return 0.75
  }

  return screenWidth / baseScreenWidth
}

EStyleSheet.build({
  $rem: screenRatio(),
})
