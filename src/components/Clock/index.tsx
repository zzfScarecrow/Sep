import * as React from 'react'
import * as ReactDOM from 'react-dom'

function getTargetRect(target: HTMLElement | Window): ClientRect {
  return target !== window
    ? (target as HTMLElement).getBoundingClientRect()
    : ({ top: 0, left: 0, bottom: 0 } as ClientRect)
}

console.log(getTargetRect)

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
    return <div>Clock</div>
  }
}

console.log('Tabs', Tabs)
