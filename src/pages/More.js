// import React from "react"
// import  {Requirement}  from "../__mocks__/Requirement"
//  const More = () => {
//     return (
//       <div>
//         {Requirement.map((item) => {
//           return (
//             <div
//               style={{
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 float: "left",
//                 margin: "20px",
//               }}
//             >
//               <h1>{item.title}</h1>
//               <h4>{item.description}</h4>
//               <h5>{item.createdAt}</h5>
//               <h6>{item.totalDownloads}</h6>
//               <img src={item.img} style={{ width: "200px", height: "200px" }} alt="" />
//             </div>
//           );
//         })}
    
//       </div>
//     );
// }
// // More.propTypes = {
// //   Requirement: PropTypes.object.isRequired
// // };
// export default More;

import Head from "next/head";
import { Box, Container, Grid, Pagination,Avatar } from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { Requirement } from "src/__mocks__/Requirement";

const More = () => (
  <>
    <Head>
      <title>More Info | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {Requirement.map((item) => (
              <Grid item key={item.id} lg={4} md={6} xs={12}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

More.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default More;


