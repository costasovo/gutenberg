/**
 * WordPress dependencies
 */
import {
	compose,
	withInstanceId,
} from '@wordpress/compose';

const blockStyle = {
	padding: '0px',
};

const inputStyle = {
	borderColor: '#666',
	color: '#333',
	padding: '10px',
	fontSize: '16px',
};

const labelStyle = {
	color: '#333',
};

const InputEdit = ( { instanceId, attributes } ) => {
	const id = `mp-input-id-${ instanceId }`;

	// if ( ! attributes.label ) {
	// 	setAttributes( { label: 'Label' } );
	// }
	//
	// if ( ! attributes.fieldType ) {
	// 	setAttributes( { fieldType: 'text' } );
	// }

	return (
		<div style={ blockStyle }>
			<label className="mailpoet_text_label" htmlFor={ id } style={ labelStyle }>{ attributes.label }<br />
				<input id={ id } style={ inputStyle } type={ attributes.fieldType } name="name" placeholder="placeholder" />
			</label>
		</div>
	);
};

export default compose( [
	withInstanceId,
] )( InputEdit );
