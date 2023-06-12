import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="900" fontSize="1.7rem">
      Cinema<span style={{ color: theme.palette.primary.main }}>TN</span>
    </Typography>
  );
};

export default Logo;