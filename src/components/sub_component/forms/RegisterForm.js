import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        id: Math.floor(1000 + (Math.random() * 9000)),
        imgURL: '',
        name: '',
        type: '',
        quantity: 0,
        supplier: '',
        note: ''
    });


    const handleRegisterChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };


    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        
        fetch('http://localhost:3000/materials/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })
          .then(r => r.json())
          .then(() => navigateTo('/'))
          .catch((err) => alert(err.message))
    };


    return (
        <div>
            <form className='stock-manager-form' onSubmit={handleRegisterSubmit}>
                <h3>Register New Stock</h3>

                <input type='text' name='name' onChange={handleRegisterChange} placeholder='Stock Name' />
                <input type='text' name='type' onChange={handleRegisterChange} placeholder='Type' />
                <input type='number' name='quantity' min={1} max={100} onChange={handleRegisterChange} placeholder='Quantity'/>
                <input type='text' name='supplier' onChange={handleRegisterChange} placeholder='Supplier' />
                <input type='url' name='imgURL' onChange={handleRegisterChange} placeholder='Image URL' />
                <input type='text' name='note' onChange={handleRegisterChange} placeholder='Add note' />
                <input type='submit' value='Register' />
            </form>
        </div>
        );
    }

export default RegisterForm;