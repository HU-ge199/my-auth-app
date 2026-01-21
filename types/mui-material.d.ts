// mui.d.ts
declare module '@mui/material' {
  export * from '@mui/material/index';
}

declare module '@mui/material/Link' {
  import { LinkProps } from '@mui/material/Link';
  const Link: React.ComponentType<LinkProps>;
  export default Link;
}
