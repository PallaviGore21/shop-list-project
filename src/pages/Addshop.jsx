import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux"
import { Formik, useFormik } from 'formik';
import * as yup from "yup"
import addShopsAction from '../redux/reduxAction';
import { Dropdown } from 'bootstrap';



function Addshop() {
    const dispatch =useDispatch()
    const formik = useFormik({
        initialValues: {
           ShopName: "emporium",
           Avatar:"https://media.istockphoto.com/id/530528435/photo/shelves-with-handbags.jpg?s=612x612&w=0&k=20&c=-IL3WO7l8zqaAl20GyoIin3ggcDQOagDFEMCBf5D7Bg=",
            Area: "pune",
            Category: "bag shop",
           openingDate:"10Am",
           closingDate:"9pm"
        },
        validationSchema: yup.object({
            ShopName: yup.string().required("Enter ShopName"),
            Area: yup.string().required("Enter Area"),
            Category: yup.string().required("Enter Category"),
            openingDate: yup.string().required("Enter Date"),
            closingDate: yup.string().required("Enter closingDate"),
        }),
        onSubmit: ( values,{ resetForm }) => {
            console.log(values);
            dispatch(addShopsAction(values))
            resetForm()
        }
    })
    return (
        <Container>
            <Row>
                <Col className='col-sm-6 offset-sm-3'  >

                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src="" />
                        <Card.Header> <Card.Title> Shops</Card.Title></Card.Header>
                        <Card.Body>

            <Form onSubmit={formik.handleSubmit}>
               
                <Form.Group className="mb-3" controlId="formBasicShopname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.ShopName && !formik.errors.ShopName}
                        isInvalid={formik.touched.ShopName && formik.errors.ShopName}
                        type="name"
                        name="ShopName"
                        placeholder="enter fname"
                        value={formik.values.ShopName}
                        onChange={formik.handleChange}/>
                    <Form.Text className="invalid feedback">
                        {formik.errors.ShopName}
                    </Form.Text>
                </Form.Group>
                {/* dropdown */}

                <Form.Select 
                 onBlur={formik.handleBlur}
                 isValid={formik.touched.Area && !formik.errors.Area}
                 isInvalid={formik.touched.Area && formik.errors.Area}
                 type="area"
                 name="Area"
                 placeholder="enter Area"
                 value={formik.values.Area}
                 onChange={formik.handleChange}
                aria-label="Default select example">
                <option>Area</option>
                <option value="mumbai">mumbai</option>
                <option value="pune">pune</option>
                <option value="Nashik">Nashik</option>
                <option value="Thane">Thane</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
               </Form.Select>
                {/* dropdown end */}
                <Form.Select className="mb-3"
                 onBlur={formik.handleBlur}
                 isValid={formik.touched.Category && !formik.errors.Category}
                 isInvalid={formik.touched.Category && formik.errors.Category}
                 type="Category"
                 name="Category"
                 placeholder="enter Category"
                 value={formik.values.Category}
                 onChange={formik.handleChange}
                 
                aria-label="Default select example">
                <option>Category</option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary Shop">Stationary Shop</option>
                
               </Form.Select>


                <Form.Group className="mb-3" controlId="formBasicmobile">
                    <Form.Label>openingDate</Form.Label>
                    <Form.Control
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.openingDate && !formik.errors.openingDate}
                        isInvalid={formik.touched.openingDate && formik.errors.openingDate}
                        type="openingDate"
                        name="openingDate"
                        placeholder="enter openingDate"
                        value={formik.values.openingDate}
                        onChange={formik.handleChange}/>
                    <Form.Text className="invalid feedback">
                        {formik.errors.openingDate}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicpassword">
                    <Form.Label>closingDate</Form.Label>
                    <Form.Control
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.closingDate && !formik.errors.closingDate}
                        isInvalid={formik.touched.closingDate && formik.errors.closingDate}
                        type="closingDate"
                        name="closingDate"
                        placeholder="enter closingDate"
                        value={formik.values.closingDate}
                        onChange={formik.handleChange}/>
                    <Form.Text className="invalid feedback">
                        {formik.errors.closingDate}
                    </Form.Text>
                </Form.Group>
                


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Card.Body>
                    </Card>


                </Col>
            </Row>
        </Container>

       
    );
}

export default Addshop;





{/* <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label>Area</Form.Label>
                    <Form.Control
                        onBlur={formik.handleBlur}
                        isValid={formik.touched.Area && !formik.errors.Area}
                        isInvalid={formik.touched.Area && formik.errors.Area}
                        type="area"
                        name="Area"
                        placeholder="enter Area"
                        value={formik.values.Area}
                        onChange={formik.handleChange}/>
                    <Form.Text className="invalid feedback">
                        {formik.errors.Area}
                    </Form.Text>
                </Form.Group> */}