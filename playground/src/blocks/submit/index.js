/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';

export const name = 'mailpoet-form/submit-button';

export const settings = {
	title: 'Submit Button',
	icon,
	attributes: {
		label: {
			type: 'string',
			default: 'Submit',
		},
		borderRadius: {
			type: 'integer',
			default: 0,
		},
	},
	category: 'widgets',
	supports: {
		html: false,
		customClassName: false,
	},
	edit,
	save() {
		return null;
	},
};
