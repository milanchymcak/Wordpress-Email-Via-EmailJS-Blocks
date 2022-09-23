import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { TextControl, PanelBody, RangeControl } from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	BlockControls,
	BlockAlignmentToolbar,
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
			headline: __( 'Feel free to message us', 'email-via-emailjs-blocks' ),
		},
	],
	[
		'mchymcak/emailjs-input',
		{
			name: 'user_name',
			type: 'name',
			label: __( 'Full Name', 'email-via-emailjs-blocks' ),
			placeholder: 'John Snow',
		},
	],
	[
		'mchymcak/emailjs-input',
		{
			name: 'user_email',
			type: 'email',
			label: __( 'Your Email', 'email-via-emailjs-blocks' ),
			placeholder: 'email@email.com',
		},
	],
	[
		'mchymcak/emailjs-textarea',
		{
			label: __( 'Your Message', 'email-via-emailjs-blocks' ),
		},
	],
	[
		'mchymcak/emailjs-button',
		{
			type: 'submit',
		},
	],
	[
		'mchymcak/emailjs-response',
		{
			message: __( 'Thank you for your message!', 'email-via-emailjs-blocks' ),
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
					<PanelBody
						title={ __( 'EmailJS Settings', 'email-via-emailjs-blocks' ) }
					>
						<TextControl
							label={ __( 'Public Key', 'email-via-emailjs-blocks' ) }
							value={ attributes.public_Key }
							onChange={ ( val ) =>
								setAttributes( { public_Key: val } )
							}
						/>
						<TextControl
							label={ __( 'Template ID', 'email-via-emailjs-blocks' ) }
							value={ attributes.template_ID }
							onChange={ ( val ) =>
								setAttributes( { template_ID: val } )
							}
						/>
						<TextControl
							label={ __( 'Service ID', 'email-via-emailjs-blocks' ) }
							value={ attributes.service_ID }
							onChange={ ( val ) =>
								setAttributes( { service_ID: val } )
							}
						/>
						<TextControl
							label={ __(
								'Recaptcha Key (optional)',
								'email-via-emailjs-blocks'
							) }
							value={ attributes.recaptcha_key }
							onChange={ ( val ) =>
								setAttributes( { recaptcha_key: val } )
							}
						/>
					</PanelBody>
					<PanelBody
						initialOpen={ false }
						title={ __( 'Contact Form Settings', 'email-via-emailjs-blocks' ) }
					>
						<NewColorPalette
							attributes={ attributes }
							setAttributes={ setAttributes }
							label={ __( 'Background Color', 'email-via-emailjs-blocks' ) }
							target="bg_Color"
							default={ attributes.bg_Color }
						/>
						<Divider />
						<RangeControl
							label={ __( 'Padding', 'email-via-emailjs-blocks' ) }
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
					{ ...useBlockProps( {
						className: 'align' + attributes.blockAlign,
					} ) }
					style={ {
						padding: attributes.padding,
						backgroundColor: attributes.bg_Color,
						borderColor: attributes.border_Color,
						borderWidth: attributes.border_Width,
					} }
				>
					<BlockControls>
						<BlockAlignmentToolbar
							value={ attributes.blockAlign }
							onChange={ ( blockAlign ) => {
								setAttributes( { blockAlign } );
							} }
						/>
					</BlockControls>
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
				className={ [
					metadata.textdomain,
					'align' + attributes.blockAlign,
				].join( ' ' ) }
				style={ {
					padding: attributes.padding,
					backgroundColor: attributes.bg_Color,
					borderColor: attributes.border_Color,
					borderWidth: attributes.border_Width,
				} }
			>
				<form
					action="#"
					method="post"
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
