/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary

import { render, useState, useEffect, useRef, Fragment } from '@wordpress/element';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
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
const defaultBlocks = BCMapper.mapToEditor( BCMapper.formData );

function App() {
	const [ blocks, updateBlocks ] = useState( defaultBlocks );

	const blocksRef = useRef();

	/* eslint-disable no-console */
	useEffect( () => {
		console.log( 'Current blocks' );
		console.log( blocks );
		console.log( 'Previous blocks' );
		console.log( blocksRef.current );
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
							<div className="editor-styles-wrapper">
								<BlockEditorKeyboardShortcuts />
								<WritingFlow>
									<ObserveTyping>
										<BlockList />
									</ObserveTyping>
								</WritingFlow>
							</div>
							<Popover.Slot />
						</BlockEditorProvider>
					</DropZoneProvider>
				</SlotFillProvider>
			</div>
		</Fragment>
	);
}

// registerCoreBlocks();
registerBlockType( submitBlock.name, submitBlock.settings );
registerBlockType( inputBlock.name, inputBlock.settings );
render(
	<App />,
	document.querySelector( '#app' )
);
