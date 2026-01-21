import { Container, Box, Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
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
        <AuthForm mode="login" />
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            还没有账号？{' '}
            <Link component={NextLink} href="/signup" variant="body2">
              立即注册
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
