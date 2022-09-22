/* global emailjs */
window.addEventListener( 'load', () => {
	const EmailjsForm = document.querySelector( '#emailjs-form' );
	if ( EmailjsForm !== undefined && EmailjsForm !== null ) {
		// Check for the keys

		// Add Recaptcha
		if (
			EmailjsForm.hasAttribute( 'data-recaptcha-key' ) &&
			EmailjsForm.getAttribute( 'data-recaptcha-key' ) !== ''
		) {
			const grecaptcha = document.createElement( 'div' );
			grecaptcha.classList.add( 'g-recaptcha' );
			grecaptcha.setAttribute(
				'data-sitekey',
				EmailjsForm.getAttribute( 'data-recaptcha-key' )
			);
			const formButton = EmailjsForm.querySelector( 'button' );
			if ( formButton !== undefined && formButton !== null ) {
				EmailjsForm.insertBefore( grecaptcha, formButton );

				// Add Google Script
				const reScript = document.createElement( 'script' );
				reScript.id = 'recaptcha-script';
				reScript.async = true;
				reScript.defer = true;
				reScript.src = 'https://www.google.com/recaptcha/api.js';
				document.head.appendChild( reScript );
			}
		}

		// Get Response Target
		const EmailsjsTarget = EmailjsForm.querySelector(
			'.wp-block-mchymcak-emailjs-response'
		);

		if ( EmailsjsTarget !== undefined && EmailsjsTarget !== null ) {
			// Add CDN Script
			const cdn = document.createElement( 'script' );
			cdn.type = 'text/javascript';
			cdn.src =
				'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
			cdn.onload = () => {
				( function () {
					// Start emailjs
					emailjs.init(
						EmailjsForm.getAttribute( 'data-public-key' )
					);

					// On Submit Handler
					EmailjsForm.onsubmit = ( form ) => {
						// Prevent Form From Submitting
						form.preventDefault();

						// Show The Response Message
						EmailsjsTarget.classList.toggle( 'show' );

						// Submit Message & Get Response
						emailjs
							.sendForm(
								EmailjsForm.getAttribute( 'data-service-key' ),
								EmailjsForm.getAttribute( 'data-template-id' ),
								'#emailjs-form'
							)
							.then(
								// Sucess Message
								function () {
									// Fallback Success Message If Not Provided
									if (
										EmailsjsTarget.childNodes.length === 0
									) {
										EmailsjsTarget.textContent =
											'Thank you!';
									}
								},
								// Fail Message
								function ( error ) {
									EmailsjsTarget.textContent( error );
								}
							);
					};
				} )();
			};

			document.head.appendChild( cdn );
		}
	}
} );
