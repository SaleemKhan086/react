import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ comments }) {
  if (comments.length !== 0) {
    return (
      <div className="col md-5 m-1">
        <h4>Comments</h4>
        <ul className="unstyled-list">
          {comments.map((comment) => {
            return (
              <li>
                {comment.comment}
                <br />
                --{comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="row">
        <div className="col ">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>
                <b>{dish.name}</b>
              </CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <RenderComments comments={dish.comments} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  return (
    <div className="container">
      <RenderDish dish={props.dish} />
    </div>
  );
};

export default Dishdetail;
