// app/signup/page.tsx
import { Container, Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import AuthForm from '@/components/AuthForm';


export default function SignupPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          注册
        </Typography>
        <AuthForm mode="signup" />
        <Box sx={{ mt: 2 }}>
          <Link component={NextLink} href="/login">
            已有账户？立即登录
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
