import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { PanelBody, FontSizePicker } from '@wordpress/components';
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
import getAttributes from './attributes.json';

registerBlockType( metadata.name, {
	attributes: getAttributes,
	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		// Get Unique ID for the <BaseControl>
		const randomID = randomString();

		// Default Font Sizes
		const fontSizes = [
			{
				name: __( 'Small', 'email-via-emailjs-blocks' ),
				slug: 'small',
				size: 12,
			},
			{
				name: __( 'Medium', 'email-via-emailjs-blocks' ),
				slug: 'Medium',
				size: 19,
			},
			{
				name: __( 'Big', 'email-via-emailjs-blocks' ),
				slug: 'big',
				size: 26,
			},
		];

		return (
			<>
				<InspectorControls>
					<PanelBody
						initialOpen={ false }
						title={ __(
							'Color Settings',
							'email-via-emailjs-blocks'
						) }
					>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Label Text Color',
								'email-via-emailjs-blocks'
							) }
							target="color"
							default={ attributes.color }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Background Color',
								'email-via-emailjs-blocks'
							) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Typography', 'email-via-emailjs-blocks' ) }
					>
						<FontSizePicker
							__nextHasNoMarginBottom
							withSlider
							fallbackFontSize={ 19 }
							fontSizes={ fontSizes }
							value={ attributes.fontSize }
							onChange={ ( val ) => {
								setAttributes( { fontSize: val } );
							} }
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
					<RichText
						id={ randomID }
						tagName="div"
						value={ attributes.headline }
						onChange={ ( headline ) =>
							setAttributes( { headline } )
						}
						placeholder={ __(
							'Contact Us',
							'email-via-emailjs-blocks'
						) }
						className="emailjs-headline"
						style={ {
							color: attributes.color,
							backgroundColor: attributes.bg_Color,
							fontSize: attributes.fontSize,
						} }
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();

		return (
			<div
				{ ...blockProps }
				style={ {
					textAlign: attributes.textAlign,
					color: attributes.color,
					backgroundColor: attributes.bg_Color,
					fontSize: attributes.fontSize,
				} }
			>
				<RichText.Content
					{ ...blockProps }
					value={ attributes.headline }
				/>
			</div>
		);
	},
} );
