import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import jsonp from "jsonp"

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');
	const [validEmail, setValidEmail] = useState(true);
	console.log('regex.test(email)',validEmail)

	const updateAndValidateEmail = (e) => {
		//eslint-disable-next-line
		const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		setValidEmail(regex.test(e.target.value));
		setEmail(e.target.value);
	}
	const sendData = (e) => {
		e.preventDefault();
		setStatus('Sending...')
		console.log('email',email)
		const url = 'https://bigcartel.us18.list-manage.com/subscribe/post?u=2f28a1660890d2f972dc09983&amp;id=56aa869c01'
		jsonp(url, { param: "c" }, (err, data) => {
			console.log('err', err)
			console.log('data', data)
			if (data.msg.includes("already subscribed")) {
				setStatus('Sorry, you\'re already subscribed!')
			} else if (err) {
				setStatus('Error, please try again!')
			} else if (data.result !== 'success') {
				setStatus('Error, please try again!')
			} else {
				setStatus('Subscribed!')
			};
		  });
	}
	return( 
	<Layout>
		<img
			alt="top product"
			className="top-image"
			src='/img/vwd-logo-censored-3-copy.png'
	  	/>
		<h2
			className="has-text-weight-bold is-size-1 header-with-background"
			style={{
				textAlign: 'center',
				color: 'white',
				padding: '1rem',
			}}
			>
			Subscribe to our Newsletter
		</h2>
		<section className="section main-section">
          	<div className="container">
				<div className="content contact-page">
					<div id="mc_embed_signup">
						<Box
							component="form"
							noValidate
							autoComplete="off"
							onSubmit={sendData}
							className="validate contact__form"
						>
							<div id="mc_embed_signup_scroll">
								<div className="field">
									<label htmlFor="mce-EMAIL">Subscribe</label>
								</div>
								<div className="field control">
									<TextField 
										label="Email Address" 
										variant="filled" 
										onChange={updateAndValidateEmail} 
										value={email} 
										type="email" 
										fullWidth
										error={!validEmail}
										sx={{
											backgroundColor: "white",
										}}
									/>
								</div>
								{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
								<div id="false-mail" aria-hidden="true"><input type="text" name="b_2f28a1660890d2f972dc09983_56aa869c01" tabIndex="-1" defaultValue="" /></div>
								<div className="clear field">
									<Button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button is-link" >Submit</Button>
								</div>
							</div>
						</Box>
					</div>
				</div>
				{status}
			</div>
		</section>
	</Layout>
	)
}

export default Subscribe;
