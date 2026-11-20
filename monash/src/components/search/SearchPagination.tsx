export default function SearchPagination() {
  return (
    <nav aria-label="pagination">
      <ul className="pagination pagination-lg justify-content-center">
        <li className="page-item active">
          <a className="page-link" href="?collection=mon%7Esp-main-search&form=simple&profile=_default&query=Accountancy">1</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="?collection=mon%7Esp-main-search&start_rank=11&form=simple&profile=_default&query=Accountancy">2</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="?collection=mon%7Esp-main-search&start_rank=21&form=simple&profile=_default&query=Accountancy">3</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="?collection=mon%7Esp-main-search&start_rank=31&form=simple&profile=_default&query=Accountancy">4</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="?collection=mon%7Esp-main-search&start_rank=41&form=simple&profile=_default&query=Accountancy">5</a>
        </li>
        <li className="page-item">
          <a className="page-link" href="?collection=mon%7Esp-main-search&start_rank=11&form=simple&profile=_default&query=Accountancy">Next</a>
        </li>
      </ul>
    </nav>
  )
}
