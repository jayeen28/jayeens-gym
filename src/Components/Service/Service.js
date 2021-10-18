import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Service.css';
const Service = ({ service }) => {
    const { title, img, description } = service;
    return (
        <div className="srvc-box" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className="srvc-title">{title}</Card.Title>
                <Card.Text className="srvc-desc">
                    {description.slice(0, 100)}
                </Card.Text>
                <Button variant="primary" className="service-box-button">View details</Button>
            </Card.Body>
        </div>
    );
};

export default Service;