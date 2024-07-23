import React from "react"

class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught: ", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h1>Something went wrong.</h1>
          <p>
            We're sorry for the inconvenience. Please try refreshing the page or come back later.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
