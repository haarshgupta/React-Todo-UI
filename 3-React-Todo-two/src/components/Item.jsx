

function Item({todoEvents,todoDate}) {

  return (
    <div className="row itemsContainer">
      <div className="col-5">{todoEvents}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger TD-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item;
