// app/login/page.tsx
'use client';

import { Container, Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography component="h1" variant="h4" gutterBottom>
          登录
        </Typography>
        
        <AuthForm mode="login" />
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          {/* 修复 Link 使用方式 */}
          <Link href="/signup" component={NextLink} variant="body2">
            没有账户？立即注册
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
