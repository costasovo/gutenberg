/**
 * Internal dependencies
 */
import icon from './icon';
import edit from './edit';

export const name = 'mailpoet-form/input-field';

export const settings = {
	title: 'Input Field',
	icon,
	category: 'widgets',
	attributes: {
		label: {
			type: 'string',
			default: 'Label',
		},
		fieldType: {
			type: 'string',
			default: 'text',
		},
		fieldName: {
			type: 'string',
			default: 'label',
		},
	},
	supports: {
		html: false,
	},
	edit,
	save() {
		return <div>Input</div>; // @todo Handle saving
	},
};
