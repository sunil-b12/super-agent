import React, { useContext, useEffect, useState } from 'react';
import SuperAgentContext from '../Context/SuperAgentContext';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { AiFillPlusCircle, AiFillCloseSquare, AiOutlinePlus } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { Fetchdata } from '../Hooks/getData';


const AddSuperAgent = ({ onHide }) => {
  const { superAgentData,
    loading,
    error,
    getSuperAgent,
    formValue, setFormValue,
    editSuperAgent, setEditSuperAgent,
    superAgentList, setSuperAgentList,
    formError, setFormError,
    isSubmit, setIsSubmit,
    isUploaded, setIsUploaded,
    image, setImage, initialValue } = useContext(SuperAgentContext)

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  const handleAdd = (e) => {
    e.preventDefault();
    setFormError(formValue);
    setIsSubmit(true);
  }

  if (isSubmit===true) {
    const dataForm = {
      AuthCode: "r1d3r",
      Flag: "i",
      AgentCode: formValue.AgentCode,
      FullName: formValue.FullName,
      UserName: formValue.UserName,
      Password: formValue.Password,
      Image: image !== null ? image.split(",")[1] : "",
      Address: formValue.Address,
      District: '1',
      StarGrading: formValue.StarGrading,
      Academic: formValue.Academic,
      Professional: formValue.Professional,
      WorkExp: formValue.WorkExp,
      ResponseTime: formValue.ResponseTime,
      ProductCat: formValue.ProductCat,
      ProductType: formValue.ProductType,
      Statement: formValue.Statement,
      Contact: formValue.Contact,
      AllowApp: "Y",
      FetchURL: "https://testing.esnep.com/happyhomes/api/admin/agent"
    };

    console.log(dataForm);
    Fetchdata(dataForm)
      .then((result) => {
        if (result.StatusCode === 200) {
          toast.success(result.Message, { theme: "light" });
          setFormValue({});
          setIsUploaded(false);
          setIsSubmit(false);
        } else {
          toast.error(result.Message, { theme: "light" });
          setIsSubmit(false);
        }
      })
      .catch((error) => {
        console.error('Fetch Error:', error);
        toast.error('An error occurred while making the API call.', { theme: 'light' });
        setIsSubmit(false);
      });
  }

  return (
    <>
      <Form onSubmit={handleAdd}>
        <div className='grid-column-03'>
          <Form.Group className="mb-3">
            <Form.Label>Agent Code</Form.Label>
            <Form.Control
              type="text"
              name="AgentCode"
              placeholder="Enter agent code"
              value={formValue.AgentCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="UserName"
              placeholder="Enter user name"
              value={formValue.UserName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="FullName"
              placeholder="Enter full name"
              value={formValue.FullName}
              onChange={handleChange}
            />
          </Form.Group>



          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="Address"
              placeholder="Enter address"
              value={formValue.Address}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="Password"
              placeholder="Enter password"
              value={formValue.Password}
              onChange={handleChange}
            />
          </Form.Group>



          {/* Add more input fields */}
          <Form.Group className="mb-3">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              name="District"
              placeholder="Enter district"
              value={formValue.District}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Star Grading</Form.Label>
            <Form.Control
              type="number"
              name="StarGrading"
              placeholder="Enter star grading"
              value={formValue.StarGrading}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Academic</Form.Label>
            <Form.Control
              type="text"
              name="Academic"
              placeholder="Enter academic details"
              value={formValue.Academic}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>StarGrading</Form.Label>
            <Form.Control
              type="text"
              name="StarGrading"
              placeholder="Enter academic details"
              value={formValue.StarGrading}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Professional</Form.Label>
            <Form.Control
              type="text"
              name="Professional"
              placeholder="Enter academic details"
              value={formValue.Professional}
              onChange={handleChange}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>Work Exprinces</Form.Label>
            <Form.Control
              type="text"
              name="WorkExp"
              placeholder="Enter academic details"
              value={formValue.WorkExp}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ResponseTime</Form.Label>
            <Form.Control
              type="text"
              name="ResponseTime"
              placeholder="Enter academic details"
              value={formValue.ResponseTime}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ProductCat</Form.Label>
            <Form.Control
              type="text"
              name="ProductCat"
              placeholder="Enter academic details"
              value={formValue.ProductCat}
              onChange={handleChange}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>ProductType</Form.Label>
            <Form.Control
              type="text"
              name="ProductType"
              placeholder="Enter academic details"
              value={formValue.ProductType}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="number"
              name="Contact"
              placeholder="Enter academic details"
              value={formValue.Contact}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Statement</Form.Label>
            <Form.Control
              type="text"
              name="Statement"
              placeholder="Enter academic details"
              value={formValue.Statement}
              onChange={handleChange}
            />
          </Form.Group>



          {/* Image input */}
          <div className="input-field">
            {isUploaded ? (
              <div className="inputfield">
                <img src={image} alt="" style={{ height: "200px" }} />
                <span
                  className="close"
                  onClick={() => {
                    setImage("");
                    setIsUploaded(false);
                  }}
                >
                  <AiFillCloseSquare />
                </span>
              </div>
            ) : (
              <div className="inputfield">
                <input type="file" onChange={handleChange} id="image" />
                <label className="image_box" htmlFor="image">
                  <AiOutlinePlus size="2rem" color="var(--primary)" />
                </label>
              </div>
            )}
          </div>
        </div>

        <Button variant="primary" type="submit" onClick={handleAdd}>
          Add Agent
        </Button>
      </Form>
    </>
  );
};

export default AddSuperAgent;
