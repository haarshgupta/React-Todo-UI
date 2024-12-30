function Item1() {
let todoEvents = "Buy Milk!";
let todoDate = "4/10/12";

  return (
    <div class="row Td-row">
      <div class="col-5">{todoEvents}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger TD-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Item1;
