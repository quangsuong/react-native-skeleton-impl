/**
 * @flow
 */

import * as React from 'react'
import type { ReactNode } from 'react/index'

import type { ErrorNotifier } from '../../types/local'
import { errorNotifier } from '../../services'

import ErrorFallback from './ErrorFallback'

type Props = {
  fallbackComponent: React.FunctionComponent<{ reload: () => any }>
  children: ReactNode
  notifier: ErrorNotifier
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  static defaultProps = {
    fallbackComponent: ErrorFallback,
    notifier: errorNotifier,
  }

  constructor(props: Props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    const { notifier } = this.props
    notifier.notify(error, errorInfo)
  }

  reload = () => {
    this.setState({ hasError: false })
  }

  render() {
    const { hasError } = this.state
    const { children, fallbackComponent: FallbackComponent } = this.props

    if (hasError) {
      return <FallbackComponent reload={this.reload} />
    }

    return children
  }
}

export default ErrorBoundary
