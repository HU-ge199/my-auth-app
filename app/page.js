import Link from 'next/link'
import { Container, Typography, Box, Button } from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          欢迎使用认证系统
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button 
            variant="contained" 
            component={Link} 
            href="/login"
            sx={{ mr: 2 }}
          >
            登录
          </Button>
          <Button 
            variant="outlined" 
            component={Link} 
            href="/signup"
          >
            注册
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
