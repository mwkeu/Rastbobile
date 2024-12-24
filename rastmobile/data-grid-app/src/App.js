import React, { useEffect, useState } from 'react';
import './App.css';
import './AppResponsive.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import logo from './assets/logo.png';
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import UserForm from './UseForm.js';

const customStyles = {
  headRow: {
    style: {
      backgroundColor: 'blue',
      color: "white"
    }
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: '600',
      textTransform: 'uppercase',
    },
  },
  cells: {
    style: {
      fontSize: '15px',
    },
  },
};

function App() {
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Email",
      selector: row => row.email
    },
    {
      name: "City",
      selector: row => row.city
    }
  ];

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', city: '' });

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          const users = res.data.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city
          }));
          setRecords(users);
          setFilterRecords(users);
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  const handleFilter = (event) => {
    const newData = filterRecords.filter(row => row.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setRecords(newData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      id: records.length + 1,
      ...formData
    };
    setRecords([...records, newRecord]);
    setFilterRecords([...records, newRecord]);
    setShowForm(false);
    setFormData({ name: '', email: '', city: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div style={{ padding: "50px 10%", backgroundColor: "white", marginBottom: '45px' }}>
      <div className='navbar' style={{ display: 'flex', alignItems: 'center', borderRadius: '22px', boxShadow: '8px 5px 5px grey' }}>
        <div className='logo'> <img src={logo} alt="" /> </div>
        <ul className='links' style={{ cursor: 'pointer', display: 'flex', marginLeft: '60px', gap: '60px', justifyContent: 'flex-end', listStyle: 'none', }}>
          <li><a>Hakkımızda</a></li>
          <li><a>Jüri-Yarışma-Yazılım</a></li>
          <li><a>World Ninja</a></li>
          <li><a>World Pyramids</a></li>
        </ul>
        <div className='toggle_btn' style={{ cursor: 'pointer', display: 'flex', marginLeft: 'auto', padding: '20px', gap: '10px', fontSize: '1rem', borderRadius: '10px' }}>
          <FaSquareYoutube />
          <FaInstagramSquare />
          <FaSquareXTwitter />
          <FaLinkedin />
        </div>
      </div>
     
      <div className='bu' style={{ backgroundColor: 'rgba(18, 131, 217, 0.44)', marginTop: '20px', paddingBottom: '30px', }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
         
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '380px', height: '22px' }}>
              <input
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '39px',
                  border: '1px solid #ccc',
                  paddingLeft: '4px'
                }}
                type='text'
                placeholder='Search...'
                onChange={handleFilter}
              />
              <IoSearchCircleOutline
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.5rem',
                  color: 'gray',
                  cursor: 'pointer',
                }}
              />
            </div>
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                fontSize: '1.2rem',
                width: '25px',
                height: '25px',
                borderRadius: '50%',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}
            >
              <FaFilter />
            </button>
          </div>

         
          <button className='yeni-hesap-ekle' onClick={() => setShowForm(true)} style={{ cursor: 'pointer', width: '175px', fontFamily: 'Poppins', color: 'white', backgroundColor: 'rgba(116, 75, 252, 1)', height: '32px', borderRadius: '39px' }}>
            + Yeni hesap ekle
          </button>
        </div>

        {showForm && (
          <UserForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            setShowForm={setShowForm}
          />
        )}

        <DataTable columns={columns} data={records} customStyles={customStyles} pagination style={{ zIndex: '0', position: 'relative' }} />
      </div>
    </div>
  );
}

export default App;
