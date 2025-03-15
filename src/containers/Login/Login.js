import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import LoginMarketing from '../../assets/img/login-marketing.png'
import Logo from '../../assets/img/logo-red.png'
import styles from './Login.module.css'
import { LoginForm } from './LoginForm'
import { LABELS } from '../../Utils/constants'

export const Login = () => {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          px: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ mb: 2, fontWeight: '500', color: 'textDark.dark' }} variant="h4">
          {LABELS.LOGIN_TITLE}
        </Typography>
        <Typography sx={{ mb: 5, color: 'textDark.main' }} variant="h5">
          {LABELS.LOGIN_COPY}
        </Typography>
        <img width={'100%'} src={LoginMarketing} alt={'Brand marketing image'} />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Box className="fancy-bg" id={styles.loginContainer}>
          <div id={styles.contentWrapper}>
            <img src={Logo} alt="Logo" />
            <Card sx={{ width: '50%', padding: '2rem' }} id={styles.card}>
              <CardContent sx={{ padding: '0' }}>
                <Typography sx={{ mb: 4, fontSize: '2.25rem', fontWeight: '600', color: 'textDark.dark' }} variant="h4">
                  {LABELS.SIGN_IN}
                </Typography>
                <Typography sx={{ mb: 2, fontSize: '1.5rem', fontWeight: '500', color: 'textDark.main' }} variant="h5">
                  {LABELS.SIGN_IN_SSO}
                </Typography>
                <LoginForm />
              </CardContent>
            </Card>
          </div>
        </Box>
      </Grid>
    </Grid>
  )
}
