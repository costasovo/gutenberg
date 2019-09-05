/**
 * Internal dependencies
 */
import icon from './icon';

const blockStyle = {
	backgroundColor: '#fff',
	color: '#fff',
	padding: '0px',
};

const buttonStyle = {
	borderColor: '#aaa',
	backgroundColor: '#ddd',
	color: '#333',
	padding: '10px 15px',
	fontSize: '20px',
};

export const name = 'mailpoet-form/submit-button';

export const settings = {
	title: 'Submit Button',
	icon,
	attributes: {
		label: {
			type: 'string',
			default: 'Submit',
		},
	},
	category: 'widgets',
	supports: {
		html: false,
	},
	edit( { attributes } ) {
		return <div style={ blockStyle }><button style={ buttonStyle }>{ attributes.label }</button></div>;
	},
	save() {
		return null;
	},
};
