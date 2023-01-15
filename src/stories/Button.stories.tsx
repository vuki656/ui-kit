import type {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react'
import React from 'react'

import { Button } from './Button'

const config: ComponentMeta<typeof Button> = {
    argTypes: {
        active: {
            defaultValue: false,
            type: 'boolean',
        },
    },
    component: Button,
}

const ButtonStory: ComponentStory<typeof Button> = (props) => {
    return (
        <Button {...props}>
            Hm
        </Button>
    )
}

export const Default = ButtonStory
export default config
