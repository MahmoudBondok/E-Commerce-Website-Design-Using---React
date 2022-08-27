// import React, { useEffect } from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Uitily/Pagination';
// import axios from 'axios';
// import BaseURL from '../../Api/BaseURL';

const AllCategoryPage = () => {
    // const get = async () => {
    //     const res = await BaseURL.get("api/v1/categories/61ef54faf746a6816dee8e51/subcategories")
    //     console.log(res.data)
    // }
    // useEffect(() => {
    //     get();
    // }, [])

    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryContainer />
            <Pagination />
        </div>
    )
}

export default AllCategoryPage;