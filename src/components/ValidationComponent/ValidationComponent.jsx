import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx/xlsx.js';
import { useDispatch } from 'react-redux';
import './ValidationComponent.css';

function ValidationComponent() {
  const [files, setFiles] = useState([]);
  const [invalid, setInvalid] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [errors, setErrors] = useState([]);
  const [noErrors, setNoErrors] = useState(false);

  const dispatch = useDispatch()

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
    setNoErrors(false); // Reset noErrors state when new files are selected.
  };

  const toggleErrors = () => {
    setShowErrors(!showErrors);
  };

  useEffect(() => {

    setErrors([])
    const errorMessages = [];
    setInvalid(false)
    
    files.forEach((file, index) => {

      const reader = new FileReader();
      reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dataArray = [];

        for (const [index, row] of rows.entries()) {
          if (index === 0) {
            continue;
          }

          dataArray.push({ row });
        }

        const requiredPositions = [];

        for (const [index, value] of dataArray[0].row.entries()) {
          if (value === 'Required') {
            requiredPositions.push(index);
          }
        }

        for (let i = 4; i < dataArray.length; i++) {
          const missingRequiredPositions = [];
          if (dataArray[i].row.length !== 0) {
            for (const position of requiredPositions) {
              if (!dataArray[i].row[position]) {
                missingRequiredPositions.push(position + 1);
              }
            }

            if (missingRequiredPositions.length > 0) {
              setInvalid(true); // Update invalid state
              const errorMessage = `Missing "Required" values in row ${i + 2}, positions: ${missingRequiredPositions.join(', ')} of file ${sheetName}`;
              errorMessages.push(errorMessage);
              dispatch({type:"CLEAR_READY_FILE"})
            } else {
              console.log(`${sheetName} is ready to upload`)
            }
          }
        }

        setErrors(errorMessages);

        // Check if all files have been successfully validated with no errors
        if (index === files.length - 1 && errorMessages.length === 0) {
          setNoErrors(true);
          dispatch({type: "ADD_READY_FILE", payload:files})
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }, [files]);

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <p
        hidden={!invalid}
        style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer', margin: '10px' }}
        onClick={toggleErrors}
      >
        Sheet Missing Required Data! Please fix and re-upload.
        <p> Click to find out more.</p>
      </p>
      <p
        hidden={!noErrors} // Show the message when there are no errors
        style={{ color: 'green', textDecoration: 'underline', margin: '10px' }}
      >
        File(s) Loaded Successfully, No Errors Have Been Found.
      </p>
      {showErrors && (
        <div style={{ margin: '10px' }}>
          <h2>Error Messages:</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index} style={{ fontSize: '15px' }}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ValidationComponent;
