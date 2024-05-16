import { useState } from "react";

function List({ list, setList, handleAdd, todolist }) {
  const [editItem, setEditItem] = useState("");
  const [editedValue, setEditedValue] = useState("");
  function handleDelete(l) {
    const filtered = list.filter((e) => e !== l);
    setList(filtered);
    // console.log(filtered);
  }
  function handleEdit(l) {
    setEditItem(l);
    setEditedValue(l);
  }
  function handleChangeEdit(e) {
    setEditedValue(e.target.value);
  }
  function handleEditAdd(l) {
    // e.preventDefault();
    // setList(() => input);
    // console.log(l);
    if (editedValue !== "") {
      //   const filtered = list.filter((e) => e !== l);
      const index = list.indexOf(l);
      const updatedList = [...list];
      if (index !== -1) updatedList[index] = editedValue;
      setList(updatedList);
      setEditItem("");
      setEditedValue("");
      //   todolist.push(e);
    }
  }
  return (
    <div
      className="d-flex flex-column mx-auto"
      style={{ justifyContent: "center", width: "50px", alignItems: "center" }}
    >
      {list.map((l, i) => {
        if (editItem === l) {
          return (
            <div
              className="d-flex mt-3"
              key={i}
              style={{
                width: "250px",
                height: "40px",
                textAlign: "center",
                alignItems: "center",
                backgroundColor: "grey",
                justifyContent: "space-between",
                boxShadow: "3px 3px 5px black",
              }}
              onSubmit={() => handleEditAdd(l)}
            >
              <input
                type="text"
                value={editedValue}
                onChange={handleChangeEdit}
                autoFocus={true}
                style={{
                  height: "40px",
                  borderRadius: "5px",
                  color: "black",
                  width: "200px",
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleEditAdd(l)}
                style={{ width: "35px" }}
              >
                Save
              </button>
            </div>
          );
        }
        return (
          <div
            className=" d-flex  mt-3  "
            style={{
              width: "250px",
              height: "40px",
              textAlign: "center",
              alignItems: "center",
              backgroundColor: "grey",
              justifyContent: "space-between",
              boxShadow: "3px 3px 5px black",
            }}
            key={i}
          >
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                textTransform: "capitalize",
                fontSize: "15px",
                padding: "10px",
              }}
            >
              {l}
            </div>
            <div
              className="d-flex justify-content-flex-end"
              style={{ gap: "5px", padding: "5px" }}
            >
              <button
                style={{
                  backgroundColor: "grey",
                  border: "none",
                  boxShadow: "1px 1px 5px white",
                  padding: "5px",
                  width: "50px",
                }}
                className="btn btn-primary"
                onClick={() => handleDelete(l)}
              >
                Delete
              </button>

              <button
                style={{
                  backgroundColor: "grey",
                  border: "none",
                  boxShadow: "1px 1px 5px white",
                  padding: "5px",
                  width: "50px",
                }}
                className="btn btn-primary"
                onClick={() => handleEdit(l)}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default List;
