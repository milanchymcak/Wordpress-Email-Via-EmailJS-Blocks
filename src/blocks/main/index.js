import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, PanelBody, RangeControl } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	InnerBlocks,
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
import './style.scss';

/**
 * Internal Data
 */
import metadata from './block.json';
import getAttributes from './attributes.json';

/**
 * InnerBlocks Template
 */
const mainTemplate = [
	[
		'mchymcak/emailjs-headline',
		{
			headline: 'Feel free to message us!',
		},
	],
	[
		'mchymcak/emailjs-input',
		{
			name: 'user_name',
			type: 'name',
			label: 'Full Name',
			placeholder: 'John Snow',
		},
	],
	[
		'mchymcak/emailjs-input',
		{
			name: 'user_email',
			type: 'email',
			label: 'Your Email',
			placeholder: 'email@email.com',
		},
	],
	[
		'mchymcak/emailjs-textarea',
		{
			label: 'Your Message',
		},
	],
	[
		'mchymcak/emailjs-button',
		{
			type: 'submit',
		},
	],
];

/**
 * InnerBlocks Allowed Blocks
 */
const allowedBlocks = [
	'mchymcak/emailjs-headline',
	'mchymcak/emailjs-input',
	'mchymcak/emailjs-textarea',
	'mchymcak/emailjs-button',
	'core/paragraph',
	'core/cover',
];

/**
 * InnerBlocks Allowed Blocks
 */
registerBlockType( metadata.name, {
	attributes: getAttributes,
	edit: ( props ) => {
		const { attributes, setAttributes } = props;
		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'EmailJS Settings', 'gutenpride' ) }>
						<TextControl
							label={ __( 'Public Key', 'gutenpride' ) }
							value={ attributes.public_Key }
							onChange={ ( val ) =>
								setAttributes( { public_Key: val } )
							}
						/>
						<TextControl
							label={ __( 'Template ID', 'gutenpride' ) }
							value={ attributes.template_ID }
							onChange={ ( val ) =>
								setAttributes( { template_ID: val } )
							}
						/>
						<TextControl
							label={ __( 'Service ID', 'gutenpride' ) }
							value={ attributes.service_ID }
							onChange={ ( val ) =>
								setAttributes( { service_ID: val } )
							}
						/>
						<TextControl
							label={ __(
								'Recaptcha Key (optional)',
								'gutenpride'
							) }
							value={ attributes.recaptcha_key }
							onChange={ ( val ) =>
								setAttributes( { recaptcha_key: val } )
							}
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Contact Form Settings', 'gutenpride' ) }
					>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Background Color', 'gutenpride' ) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
						<Divider />
						<RangeControl
							label={ __( 'Padding', 'gutenpride' ) }
							value={ attributes.padding }
							onChange={ ( val ) =>
								setAttributes( { padding: val } )
							}
							min={ 0 }
							max={ 30 }
							initialPosition={ 15 }
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
				</InspectorControls>
				<div
					{ ...useBlockProps() }
					style={ {
						padding: attributes.padding,
						backgroundColor: attributes.bg_Color,
						borderColor: attributes.border_Color,
						borderWidth: attributes.border_Width,
					} }
				>
					<BlockControls group="block" />
					<InnerBlocks
						template={ mainTemplate }
						allowedBlocks={ allowedBlocks }
					/>
				</div>
			</>
		);
	},
	save: ( props ) => {
		const { attributes } = props;
		return (
			<div
				className={ metadata.textdomain }
				style={ {
					padding: attributes.padding,
					backgroundColor: attributes.bg_Color,
					borderColor: attributes.border_Color,
					borderWidth: attributes.border_Width,
				} }
			>
				<div id="emails-response"></div>
				<form
					id="emailjs-form"
					data-public-key={ attributes.public_Key }
					data-service-key={ attributes.service_ID }
					data-template-id={ attributes.template_ID }
					data-recaptcha-key={ attributes.recaptcha_key }
				>
					<InnerBlocks.Content />
				</form>
			</div>
		);
	},
} );
