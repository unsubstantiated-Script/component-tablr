import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";
	return (
		<button
			type='button'
			className={["storybook-button", `storybook-button--${size}`, mode].join(
				" ",
			)}
			style={backgroundColor && { backgroundColor }}
			{...props}>
			{label}
		</button>
	);
};

// Used to create manipulatable handles to render in SB
Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	backgroundColor: PropTypes.string,
	/**
	 * How large should the button be? These are our three options. Renders as a radio selection
	 */
	size: PropTypes.oneOf(["small", "medium", "large"]),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

//Sets defaults when the component first loads doesn't need to be specified in stories this way
Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: "medium",
	onClick: undefined,
};
