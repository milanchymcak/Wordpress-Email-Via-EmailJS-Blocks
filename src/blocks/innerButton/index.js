import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	TextControl,
	PanelBody,
	RangeControl,
	FontSizePicker,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import NewColorPalette from '../.././components/NewColorPalette';
import Divider from '../.././components/Divider';

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
						title={ __( 'Design Settings', 'email-via-emailjs-blocks' ) }
					>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Text Color', 'email-via-emailjs-blocks' ) }
							target="text_Color"
							default={ attributes.text_Color }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Background Color', 'email-via-emailjs-blocks' ) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
						<Divider />
						<RangeControl
							label={ __(
								'Padding Horizontally',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.padding_hor }
							onChange={ ( val ) =>
								setAttributes( { padding_hor: val } )
							}
							min={ 0 }
							max={ 30 }
							initialPosition={ 15 }
							renderTooltipContent={ ( value ) => value + 'px' }
						/>
						<Divider />
						<RangeControl
							label={ __(
								'Padding Vertically',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.padding_vert }
							onChange={ ( val ) =>
								setAttributes( { padding_vert: val } )
							}
							min={ 0 }
							max={ 30 }
							initialPosition={ 5 }
							renderTooltipContent={ ( value ) => value + 'px' }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Border Color', 'email-via-emailjs-blocks' ) }
							target="border_Color"
							default={ attributes.border_Color }
						/>
						<Divider />
						<RangeControl
							label={ __( 'Border Width', 'email-via-emailjs-blocks' ) }
							value={ attributes.border_Width }
							onChange={ ( val ) =>
								setAttributes( { border_Width: val } )
							}
							min={ 0 }
							max={ 10 }
							initialPosition={ 1 }
							renderTooltipContent={ ( value ) => value + 'px' }
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Button Settings', 'email-via-emailjs-blocks' ) }
					>
						<TextControl
							label={ __( 'Type Attribute', 'email-via-emailjs-blocks' ) }
							value={ attributes.type }
							onChange={ ( val ) =>
								setAttributes( { type: val } )
							}
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Typography', 'email-via-emailjs-blocks' ) }
					>
						<FontSizePicker
							__nextHasNoMarginBottom
							withSlider
							fallbackFontSize={ 18 }
							fontSizes={ fontSizes }
							value={ attributes.fontSize }
							onChange={ ( val ) => {
								setAttributes( { fontSize: val } );
							} }
						/>
					</PanelBody>
				</InspectorControls>
				<BlockControls group="block" />
				<div
					{ ...useBlockProps( { className: attributes.textAlign } ) }
				>
					<RichText
						tagName="button"
						allowedFormats={ [] }
						value={ attributes.button }
						onChange={ ( val ) =>
							setAttributes( { input: val, button: val } )
						}
						placeholder={ attributes.placeholder }
						style={ {
							paddingTop: attributes.padding_vert,
							paddingBottom: attributes.padding_vert,
							paddingLeft: attributes.padding_hor,
							paddingRight: attributes.padding_hor,
							backgroundColor: attributes.bg_Color,
							borderColor: attributes.border_Color,
							borderWidth: attributes.border_Width,
							color: attributes.text_Color,
							fontSize: attributes.fontSize,
						} }
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		return (
			<button
				type={ attributes.type }
				style={ {
					paddingTop: attributes.padding_vert,
					paddingBottom: attributes.padding_vert,
					paddingLeft: attributes.padding_hor,
					paddingRight: attributes.padding_hor,
					backgroundColor: attributes.bg_Color,
					borderColor: attributes.border_Color,
					borderWidth: attributes.border_Width,
					color: attributes.text_Color,
					fontSize: attributes.fontSize,
				} }
			>
				{ attributes.button }
			</button>
		);
	},
} );
