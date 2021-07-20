import React from "react";

import { Button } from "./Button";

export default {
	title: "Example/Button",
	component: Button,
	argTypes: {
		// Controls show which control style will show in the SB window
		backgroundColor: { control: "color" },
		size: { control: "select" },
	},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	//These args are gonna plug into our props to manipulate that on the original component
	primary: true,
	label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: "Button",
};

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "Button",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "Button",
};
