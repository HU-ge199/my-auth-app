import { Container, Box, Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import AuthForm from '@/components/AuthForm'

export default function SignupPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AuthForm mode="signup" />
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            已有账号？{' '}
            <Link component={NextLink} href="/login" variant="body2">
              立即登录
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
