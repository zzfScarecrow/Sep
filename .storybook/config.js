import { configure } from '@storybook/react'
const r = require
function loadStories() {
  r('../src/components/nav-list/.stories.js')
}
configure(loadStories, module)
