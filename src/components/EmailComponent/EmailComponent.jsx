import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, Button } from '@mui/material';
import emailjs from 'emailjs-com';
//TODO DELETE THIS COMPONENT
const LinkEmailSender = () => {
  const [selectedLink, setSelectedLink] = useState('Consignment Agreement');
  const emailServiceId = 'service_86b7k3h'; // Replace with your Email.js service ID
  const emailTemplateId = 'template_gylgm3d'; // Replace with your Email.js template ID


  const sendEmail = () => {
    const selectedLinkInfo = linkMap[selectedLink];
    
    if (!selectedLinkInfo) {
      console.error('Invalid selected link.');
      return;
    }

    const templateParams = {
    selected_link:selectedLinkInfo.label,
    selected_url:selectedLinkInfo.url,
    to_name:"New Vendor!",
    from_name:"Cause Cart"
    };

    // TODO: move emailjs to server side
    // TODO: API key should be hieend in .env
    // TODO: Request to email should be in a Saga
    emailjs
      .send(emailServiceId, emailTemplateId, templateParams, "MFr9TY2gaUo90C3nR")
      .then(
        (response) => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Email could not be sent. Please try again later.');
          console.error('Email error:', error);
        }
      );
  };

  const handleLinkChange = (event) => {
    setSelectedLink(event.target.value);
  };

  return (
    <div style={{margin:'20px', width:'250px'}}>
      <FormControl fullWidth>
        <InputLabel htmlFor="link-selector">Select a Link</InputLabel>
        <Select
          id="link-selector"
          value={selectedLink}
          onChange={handleLinkChange}
        >
          {Object.keys(linkMap).map((link) => (
            <MenuItem key={link} value={link}>
              {linkMap[link].label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <Button variant="contained" color="primary" onClick={sendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default LinkEmailSender;


