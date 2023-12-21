import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { findProductIndex } from "../../util/util";
import { server } from "../../config/index";

const ProductDetailsComponent = ({ product }) => {
    return (
        <>
        <Layout title={product?.title} parent="Home" sub="Shop" subChild={product?.title}>
            <div className="container">
                <ProductDetails product={product} />
            </div>
        </Layout>
        </>
    );
};

// export async function getStaticPaths() {
//     const res = await fetch(`${server}?action=product_list`)
//     const data = await res.json()
  
//     const paths = data.map((dt) => ({
//       params: { index: dt.slug },
//     }))
  
//     return { paths, fallback: false }
//   }
  

// export async function getServerSideProps({params}){
//      const request = await fetch(`${server}?action=product_list`);
//     const data = await request.json();
//     console.log('params--->',params)
//     const index = findProductIndex(data, params.index);   
//     return {
//         props:{
//             product: data[index]
//         }
//     }
// }

ProductDetailsComponent.getInitialProps = async(params) => {
    const request = await fetch(`${server}?action=product_list`);
    const data = await request.json();
    const index = findProductIndex(data, params.query.index);
    console.log('data--->',data[index],params)
    return { product: data[index]};
};



export default ProductDetailsComponent;
