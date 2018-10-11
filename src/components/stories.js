import React from 'react'
import { storiesOf } from '@storybook/react'
import NavList from '../../sep/es/NavList'
import '../../sep/es/NavList/style/index.css'

const dataSource = [
  {
    title: '全部',
    value: 0,
    key: 'total'
  },
  {
    title: '未开始',
    value: 3,
    key: 'not_start'
  },
  {
    title: '进行中',
    value: 4,
    key: 'in_doing'
  },
  {
    title: '已结束',
    value: 5,
    key: 'closed'
  },
  {
    title: '已取消',
    value: 6,
    key: 'canceled'
  }
]

const navListProps = {
  dataSource,
  defaultKey: 'total'
}

const onChange = data => {
  console.log(`Data: ${data.value}`)
}
storiesOf('NavList', module).add('Simple', () => (
  <NavList {...navListProps} onChange={onChange} />
))
