import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { PanelBody, BaseControl } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	AlignmentControl,
	RichText,
} from '@wordpress/block-editor';
import NewColorPalette from '../.././components/NewColorPalette';
import Divider from '../.././components/Divider';
import { randomString } from '../.././utils/randomString';

/**
 *
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Internal Data
 */
import metadata from './block.json';
import defaultAttributes from './attributes.json';

registerBlockType( metadata.name, {
	defaultAttributes,
	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		// Get Unique ID for the <BaseControl>
		const randomID = randomString();

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Color Settings', 'gutenpride' ) }>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Label Text Color', 'gutenpride' ) }
							target="color"
							default={ attributes.color }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Background Color', 'gutenpride' ) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<AlignmentControl
						value={ attributes.textAlign }
						onChange={ ( nextAlign ) => {
							setAttributes( { textAlign: nextAlign } );
						} }
					/>
				</BlockControls>

				<div
					{ ...useBlockProps( { className: attributes.textAlign } ) }
				>
					<BaseControl
						id={ randomID }
						label={
							"Enter Contact Form Title: default is 'Contact Us'"
						}
						__nextHasNoMarginBottom={ true }
					>
						<RichText
							id={ randomID }
							tagName="div"
							value={ attributes.headline }
							onChange={ ( headline ) =>
								setAttributes( { headline } )
							}
							placeholder={ __( 'Contact Us…' ) }
							className="emailjs-headline"
							style={ {
								color: attributes.color,
								backgroundColor: attributes.bg_Color,
							} }
						/>
					</BaseControl>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div
				{ ...useBlockProps.save() }
				style={ {
					textAlign: attributes.textAlign,
					color: attributes.color,
					backgroundColor: attributes.bg_Color,
				} }
			>
				<RichText.Content
					{ ...useBlockProps.save() }
					value={ attributes.headline }
				/>
			</div>
		);
	},
} );
