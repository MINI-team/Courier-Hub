import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
//   const [order, setOrder] = useState({
//     companyName: 'string',
//     price: 0,
//     client: {
//       firstName: 'string',
//       lastName: 'string',
//       email: 'string',
//       login: 'string',
//       password: 'string',
//       addr: {
//         streetName: 'string',
//         streetNo: 0,
//         flatNo: 0,
//         zipCode: 'string',
//         city: 'string',
//       },
//     },
//     // Set inquiryInfoId to the existing InquiryInfo ID
//     inquiryInfo: {id: 'DC3C7F38-260C-43AB-847F-7D3EC0384C48'},
//     // inquiryInfoId: 'DC3C7F38-260C-43AB-847F-7D3EC0384C48',
//   });

//   useEffect(() => {
//     // Fetch existing InquiryInfo details if needed
//     const fetchInquiryInfo = async () => {
//     //   try {
//     //     const response = await axios.get(`http://localhost:5147/api/InquiryInfo/${order.inquiryInfoId}`);
//     //     // Update order with existing InquiryInfo details
//     //     setOrder((prevOrder) => ({
//     //       ...prevOrder,
//     //       inquiryInfo: response.data,
//     //     }));
//     //   } catch (error) {
//     //     console.error('Error fetching InquiryInfo:', error);
//     //   }
//     };

//     // Fetch existing InquiryInfo details when the component mounts
//     fetchInquiryInfo();
//   }, [order.inquiryInfoId]);

  const handleSubmit = async () => {
    try {
        const orderData = {
            client: {
              id: '3FA85F64-5717-4562-B3FC-2C963F66AFB2',
              firstName: 'string',
              lastName: 'string',
              email: 'string',
              login: 'string',
              password: 'string',
              addr: {
                id: '3FA85F64-5717-4562-B3FC-2C963F66AFB1',
                streetName: 'string',
                streetNo: 0,
                flatNo: 0,
                zipCode: 'string',
                city: 'string',
              },
            },
            inquiryInfo: {
              id: 'DC3C7F38-260C-43AB-847F-7D3EC0384C18',
              width: 0,
              height: 0,
              weight: 0,
              date: '2023-11-12',
              sourceAddress: {
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
                streetName: 'string',
                streetNo: 0,
                flatNo: 0,
                zipCode: 'string',
                city: 'string',
              },
              destinationAddress: {
                id: '3fa85f64-5717-4562-b3fc-2c963f66afa9',
                streetName: 'string',
                streetNo: 0,
                flatNo: 0,
                zipCode: 'string',
                city: 'string',
              },
              priority: 'string',
              deliveredOnWeekend: true,
            },
            companyName: 'string',
            price: 0,
          };
      const response = await axios.post('http://localhost:5147/api/Order', orderData, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Display order and client input fields */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default YourComponent;
