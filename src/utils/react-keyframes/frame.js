// This is from react-keyframes

// Packages
import React from 'react'
import PropTypes from 'prop-types'

export default class Frame extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    component: PropTypes.any,
    duration: PropTypes.number,
    onRender: PropTypes.func
  }

  static defaultProps = {
    duration: 0,
    onRender: () => {}
  }

  componentDidMount() {
    this.props.onRender()
  }

  componentDidUpdate() {
    this.props.onRender()
  }

  render() {
    const { component } = this.props
    const props = {}

    Object.keys(this.props).forEach(k => {
      if (Frame.propTypes[k]) {
        return
      }
      props[k] = this.props[k]
    })
    if (component === 'Fragment') {
      return React.createElement(React.Fragment, {}, this.props.children)
    }
    return React.createElement(component, props, this.props.children)
  }
}
