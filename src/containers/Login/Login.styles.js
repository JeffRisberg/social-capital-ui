export const useLoginStyles = (theme) => {
	const { textRed } = theme.palette.mui07;

	const commonStyles = {
		width: '100%',
		textTransform: 'none',
		fontSize: '1rem',
		padding: '14px 12px',
		fontWeight: '500',
		lineHeight: '120%',
		borderRadius: '6px',
	}

	return {
		signInButton: {
			...commonStyles,
			color: 'white',
			mb: '1rem',
			background: 'linear-gradient(129.33deg, #ff7622 -3.29%, #ff5d5f 56.03%, #db4d9f 111.76%)',
			'&:hover':{
				background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), linear-gradient(129deg, #FF7622 -3.29%, #FF5D5F 56.03%, #DB4D9F 111.76%)'
			}
		},
		ssoButton: {
			...commonStyles,
			border: `2px solid ${textRed.main}`,
			color: textRed.main,
			'&:hover':{
				background: 'rgba(224, 0, 4, 0.1)',
				border: `2px solid ${textRed.dark}`
			}
		}
	}
}
