/* eslint-disable quote-props, quotes, comma-dangle */
export const formData = {
	"id": "1",
	"name": "A GDPR friendly form",
	"body": [
		{
			"type": "text",
			"name": "First name",
			"id": "first_name",
			"unique": "1",
			"static": "0",
			"params": {
				"label": "First name"
			},
			"position": "1"
		},
		{
			"type": "text",
			"name": "Email",
			"id": "email",
			"unique": "0",
			"static": "1",
			"params": {
				"label": "Email",
				"required": "true"
			},
			"position": "2"
		},
		{
			"type": "html",
			"name": "Custom text or HTML",
			"id": "html",
			"unique": "0",
			"static": "0",
			"params": {
				"text": "We keep your data private and share your data only with third parties that make this service possible. See our Privacy Policy for more information.",
				"nl2br": "0"
			},
			"position": "3"
		},
		{
			"type": "submit",
			"name": "Submit",
			"id": "submit",
			"unique": "0",
			"static": "1",
			"params": {
				"label": "Subscribe!"
			},
			"position": "4"
		}
	],
	"settings": {
		"segments": [
			"3"
		],
		"on_success": "message",
		"success_message": "Check your inbox or spam folder to confirm your subscription.",
		"success_page": "5",
		"segments_selected_by": "admin"
	},
	"styles": "/* form */\n.mailpoet_form {\n\n}\n\n/* paragraphs (label + input) */\n.mailpoet_paragraph {\n  line-height:20px;\n}\n\n/* labels */\n.mailpoet_segment_label,\n.mailpoet_text_label,\n.mailpoet_textarea_label,\n.mailpoet_select_label,\n.mailpoet_radio_label,\n.mailpoet_checkbox_label,\n.mailpoet_list_label,\n.mailpoet_date_label {\n  display:block;\n  font-weight:bold;\n}\n\n/* inputs */\n.mailpoet_text,\n.mailpoet_textarea,\n.mailpoet_select,\n.mailpoet_date_month,\n.mailpoet_date_day,\n.mailpoet_date_year,\n.mailpoet_date {\n  display:block;\n}\n\n.mailpoet_text,\n.mailpoet_textarea {\n  width:200px;\n}\n\n.mailpoet_checkbox {\n}\n\n.mailpoet_submit input {\n}\n\n.mailpoet_divider {\n}\n\n.mailpoet_message {\n}\n\n.mailpoet_validate_success {\n  font-weight: 600;\n  color:#468847;\n}\n\n.mailpoet_validate_error {\n  color:#B94A48;\n}\n\n.mailpoet_form_loading {\n  width: 30px;\n  text-align: center;\n  line-height: normal;\n}\n\n.mailpoet_form_loading > span {\n  width: 5px;\n  height: 5px;\n  background-color: #5b5b5b;\n}",
	"created_at": "2019-09-05 10:48:26",
	"updated_at": "2019-09-05 10:48:26",
	"deleted_at": null
};
/* eslint-enable quote-props, quotes, comma-dangle */

export function getBlocks( data ) {
	return data.body.map( ( item ) => {
		const mapped = {
			clientId: item.id,
			isValid: true,
			innerBlocks: [],
		};
		switch ( item.type ) {
			case 'text':
				mapped.name = 'mailpoet-form/input-field';
				mapped.attributes = {
					label: item.params.label,
					fieldType: item.name === 'Email' ? 'email' : 'text',
					fieldName: item.id,
				};
				return mapped;
			case 'submit':
				mapped.name = 'mailpoet-form/submit-button';
				mapped.attributes = {
					label: item.params.label,
				};
				return mapped;
			case 'html':
				mapped.name = 'core/html';
				mapped.attributes = {
					content: item.params.text,
				};
				return mapped;
		}
		return null;
	} ).filter( Boolean );
}
