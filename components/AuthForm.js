// components/AuthForm.js
'use client';

import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

export default function AuthForm({ mode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // 验证
    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      setError('密码不匹配');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('密码至少需要6位字符');
      setLoading(false);
      return;
    }

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert(`${mode === 'login' ? '登录' : '注册'}成功！`);
    } catch (err) {
      setError('操作失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      
      <TextField
        fullWidth
        label="邮箱地址"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        margin="normal"
      />
      
      <TextField
        fullWidth
        label="密码"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        required
        margin="normal"
      />
      
      {mode === 'signup' && (
        <TextField
          fullWidth
          label="确认密码"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          margin="normal"
        />
      )}
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
        size="large"
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : mode === 'login' ? (
          '登录'
        ) : (
          '注册'
        )}
      </Button>
    </Box>
  );
}