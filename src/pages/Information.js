import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Requirement } from "../__mocks__/Requirement"
import { Newinfo } from 'src/components/Information/Newinfo';
import { Newinfolist } from 'src/components/Information/Newinfo.list';
const Information = () => (
  <>
    <Head>
      <title>
        Information | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Newinfolist />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {Requirement.map((item) => (
              <Grid
                item
                key={item.id}
                
                lg={4}
                md={6}
                xs={12}
              >
                <Newinfo item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

Information.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Information ;
