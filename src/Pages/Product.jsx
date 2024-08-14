
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import Breadcrumb from '../Component/Breadcrum/Breadcrum'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

const Product = () => {
    const {all_Product} = useContext(ShopContext);

    const { productId } = useParams();

    const product = all_Product.find(e => e.id === Number(productId));

    return (
        <div>
            <Breadcrumb product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    );
};

export default Product;

