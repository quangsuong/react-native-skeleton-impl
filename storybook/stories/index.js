import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Layout from '../components/Layout'

const createStory = (componentName, layoutStyle = undefined) =>
  storiesOf(componentName, module).addDecorator((getStory) => <Layout style={layoutStyle}>{getStory()}</Layout>)

createStory('Button')
//   .add('default', () => <DefaultButton />)
