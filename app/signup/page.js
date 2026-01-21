// app/signup/page.tsx
'use client';

import { Container, Box, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography component="h1" variant="h4" gutterBottom>
          注册
        </Typography>
        
        <AuthForm mode="signup" />
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          {/* 修复 Link 使用方式 */}
          <Link href="/login" component={NextLink} variant="body2">
            已有账户？立即登录
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
