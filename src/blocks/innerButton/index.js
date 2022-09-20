import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, PanelBody, RangeControl } from '@wordpress/components';
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
import defaultAttributes from './attributes.json';

registerBlockType( metadata.name, {
	defaultAttributes,
	edit: ( props ) => {
		const { attributes, setAttributes } = props;

		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Design Settings', 'gutenpride' ) }>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Text Color', 'gutenpride' ) }
							target="text_Color"
							default={ attributes.text_Color }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Background Color', 'gutenpride' ) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
						<Divider />
						<RangeControl
							label={ __( 'Padding Horizontally', 'gutenpride' ) }
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
							label={ __( 'Padding Vertically', 'gutenpride' ) }
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
							label={ __( 'Border Color', 'gutenpride' ) }
							target="border_Color"
							default={ attributes.border_Color }
						/>
						<Divider />
						<RangeControl
							label={ __( 'Border Width', 'gutenpride' ) }
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
					<PanelBody title={ __( 'Button Settings', 'gutenpride' ) }>
						<TextControl
							label={ __( 'Type Attribute', 'gutenpride' ) }
							value={ attributes.type }
							onChange={ ( val ) =>
								setAttributes( { type: val } )
							}
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
				} }
			>
				{ attributes.button }
			</button>
		);
	},
} );
