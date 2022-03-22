import React, { Component } from "react";
import { convertBytes } from "./helpers";
import moment from "moment";
import "../index.css";
import { Button, Card, Table } from "react-bootstrap/";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <Card
          border="dark"
          style={{
            width: "80rem",
            margin: "auto",
            backgroundColor: "transparent",
          }}
        >
          <Card.Header as="h4">Share File</Card.Header>
          <Card.Body>
            <Card.Title>Select Your File</Card.Title>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const description = this.fileDescription.value;
                this.props.uploadFile(description);
              }}
            >
              <div className="form-group">
                <input
                  id="fileDescription"
                  type="text"
                  ref={(input) => {
                    this.fileDescription = input;
                  }}
                  className="form-control"
                  placeholder="Your File Description..."
                  style={{ width: "30rem", margin: "auto" }}
                  required
                />
              </div>
              <br />
              <Card.Text>
                <input
                  type="file"
                  onChange={this.props.captureFile}
                  className="text-black"
                  style={{ width: "30rem", margin: "auto" }}
                />
              </Card.Text>
              <br />
              <br />
              <Button variant="primary" type="submit">
                Upload File
              </Button>
            </form>
          </Card.Body>
        </Card>
        <br />
        <br />
        <br />
        <h3>Uploaded Files :</h3>
        <br />
        <Table
          striped
          bordered
          hover
          variant="light"
          size="md"
          style={{ width: "80rem", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Type</th>
              <th>Size</th>
              <th>Date</th>
              <th>Uploader/View</th>
              <th>Hash/View/Get</th>
            </tr>
          </thead>
          {this.props.files.map((file, key) => {
            return (
              <thead key={key}>
                <tr>
                  <td>{file.fileId}</td>
                  <td>{file.fileName}</td>
                  <td>{file.fileDescription}</td>
                  <td>{file.fileType}</td>
                  <td>{convertBytes(file.fileSize)}</td>
                  <td>
                    {moment.unix(file.uploadTime).format("h:mm:ss A M/D/Y")}
                  </td>
                  <td>
                    <a
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.uploader.substring(0, 10)}...
                    </a>
                  </td>
                  <td>
                    <a
                      href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {file.fileHash.substring(0, 10)}...
                    </a>
                  </td>
                </tr>
              </thead>
            );
          })}
        </Table>
        <p>&nbsp;</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Main;
