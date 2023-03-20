import { FcNext, FcPrevious } from "react-icons/fc";

const Pagination = ({ page, totalPages, onPreviousClick, onNextClick }) => {
  return (
    <div className="pagination-container">
      <button onClick={onPreviousClick}>
        <FcPrevious />
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onNextClick}>
        <FcNext />
      </button>
    </div>
  );
};

export default Pagination;
