import React from "react";

const Pagination = ({ pages, handlepagechange, pagenumber }) => {
  return (
    <div className="pages">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              onClick={() => handlepagechange(page)}
              key={page}
              className={page === pagenumber ? "page-item active" : "page-item"}
            >
              <a className="page-link" href="#">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
