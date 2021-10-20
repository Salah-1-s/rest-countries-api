import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="inherit" />
    </Box>
  );
}