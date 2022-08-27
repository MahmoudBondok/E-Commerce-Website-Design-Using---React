import React from 'react'
import Slider from '../../Components/Home/Silder';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandFeatured from '../../Components/Brand/BrandFeatured';

const HomePage = () => {
    return (
        <div>
            <Slider />
            <HomeCategory />
            <CardProductsContainer title="الأكثر مبيعا" btntitle="المزيد" pathText='/products' />
            <DiscountSection />
            <CardProductsContainer title="احدث الازياء" btntitle="المزيد" pathText='/products' />
            <BrandFeatured title="أشهر الماركات" btntitle="المزيد" />
        </div>
    )
}

export default HomePage;