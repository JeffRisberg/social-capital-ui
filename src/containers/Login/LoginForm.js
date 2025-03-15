import { Box, FormControlLabel, Checkbox, Button } from '@mui/material'
import styles from './Login.module.css'
import { InputTextField } from '../../Components/InputTextField/InputTextField'
import { fetchUserDetails } from '../../Redux/Actions/fetchUserDetails'
import { useTheme } from '@mui/material/styles'
import { useLoginStyles } from './Login.styles'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_USER_DETAILS_SUCCESS } from '../../Redux/Actions/constants'
import { useLocation } from 'react-router-dom'

export const LoginForm = () => {
    const navigate = useNavigate()

    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');

    const userProfile = useSelector((state) => state.userDetails[FETCH_USER_DETAILS_SUCCESS.paramName])
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const theme = useTheme()
    const loginStyles = useLoginStyles(theme)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && email.length) {
            dispatch(fetchUserDetails({ email }))
        }
    }

    const handleSSOClick = (e) => {
      e.preventDefault()
      window.location.href = `/aisearch/sso?token=${token}`
    }

    useEffect(() => {
        console.log(userProfile)
        if (userProfile && userProfile.id) {
            navigate('/home')
        }
    }, [userProfile, navigate])

    const handleEmailChange = (e) => {
        if (e?.target) {
            setEmail(e.target.value)
        }
    }

    return (
        <Box component="form" id={styles.loginForm} onSubmit={handleSubmit} noValidate>
            {/*
            <InputTextField
                required
                id="email"
                label="Work Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                autoFocus
            />
            <InputTextField required name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            <FormControlLabel sx={{ display: 'block', mb: '1rem' }} control={<Checkbox defaultChecked />} label={<TermsConditions />} />
            <Button sx={loginStyles.signInButton} onClick={handleSubmit} type="submit">
                Sign In
            </Button>
            */}
            <Button sx={loginStyles.ssoButton} onClick={handleSSOClick}>
                Sign In with SSO
            </Button>
        </Box>
    )
}

const TermsConditions = () => {
    return (
        <label id={styles.termsConditions}>
            I consent to the <span>Terms and Policy</span>.
        </label>
    )
}
