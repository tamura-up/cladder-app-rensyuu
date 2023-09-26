import { Box, Container, Paper, Typography } from '@mui/material';
import CreateForm from '@/components/ladders/applications/create/CreateForm';
import Link from 'next/link';
import { useCurrentUser } from '@/components/shared/CurrentUser/hooks/useCurrentUser';

const CreateApplicationContainer = () => {

  return (
    <Container maxWidth='sm'>
      <Paper>
        <Box sx={{ p: 3 }}>
          <Typography component='h2' variant='h5'>ラダー評価申請</Typography>
          <CreateForm />
        </Box>
      </Paper>
      <Link href='/'>back</Link>
    </Container>
  );
};
export default CreateApplicationContainer;
