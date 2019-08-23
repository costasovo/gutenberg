/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		url,
		text,
		title,
		backgroundColor,
		textColor,
		customBackgroundColor,
		customTextColor,
		gradient,
		linkTarget,
		rel,
	} = attributes;

	const textClass = getColorClassName( 'color', textColor );
	const backgroundClass = ! gradient && getColorClassName( 'background-color', backgroundColor );

	const buttonClasses = classnames( 'wp-block-button__link', {
		'has-text-color': textColor || customTextColor,
		[ textClass ]: textClass,
		'has-background': backgroundColor || customBackgroundColor || gradient,
		[ backgroundClass ]: backgroundClass,
	} );

	const buttonStyle = {
		backgroundColor: backgroundClass || gradient ? undefined : customBackgroundColor,
		background: gradient ? gradient : undefined,
		color: textClass ? undefined : customTextColor,
	};

	return (
		<div>
			<RichText.Content
				tagName="a"
				className={ buttonClasses }
				href={ url }
				title={ title }
				style={ buttonStyle }
				value={ text }
				target={ linkTarget }
				rel={ rel }
			/>
		</div>
	);
}
