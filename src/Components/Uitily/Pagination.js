import React from 'react'
import ReactPaginate from "react-paginate";

const Pagination = () => {

    const handlePageClick = () => { };
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={100}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item my-3"}
            pageLinkClassName={"page-link my-3"}
            previousClassName={"page-item my-3"}
            nextClassName={"page-item my-3"}
            previousLinkClassName={"page-link my-3"}
            nextLinkClassName={"page-link my-3"}
            breakClassName={"page-item my-3"}
            breakLinkClassName={"page-link my-3"}
            activeClassName={"active"}
        />
    )
}

export default Pagination;