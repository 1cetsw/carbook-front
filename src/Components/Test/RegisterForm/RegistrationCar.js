import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import AuthService from "../../../Services/Auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const validVIN = (value) => {
  if (value.length < 5 || value.length > 17) {
    return (
      <div className="invalid-feedback d-block">
        The VIN must be between 2 and 17 characters.
      </div>
    );
  }
};

const validCarbrand = (value) => {
  if (value.length < 2 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The carbrand must be between 2 and 20 characters.
      </div>
    );
  }
};

const validCarmodel = (value) => {
  if (value.length < 2 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The car model must be between 2 and 40 characters.
      </div>
    );
  }
};

const RegisterCar = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [carbrand, setCarbrand] = useState("");
  const [VIN, setVIN] = useState("");
  const [carmodel, setCarmodel] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeCarbrand = (e) => {
    const carbrand = e.target.value;
    setCarbrand(carbrand);
  };

  const onChangeVIN = (e) => {
    const VIN = e.target.value;
    setVIN(VIN);
  };

  const onChangeCarmodel = (e) => {
    const carmodel = e.target.value;
    setCarmodel(carmodel);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(carbrand, VIN, validCarmodel).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="https://i.pinimg.com/564x/de/0d/07/de0d07ff99927b8ef47fe710cd091871.jpg"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="carbrand">Car Brand</label>
                <Input
                  type="text"
                  className="form-control"
                  name="carbrand"
                  value={carbrand}
                  onChange={onChangeCarbrand}
                  validations={[required, validCarbrand]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="carmodel">Car Model</label>
                <Input
                  type="carmodel"
                  className="form-control"
                  name="carmodel"
                  value={carmodel}
                  onChange={onChangeCarmodel}
                  validations={[required, validCarmodel]}
                />
              </div>


              <div className="form-group">
                <label htmlFor="VIN">VIN</label>
                <Input
                  type="text"
                  className="form-control"
                  name="VIN"
                  value={VIN}
                  onChange={onChangeVIN}
                  validations={[required, validVIN]}
                />
              </div>

             

              <div className="form-group">
                <button className="btn btn-primary btn-block">Add Car</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default RegisterCar;
