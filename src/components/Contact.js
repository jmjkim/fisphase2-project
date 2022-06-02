const Contact = () => {
    document.title = "Contact"

    return (
        <div className='display-content'>
            <h3>Contact</h3>
            
            <div className='contact-container'>
                <div>
                    <h3>Wood Department</h3>
                    <p>(888)-123-4567</p>
                    <a href='mailto:wooddepartment@companyemail.com'>wooddepartment@companyemail.com</a>
                </div>

                <div>
                    <h3>Metal Department</h3>
                    <p>(888)-234-5678</p>
                    <a href='mailto:metaldepartment@companyemail.com'>metaldepartment@companyemail.com</a>
                </div>

                <div>
                    <h3>Rock Department</h3>
                    <p>(888)-345-6789</p>
                    <a href='mailto:rockdepartment@companyemail.com'>rockdepartment@companyemail.com</a>
                </div>

                <div>
                    <h3>For all other questions</h3>
                    <p>(888)-678-9000</p>
                    <a href='mailto:generalquestions@companyemail.com'>generalquestions@companyemail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;