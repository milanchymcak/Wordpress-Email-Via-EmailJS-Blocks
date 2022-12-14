import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
	TextControl,
	PanelBody,
	RangeControl,
	SelectControl,
	BaseControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	RichText,
} from '@wordpress/block-editor';
import NewColorPalette from '../.././components/NewColorPalette';
import Divider from '../.././components/Divider';
import { randomString } from '../.././utils/randomString';
import { generateID } from '../.././utils/generateId';

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
		const uniqueID = generateID( props.clientId );

		const { attributes, setAttributes } = props;

		// Set Unique ID for the <label> and following <input>
		useEffect( () => {
			setAttributes( { uniqueID } );
		}, [] );

		// Get Unique ID for the <BaseControl>
		const randomID = randomString();

		return (
			<>
				<InspectorControls>
					<PanelBody
						initialOpen={ false }
						title={ __(
							'Label Settings',
							'email-via-emailjs-blocks'
						) }
					>
						<SelectControl
							label={ __(
								'Hide Label',
								'email-via-emailjs-blocks'
							) }
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
							label={ __(
								'Label Content',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.label }
							onChange={ ( val ) =>
								setAttributes( { label: val } )
							}
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Label Text Color',
								'email-via-emailjs-blocks'
							) }
							target="label_Color"
							default={ attributes.label_Color }
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Background Color',
								'email-via-emailjs-blocks'
							) }
							target="label_Color"
							default={ attributes.bg_Color }
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __(
							'Input Settings',
							'email-via-emailjs-blocks'
						) }
					>
						<SelectControl
							label={ __(
								'Required Field',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.required }
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
								setAttributes( { required: val } );
							} }
							__nextHasNoMarginBottom
						/>
						<Divider />
						<TextControl
							label={ __(
								'Name Attribute',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.name }
							onChange={ ( val ) =>
								setAttributes( { name: val } )
							}
						/>
						<Divider />
						<TextControl
							label={ __(
								'Type Attribute',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.type }
							onChange={ ( val ) =>
								setAttributes( { type: val } )
							}
						/>
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Input Text Color',
								'email-via-emailjs-blocks'
							) }
							target="input_Color"
							default={ attributes.input_Color }
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
						<Divider />
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __(
								'Border Color',
								'email-via-emailjs-blocks'
							) }
							target="border_Color"
							default={ attributes.border_Color }
						/>
						<Divider />
						<RangeControl
							label={ __(
								'Border Width',
								'email-via-emailjs-blocks'
							) }
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
				<BlockControls group="block" />
				<div
					{ ...useBlockProps( { className: attributes.textAlign } ) }
					key={ metadata.textdomain + '-' + [ attributes.id ] }
					style={ {
						color: attributes.label_Color,
					} }
				>
					<BaseControl
						id={ randomID }
						label={ attributes.label }
						__nextHasNoMarginBottom={ true }
						className={
							attributes.hiddenLabel === 'true'
								? 'hideLabel'
								: 'showLabel'
						}
					>
						<RichText
							id={ randomID }
							className={ metadata.textdomain + '-input' }
							allowedFormats={ [] }
							value={ attributes.input }
							onChange={ ( val ) =>
								setAttributes( {
									input: val,
									placeholder: val,
								} )
							}
							placeholder={ attributes.placeholder }
							style={ {
								color: attributes.input_Color,
								backgroundColor: attributes.bg_Color,
								borderColor: attributes.border_Color,
								borderWidth: attributes.border_Width,
							} }
						/>
					</BaseControl>
				</div>
			</>
		);
	},
	save: ( props ) => {
		const { attributes } = props;

		return (
			<>
				<label
					htmlFor={ attributes.uniqueID }
					className={
						attributes.hiddenLabel === 'true'
							? 'hideLabel'
							: 'showLabel'
					}
					style={ {
						color: attributes.label_Color,
					} }
				>
					{ attributes.label }
				</label>
				<RichText.Content
					required={ attributes.required === 'true' ? true : false }
					id={ attributes.uniqueID }
					tagName="input"
					type={ attributes.type }
					placeholder={ attributes.placeholder }
					name={ attributes.name }
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
