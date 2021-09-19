import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(true);
	const url = 'https://bigcartel.us18.list-manage.com/subscribe/post?u=2f28a1660890d2f972dc09983&amp;id=56aa869c01'

	const updateAndValidateEmail = (e) => {
		//eslint-disable-next-line
		const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
		setValidEmail(regex.test(e.target.value));
		setEmail(e.target.value);
	}
	const submit = (e, subscribe)=> {
		e.preventDefault();
		subscribe({'EMAIL': email})
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
						<MailchimpSubscribe url={url}
							render={({ subscribe, status, message }) => (
								<Box
									component="form"
									noValidate
									autoComplete="off"
									onSubmit={(e) => submit(e, subscribe)}
									className="validate contact__form"
								>
									{/* <CustomForm onSubmitted={formData => subscribe(formData)} /> */}
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
									<div className="clear field">
										<Button type="submit" value="Subscribe" name="subscribe" className="button is-link" disabled={!validEmail}>Submit</Button>
									</div>
									{status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
									{status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
									{status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
								</Box>

							)}
						/>
					</div>
				</div>
			</div>
		</section>
	</Layout>
	)
}

export default Subscribe;
