import type {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react'
import React from 'react'

import { Button } from './Button'

// TODO: defaultTypes deprecated https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args
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
            Settings
        </Button>
    )
}

export const Default = ButtonStory
export default config
