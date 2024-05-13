import { Row, Col, Form, Input, Button } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../components/Spinner.tsx'
import AddCarHeader from '../components/Headers/addCarHeader.tsx'
import SideBar from '../components/sidebar/sidebar.tsx'
import { addCar } from '../redux/actions/carsActions'

// This component represents the form for adding a new car. It includes input fields for car details
// such as name, image URL, rent per hour, capacity, and fuel type.

function AddCar() {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.alertsReducer)

    function onFinish(values) {

        values.bookedTimeSlots = []

        dispatch(addCar(values))
        console.log(values)
    }

    return (
        <> <div style={{ display: 'flex' }}>
            <SideBar />


            {loading && (<Spinner />)}
            <div style={{ flex: '1' }}>
                <AddCarHeader />
                <Row justify='center' className='custom-form-container'>
                    <Col lg={12} sm={24} xs={24} className='custom-form-col'>
                        <Form
                            className='custom-form'
                            layout='vertical'
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name='name'
                                label='Car Name'
                                rules={[{ required: true, message: 'Please enter the car name' }]}
                            >
                                <Input className='custom-input' placeholder='Enter car name' />
                            </Form.Item>
                            <Form.Item
                                name='image'
                                label='Image URL'
                                rules={[{ required: true, message: 'Please enter the image URL' }]}
                            >
                                <Input className='custom-input' placeholder='Enter image URL' />
                            </Form.Item>
                            <Form.Item
                                name='rentPerHour'
                                label='Rent per Hour'
                                rules={[{ required: true, message: 'Please enter the rent per hour' }]}
                            >
                                <Input className='custom-input' type='number' placeholder='Enter rent per hour' />
                            </Form.Item>
                            <Form.Item
                                name='capacity'
                                label='Capacity'
                                rules={[{ required: true, message: 'Please enter the capacity' }]}
                            >
                                <Input className='custom-input' type='number' placeholder='Enter capacity' />
                            </Form.Item>
                            <Form.Item
                                name='fuelType'
                                label='Fuel Type'
                                rules={[{ required: true, message: 'Please enter the fuel type' }]}
                            >
                                <Input className='custom-input' placeholder='Enter fuel type' />
                            </Form.Item>

                            <div className='text-center'>
                                <Button className='btn1' type='primary' htmlType='submit'>
                                    ADD CAR
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            
            </div>
        </div>
        </>
    )
}

export default AddCar
