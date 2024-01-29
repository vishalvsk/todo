import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import data from "./data";

// let data =;

function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "vishal karale",
      age: 25,
    },
    {
      id: 2,
      name: "virat",
      age: 34,
    },
    {
      id: 3,
      name: "rohit",
      age: 36,
    },
  ]);
  const handleDelete = (id) => {
    console.log(id);
    // var index = data.map(function (e) {

    //     return e.id
    // }).indexOf(id);

    // data.splice(index, 1);

    setData(data.filter((data) => data.id !== id));
  };
  const handleEdit = (id) => {
    const editData = data.find((ele) => {
      return ele.id === id;
    });
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length
              ? data.map((item) => {
                  return (
                    <tr>
                      <th
                        style={{
                          color: item.name.length > 5 ? "grey" : "black",
                        }}
                      >
                        {item.name}
                      </th>
                      <th
                        style={{
                          color: item.age % 0 === 0 ? "red" : "green",
                        }}
                      >
                        {item.age}{" "}
                      </th>
                      <th>
                        <Button
                          onClick={() => {
                            handleEdit(item.id);
                          }}
                        >
                          Edit Button
                        </Button>
                        {/* &nbsp; */}
                        <Button
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          Delete Button
                        </Button>
                      </th>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default Home;
