import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/stories.js')
}

configure(loadStories, module)
