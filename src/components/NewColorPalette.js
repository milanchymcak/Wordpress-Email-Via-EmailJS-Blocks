import { BaseControl, ColorPicker } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { randomString } from '.././utils/randomString';

export default function NewColorPalette( props ) {
	const [ color, setColor ] = useState(
		props.default === undefined ? '#fff' : props.default
	);

	const randomID = randomString();
	return (
		<BaseControl label={ props.label } id={ randomID } help={ props.help }>
			<ColorPicker
				color={ color }
				id={ randomID }
				onChange={ ( newColor ) => {
					props.setAttributes( { [ props.target ]: newColor } );
					setColor( newColor.toString() );
				} }
				copyFormat="hex"
			/>
		</BaseControl>
	);
}
