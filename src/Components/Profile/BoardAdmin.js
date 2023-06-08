import React, { useState, useEffect } from "react";

import UserService from "../../Services/User.service";
import EventBus from "../../Common/EventBus";
import Test from "../Test/Test";
const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
      <h3>{content}</h3>
      <Test />
      </header>
    </div>
  );
};

export default BoardAdmin;
