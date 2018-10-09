import * as React from 'react'
import { Row } from 'antd'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function noop() {}

export interface NavListProps {
  prefixCls?: string
  /**
   * Tab上的文案和对应的值
   */
  dataSource: Array<any>
  /**
   * 默认选中的值
   */
  defaultKey: string
  /**
   * 切换Tab时的回调
   */
  onChange: any
}

export interface NavListState {
  activeKey: string | undefined
}

export default class NavList extends React.Component<
  NavListProps,
  NavListState
> {
  static propTypes = {
    dataSource: PropTypes.array,
    defaultKey: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    prefixCls: 'sep-navlist'
  }

  state: NavListState = {
    activeKey: this.props.defaultKey
  }

  handleChange(key: string): void {
    const { dataSource = [], onChange = noop } = this.props
    let selectedEl = {}
    dataSource.forEach(ele => {
      if (ele.key === key) {
        selectedEl = ele
      }
    })
    this.setState({ activeKey: key }, () => {
      onChange(selectedEl)
    })
  }

  render() {
    let navItems = []
    const { activeKey } = this.state
    const { dataSource = [], prefixCls } = this.props
    const selectionPrefixCls = `${prefixCls}-selection`
    navItems = dataSource.map(ele => {
      const selectionCls = classNames(selectionPrefixCls, {
        [`${selectionPrefixCls}__active`]: ele.key === activeKey
      })
      return (
        <div
          className={selectionCls}
          key={ele.key}
          onClick={() => {
            this.handleChange(ele.key)
          }}
        >
          {ele.title}
        </div>
      )
    })
    return (
      <Row>
        <div className={prefixCls}>{navItems}</div>
      </Row>
    )
  }
}
