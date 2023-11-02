// MyTabBar.js
import React, { useState } from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import AllCollapseExample from './AllCollapseExample';

const MyTabBar = () => {
  const [key, setKey] = useState('tab1');
  const [accordionItemsTab1, setAccordionItemsTab1] = useState([]);
  // const [accordionItemsTab2, setAccordionItemsTab2] = useState([]);
  // const [accordionItemsTab3, setAccordionItemsTab3] = useState([]);
  // const [inputTitle, setInputTitle] = useState('');
  // const [inputField1, setInputField1] = useState('');
  // const [inputField2, setInputField2] = useState('');
  // const [inputField3, setInputField3] = useState('');

  const handleAddAccordionItemTab1 = (newItem) => {
    setAccordionItemsTab1([...accordionItemsTab1, newItem]);
  };

  // const handleAddAccordionItemTab2 = (newItem) => {
  //   setAccordionItemsTab2([...accordionItemsTab2, newItem]);
  // };

  // const handleAddAccordionItemTab3 = (newItem) => {
  //   setAccordionItemsTab3([...accordionItemsTab3, newItem]);
  // };

  const handleRemoveAccordionItemTab1 = (itemId) => {
    setAccordionItemsTab1(accordionItemsTab1.filter((item) => item.id !== itemId));
  };

  // const handleRemoveAccordionItemTab2 = (itemId) => {
  //   setAccordionItemsTab2(accordionItemsTab2.filter((item) => item.id !== itemId));
  // };

  // const handleRemoveAccordionItemTab3 = (itemId) => {
  //   setAccordionItemsTab3(accordionItemsTab3.filter((item) => item.id !== itemId));
  // };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic if needed
    console.log('Form submitted');
  };

  return (
    <Tabs
      id="my-tab-bar"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="tab1" title="Tab 1">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="formInput">
            <Form.Label>Input Field:</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>

          <AllCollapseExample
            accordionItems={accordionItemsTab1}
            onAddAccordionItem={handleAddAccordionItemTab1}
            onRemoveAccordionItem={handleRemoveAccordionItemTab1}
          />

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Tab>

      <Tab eventKey="tab2" title="Tab 2">
        {/* Content for Tab 2 */}
        {/* <AllCollapseExample
          accordionItems={accordionItemsTab2}
          onAddAccordionItem={handleAddAccordionItemTab2}
          onRemoveAccordionItem={handleRemoveAccordionItemTab2}
        /> */}
      </Tab>

      <Tab eventKey="tab3" title="Tab 3">
        {/* Content for Tab 3 */}
        {/* <AllCollapseExample
          accordionItems={accordionItemsTab3}
          onAddAccordionItem={handleAddAccordionItemTab3}
          onRemoveAccordionItem={handleRemoveAccordionItemTab3}
        /> */}
      </Tab>

      {/* Add more tabs as needed */}

    </Tabs>
  );
};

export default MyTabBar;
