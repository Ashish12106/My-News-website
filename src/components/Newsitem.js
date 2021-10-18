import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgurl, newsurl,source } = this.props;

    return (
      <div className="my-3">
        <div className="card  cardbg" style={{ width: "20rem" }}>
          <img
            src={
              !imgurl
                ? "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F646135%2Fa-smiling-couple-that-just-moved-into-a-new-home-looking-at-a-tablet-device-while-sitting-on-the-stairs.jpg&w=963&h=566&op=resize"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title ? title : "Title is Not avialable"}
              <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger " style={{left:"95%" , zIndex:"1"}}>
                {source}
              </span>
            </h5>
            <p className="card-text">
              {description ? description : "Description is not avialable"}....
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-outline-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
