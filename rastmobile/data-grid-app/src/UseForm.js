import React from 'react';

function UserForm({ formData, handleInputChange, handleFormSubmit, setShowForm }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '488px',
        height: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        zIndex: 1000,
      }}
    >
      <form 
        onSubmit={handleFormSubmit} 
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {/* Ad alanı */}
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 50px)', // Genişliği 50px küçült
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* E-posta alanı */}
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 50px)', // Genişliği 50px küçült
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Şehir alanı */}
        <div style={{ width: '100%' }}>
          <label style={{ display: 'block', marginBottom: '5px', textAlign: 'left' }}>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            style={{
              width: 'calc(100% - 50px)', // Genişliği 50px küçült
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Butonlar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', // Sağ tarafa hizala
            gap: '10px', 
            width: '100%' 
          }}
        >
          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              width: '60px', // Genişlik 50px
              padding: '10px',
              backgroundColor: 'rgba(245, 247, 255, 1)', // Açık renk
              color: '#000', // Siyah metin
              border: '1px solid #ccc',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              width: '60px', // Genişlik 50px
              padding: '10px',
              backgroundColor: 'rgba(116, 75, 252, 1)', // Mor renk
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
