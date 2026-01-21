// app/login/page.tsx
import { Container, Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          登录
        </Typography>
        <AuthForm mode="login" />
        <Box sx={{ mt: 2 }}>
          <Link component={NextLink} href="/signup">
            没有账户？立即注册
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
