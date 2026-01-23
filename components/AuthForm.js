// components/AuthForm.js
'use client';

import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
  Snackbar,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function AuthForm({ mode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateEmail = (email) => {
    // 空值检查
    if (!email || email.trim() === '') {
      return '邮箱不能为空';
    }
    
    // 非法字符检查
    const illegalChars = /[<>\/\\;'"[\]{}|`~*&^%$#()+=]/;
    if (illegalChars.test(email)) {
      return '邮箱包含非法字符';
    }
    
    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return '邮箱格式不正确，请输入有效的邮箱地址';
    }
    
    return '';
  };

  const validatePassword = (password) => {
    // 空值检查
    if (!password || password.trim() === '') {
      return '密码不能为空';
    }
    
    // 密码长度检查
    if (password.length < 6) {
      return '密码长度至少6位字符';
    }
    
    // 非法字符检查
    const illegalChars = /[<>\/\\;'"[\]{}|`~]/;
    if (illegalChars.test(password)) {
      return '密码包含非法字符';
    }
    
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    // 空值检查
    if (!confirmPassword || confirmPassword.trim() === '') {
      return '请确认密码';
    }
    
    // 密码匹配检查
    if (password !== confirmPassword) {
      return '两次输入的密码不一致';
    }
    
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');
    setShowSuccess(false);
    
    // 验证所有字段
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    let confirmPasswordError = '';
    
    if (mode === 'signup') {
      confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    }
    
    setFieldErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });
    
    // 如果有验证错误，停止提交
    if (emailError || passwordError || confirmPasswordError) {
      setLoading(false);
      return;
    }
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (mode === 'login') {
        // 模拟用户验证
        const testUsers = [
          { email: 'user@example.com', password: 'password123' },
          { email: 'test@test.com', password: '123456' },
        ];
        
        const userExists = testUsers.some(
          user => user.email === formData.email && user.password === formData.password
        );
        
        if (userExists) {
          setSuccessMessage('登录成功！');
          setShowSuccess(true);
        } else {
          setError('邮箱不存在或密码错误');
        }
      } else {
        // 注册成功逻辑
        setSuccessMessage('注册成功！请前往登录页面');
        setShowSuccess(true);
        
        // 清空表单
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
        });
        
        setFieldErrors({
          email: '',
          password: '',
          confirmPassword: '',
        });
      }
    } catch (err) {
      setError('网络错误，请稍后重试');
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
    
    // 清除当前字段的错误
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        <TextField
          fullWidth
          label="电子邮箱"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
          margin="normal"
          required
        />
        
        <TextField
          fullWidth
          label="密码"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!fieldErrors.password}
          helperText={fieldErrors.password}
          margin="normal"
          required
        />
        
        {mode === 'signup' && (
          <TextField
            fullWidth
            label="确认密码"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!fieldErrors.confirmPassword}
            helperText={fieldErrors.confirmPassword}
            margin="normal"
            required
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

      {/* 注册成功提示 */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
