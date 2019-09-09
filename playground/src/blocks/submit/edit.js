/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n/src';
import { Fragment } from '@wordpress/element';

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

const SubmitEdit = ( { attributes, setAttributes } ) => {
	const changeLabel = ( value ) => {
		setAttributes( { label: value } );
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Submit button settings' ) }>
				<TextControl
					label={ __( 'Button label' ) }
					value={ attributes.label }
					onChange={ changeLabel }
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<Fragment>
			{ inspectorControls }
			<div style={ blockStyle }><button style={ buttonStyle }>{ attributes.label }</button></div>
		</Fragment>
	);
};

export default SubmitEdit;
