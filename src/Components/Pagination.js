import { useDispatch } from "react-redux";
import { setPage } from "../Services/Reducers/productReducer";

export default function Pagination(props) {
  const dispatch = useDispatch();

  function handleClickPaginationIndex(page) {
    dispatch(setPage(page));
  }

  function createPaginationIndexElement(index, selected, isDot = false) {
    return (
      <li key={index} className={`pagination__item ${selected ? "selected" : ""}`}>
        <button onClick={() => (isDot ? null : handleClickPaginationIndex(index))}>
          {isDot ? "..." : index}
        </button>
      </li>
    );
  }

  function createPaginationIndexElements(total, numProduct, page) {
    let n = Math.ceil(total / numProduct);
    const result = [];

    const start =
      page - 2 > 1 ? (page + 2 > n ? Math.max(page - 2 - (page + 2 - n), 1) : page - 2) : 1;
    const end =
      page + 2 >= n ? n : page - 2 < 1 ? Math.min(page + 2 + -(page - 2 - 1), n) : page + 2;

    for (let i = start; i <= end; i++) {
      const element = createPaginationIndexElement(i, i === page);

      result.push(element);
    }

    if (start - 1 === 1) {
      const element = createPaginationIndexElement(1, false);
      result.unshift(element);
    } else if (start - 1 > 1) {
      const firstElement = createPaginationIndexElement(1, false);
      const dotElement = createPaginationIndexElement(0, false, true);
      result.unshift(dotElement);
      result.unshift(firstElement);
    }

    if (end + 1 === n) {
      const element = createPaginationIndexElement(n, false);
      result.push(element);
    } else if (end + 1 < n) {
      const lastElement = createPaginationIndexElement(n, false);
      const dotElement = createPaginationIndexElement(n + 1, false, true);
      result.push(dotElement);
      result.push(lastElement);
    }

    return result;
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <button
            disabled={props.page === 1}
            onClick={() => handleClickPaginationIndex(props.page - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span>Previous</span>{" "}
          </button>
        </li>
        {createPaginationIndexElements(props.total, props.numProduct, props.page)}
        <li className="pagination__item">
          <button
            disabled={props.page === Math.ceil(props.total / props.numProduct)}
            onClick={() => handleClickPaginationIndex(props.page + 1)}
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}
