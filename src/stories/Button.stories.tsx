import type {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react'
import React from 'react'

import { Button } from './Button'

const config: ComponentMeta<typeof Button> = {
    args: {
        active: false
    },
    component: Button,
}

const ButtonStory: ComponentStory<typeof Button> = (props) => {
    return (
        <Button {...props}>
            Settings
        </Button>
    )
}

export const Default = ButtonStory
export default config
