import React from 'react'
import { Link } from 'gatsby';

const Pagination = ({
  base,
  currentPage,
  postsPerPage,
  skip,
  postsCount
}) => {
  const totalPages = Math.ceil(postsCount / postsPerPage)
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const hasPrevPage = prevPage >= 1
  const hasNextPage = nextPage <= totalPages

  return (
    <section className="c-pagination">
      <div className="l-container">
        <Link className={`c-pagination__arrow c-pagination__arrow--prevPage${!hasPrevPage ? ` c-pagination__arrow--disabled` : ''}`} to={`${base}/${prevPage}`}>Prev</Link>
        {Array.from({ length: totalPages }).map((_, i) => (
          currentPage === i + 1 ? <div className="c-pagination__page c-pagination__page--current" key={`pagination-${i}`}>{i + 1}</div> : <Link className="c-pagination__page" key={`pagination-${i}`} to={`${base}/${i > 0 ? i + 1 : ''}`}>{i+1}</Link>
        ))}
        <Link className={`c-pagination__arrow c-pagination__arrow--nextPage${!hasNextPage ? ` c-pagination__arrow--disabled` : ''}`} to={`${base}/${nextPage}`}>Next</Link>
      </div>
    </section>
  )
}

export default Pagination