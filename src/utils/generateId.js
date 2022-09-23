export const generateID = ( ID ) => {
	return 'emailjs-block-' + ID.replace( /-/g, '' ).replace( /[0-9]/g, '' );
};
