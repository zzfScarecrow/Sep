import * as React from 'react'
export interface TabsProps {
  data?: string
}

export default class Tabs extends React.Component<TabsProps> {
  scrollEvent: any
  resizeEvent: any
  timeout: any
  events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load'
  ]
  render() {
    return <div>Tabs</div>
  }
}
