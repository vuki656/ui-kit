import { Button } from "./Button"
import { Meta, Story } from '@storybook/react'
import React from "react"

const config: Meta = {
    component: Button,
}

const ButtonStory: Story = () => {
    return (
        <Button>
            Hm
        </Button>
    )
}

export const Default = ButtonStory
export default config
