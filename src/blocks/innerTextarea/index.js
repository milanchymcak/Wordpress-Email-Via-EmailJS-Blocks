import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
	TextControl,
	PanelBody,
	RangeControl,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
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
		// Get Unique ID of the Block
		const uniqueID = props.clientId;

		const { attributes, setAttributes } = props;

		// Set Unique ID for the <label> and following <textarea>
		useEffect( () => {
			setAttributes( { uniqueID } );
		}, [] );

		return (
			<>
				<InspectorControls>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Label Settings', 'email-via-emailjs-blocks' ) }
					>
						<SelectControl
							label={ __( 'Hide Label', 'email-via-emailjs-blocks' ) }
							value={ attributes.hiddenLabel }
							options={ [
								{
									label: 'No',
									value: false,
								},
								{
									label: 'Yes',
									value: true,
								},
							] }
							onChange={ ( val ) => {
								setAttributes( { hiddenLabel: val } );
							} }
							__nextHasNoMarginBottom
						/>
						<Divider />
						<TextControl
							label={ __( 'Label Content', 'email-via-emailjs-blocks' ) }
							value={ attributes.label }
							onChange={ ( val ) =>
								setAttributes( { label: val } )
							}
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Label Text Color', 'email-via-emailjs-blocks' ) }
							target="label_Color"
							default={ attributes.label_Color }
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Input Settings', 'email-via-emailjs-blocks' ) }
					>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Input Text Color', 'email-via-emailjs-blocks' ) }
							target="input_Color"
							default={ attributes.input_Color }
						/>
						<Divider />
						<TextControl
							label={ __( 'Name Attribute', 'email-via-emailjs-blocks' ) }
							value={ attributes.name }
							onChange={ ( val ) =>
								setAttributes( { name: val } )
							}
						/>
						<Divider />
						<TextControl
							label={ __( 'Type Attribute', 'email-via-emailjs-blocks' ) }
							value={ attributes.type }
							onChange={ ( val ) =>
								setAttributes( { type: val } )
							}
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
				</InspectorControls>
				<div
					{ ...useBlockProps() }
					style={ {
						color: attributes.label_Color,
					} }
				>
					<BlockControls group="block" />
					<TextareaControl
						label={ attributes.label }
						placeholder={ attributes.textarea }
						onChange={ ( val ) =>
							setAttributes( { textarea: val } )
						}
						className={
							attributes.hiddenLabel === 'true'
								? 'hideLabel'
								: 'showLabel'
						}
						style={ {
							color: attributes.input_Color,
							backgroundColor: attributes.bg_Color,
							borderColor: attributes.border_Color,
							borderWidth: attributes.border_Width,
						} }
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		return (
			<>
				<label
					htmlFor={ attributes.uniqueID }
					style={ {
						color: attributes.label_Color,
					} }
					className={
						attributes.hiddenLabel === 'true'
							? 'hideLabel'
							: 'showLabel'
					}
				>
					{ attributes.label }
				</label>
				<textarea
					placeholder={ attributes.textarea }
					id={ attributes.uniqueID }
					name={ attributes.name }
					type={ attributes.type }
					style={ {
						color: attributes.input_Color,
						backgroundColor: attributes.bg_Color,
						borderColor: attributes.border_Color,
						borderWidth: attributes.border_Width,
					} }
				/>
			</>
		);
	},
} );
