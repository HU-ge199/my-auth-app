// app/page.tsx
'use client'; // 添加这行，因为首页有交互组件

import { Container, Box, Button, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function Home() {
  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <Typography component="h1" variant="h4" gutterBottom>
          欢迎使用认证系统
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          请选择操作
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* 修复 Link 使用方式 */}
          <Button 
            component={NextLink} 
            href="/login" 
            variant="contained" 
            size="large"
          >
            登录
          </Button>
          
          <Button 
            component={NextLink} 
            href="/signup" 
            variant="outlined" 
            size="large"
          >
            注册
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
