import React from 'react'
import { storiesOf } from '@storybook/react'

import NavList from './index'
import './style'
import { default as navListProps } from './story-props'

storiesOf('NavList', module).add('Simple', () => <NavList {...navListProps} />)
