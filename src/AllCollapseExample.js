// AllCollapseExample.js
import React, { useState } from 'react';
import { Accordion, Button, Card, Form } from 'react-bootstrap';

const AllCollapseExample = ({ onAddAccordionItem }) => {
  const [accordionItems, setAccordionItems] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputField1, setInputField1] = useState('');
  const [inputField2, setInputField2] = useState('');
  const [inputField3, setInputField3] = useState('');

  const handleAddAccordionItem = () => {
    if (inputTitle.trim() !== '') {
      const newItem = {
        id: Date.now(),
        title: inputTitle.trim(),
        content: {
          field1: inputField1.trim(),
          field2: inputField2.trim(),
          field3: inputField3.trim(),
        },
      };

      setAccordionItems([...accordionItems, newItem]);
      setInputTitle('');
      setInputField1('');
      setInputField2('');
      setInputField3('');

      // Notify the parent component (MyTabBar) about the new accordion item
      onAddAccordionItem(newItem);
    }
  };

  const handleRemoveAccordionItem = (itemId) => {
    setAccordionItems(accordionItems.filter((item) => item.id !== itemId));
  };

  return (
    <Accordion>
      {accordionItems.map((item) => (
        <Card key={item.id}>
          <Accordion.Item eventKey={item.id.toString()}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
              <Form.Group controlId={`inputField1-${item.id}`}>
                <Form.Label>Field 1:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Field 1"
                  value={item.content.field1}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId={`inputField2-${item.id}`}>
                <Form.Label>Field 2:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Field 2"
                  value={item.content.field2}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId={`inputField3-${item.id}`}>
                <Form.Label>Field 3:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Field 3"
                  value={item.content.field3}
                  readOnly
                />
              </Form.Group>

              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleRemoveAccordionItem(item.id)}
              >
                Remove
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}

      <Card>
        <Accordion.Item eventKey="add">
          <Accordion.Header>
            <Form.Group controlId="inputTitle">
              <Form.Label>Accordion Title:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter accordion title"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="inputField1">
              <Form.Label>Field 1:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Field 1"
                value={inputField1}
                onChange={(e) => setInputField1(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="inputField2">
              <Form.Label>Field 2:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Field 2"
                value={inputField2}
                onChange={(e) => setInputField2(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="inputField3">
              <Form.Label>Field 3:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Field 3"
                value={inputField3}
                onChange={(e) => setInputField3(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="success"
              size="sm"
              className="ml-2"
              onClick={handleAddAccordionItem}
            >
              Add
            </Button>
          </Accordion.Header>
        </Accordion.Item>
      </Card>
    </Accordion>
  );
};

export default AllCollapseExample;
