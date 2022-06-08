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
        
        fetch('https://fisphase2-project-database.herokuapp.com/materials', {
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
        <form className='stock-manager-form' onSubmit={handleRegisterSubmit} data-netflify='true'>
            <h3>Register New Stock</h3>

            <input type='text' name='name' onChange={handleRegisterChange} placeholder='Stock Name' autoComplete='off' />
            <input type='text' name='type' onChange={handleRegisterChange} placeholder='Type' autoComplete='off' />
            <input type='number' name='quantity' min={1} max={100} onChange={handleRegisterChange} placeholder='Quantity' autoComplete='off' />
            <input type='text' name='supplier' onChange={handleRegisterChange} placeholder='Supplier' autoComplete='off' />
            <input type='url' name='imgURL' onChange={handleRegisterChange} placeholder='Image URL' autoComplete='off' />
            <input type='text' name='note' onChange={handleRegisterChange} placeholder='Add note' autoComplete='off' />

            <input type='submit' value='Register' />
            <input type='button' onClick={() => navigateTo('/')} value='Back to Dashboard' />
        </form>
        );
    }

export default RegisterForm;