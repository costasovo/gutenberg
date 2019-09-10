/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary

import { render, useState, useEffect, useRef, Fragment } from '@wordpress/element';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import {
	Button,
	Popover,
	SlotFillProvider,
	DropZoneProvider,
	Panel,
	PanelHeader,
	PanelBody,
	SelectControl,
	TextControl,
	TextareaControl,
} from '@wordpress/components';
// import { registerCoreBlocks } from '@wordpress/block-library';
import { registerBlockType } from '@wordpress/blocks';
import '@wordpress/format-library';

/**
 * Internal dependencies
 */
import './style.scss';
import * as BCMapper from './bc-mapper';
import * as submitBlock from './blocks/submit/index';
import * as inputBlock from './blocks/input/index';
import * as html from '../../packages/block-library/build/html';

/* eslint-disable no-restricted-syntax */
import '@wordpress/components/build-style/style.css';
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/block-library/build-style/theme.css';
import '@wordpress/format-library/build-style/style.css';
/* eslint-enable no-restricted-syntax */

const emailInput = {
	clientId: '1',
	name: 'mailpoet-form/input-field',
	isValid: true,
	attributes: {
		label: 'E-mail',
		fieldType: 'email',
		fieldName: 'label',
	},
	innerBlocks: [],
};

const submitButton = {
	clientId: '2',
	name: 'mailpoet-form/submit-button',
	isValid: true,
	attributes: {
		label: 'Subscribe',
	},
	innerBlocks: [],
};

// const defaultBlocks = [ emailInput, submitButton ];
const defaultBlocks = BCMapper.getBlocks( BCMapper.formData );

function App() {
	const [ blocks, updateBlocks ] = useState( defaultBlocks );
	const [ formName, updateFormName ] = useState( BCMapper.formData.name );
	const [ formStyles, updateFormStyles ] = useState( BCMapper.formData.styles );
	const [ formLists, updateFormLists ] = useState( [] );

	const blocksRef = useRef();

	const lists = [
		{
			value: 1,
			label: 'My First List',
		},
		{
			value: 2,
			label: 'VIP',
		},
	];

	/* eslint-disable no-console */
	useEffect( () => {
		console.log( 'Current blocks' );
		console.log( blocks );
		console.log( 'Previous blocks' );
		console.log( blocksRef.current );
		const emails = blocks.filter( ( block ) => ( block.clientId === 'email' ) );
		if ( !emails.length ) {
			alert( 'Can‘t delete email' );
			updateBlocks( blocksRef.current );
			return;
		}

		blocksRef.current = blocks;
	}, [ blocks ] );
	/* eslint-enable no-console */

	return (
		<Fragment>
			<div className="playground__header">
				<h1 className="playground__logo">Gutenberg Playground</h1>
			</div>
			<div className="playground__body">
				<SlotFillProvider>
					<DropZoneProvider>
						<BlockEditorProvider
							value={ blocks }
							onInput={ updateBlocks }
							onChange={ updateBlocks }
						>
							<div className="editor-styles-wrapper playground__editor mailpoet_form">
								<BlockEditorKeyboardShortcuts />
								<WritingFlow>
									<ObserveTyping>
										<BlockList />
									</ObserveTyping>
								</WritingFlow>
							</div>
							<Popover.Slot />
							<div className="playground__panel">
								<Panel>
									<PanelHeader label="Form Editor">{ formName }</PanelHeader>
									<PanelBody title="Form Settings">
										<TextControl label="Name" onChange={ updateFormName } value={ formName } />
										<SelectControl label="Lists" onChange={ updateFormLists } options={ lists } multiple />
										<Button isPrimary onClick={ () => ( alert( 'save' ) ) }>Save</Button>
									</PanelBody>
									<PanelBody title="Block Settings">
										<BlockInspector />
									</PanelBody>
									<PanelBody title="Form CSS">
										<TextareaControl value={ formStyles } onChange={ updateFormStyles }/>
									</PanelBody>
								</Panel>
							</div>
						</BlockEditorProvider>
					</DropZoneProvider>
				</SlotFillProvider>
			</div>
			<style dangerouslySetInnerHTML={ { __html: formStyles  } } />
		</Fragment>
	);
}

// registerCoreBlocks();
registerBlockType( submitBlock.name, submitBlock.settings );
registerBlockType( inputBlock.name, inputBlock.settings );
registerBlockType( html.name, Object.assign( {}, html.metadata, html.settings ) );
render(
	<App />,
	document.querySelector( '#app' )
);
