import React, { useEffect } from 'react'
import { render } from '@testing-library/react-native'
import { View, Text } from 'react-native'

import ErrorBoundary from '../ErrorBoundary'

let spyOnConsoleError = null

beforeAll(() => {
  spyOnConsoleError = jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn())
})

afterAll(() => {
  spyOnConsoleError.mockRestore()
})

const errorNotifier = {
  notify: jest.fn(),
}

beforeEach(() => {
  errorNotifier.notify.mockClear()
})

describe('when component crashes', () => {
  function CrashComponent() {
    useEffect(() => {
      throw new Error()
    }, [])

    return (
      <View>
        <Text>Sample component</Text>
      </View>
    )
  }

  const subject = () =>
    render(
      <ErrorBoundary notifier={errorNotifier}>
        <CrashComponent />
      </ErrorBoundary>
    )

  it('show the error component instead of component content', () => {
    const { getByText, queryByText } = subject()

    expect(getByText('Something went wrong')).not.toBeEmpty()
    expect(queryByText('Sample component')).toBeNull()
  })

  it('send notify to error tracker system', () => {
    subject()

    expect(errorNotifier.notify).toHaveBeenCalled()
  })
})
