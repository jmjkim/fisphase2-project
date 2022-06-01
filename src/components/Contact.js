export default function Contact() {
    document.title = "Contact"

    return (
        <div className='display-component'>
            <h3>Contact</h3>
            <div className='contact-container'>
                <div>
                    <h3>Wood Department</h3>
                    <p>(888)-123-4567</p>
                    <p>wooddepartment@companyemail.com</p>
                </div>

                <div>
                    <h3>Metal Department</h3>
                    <p>(888)-234-5678</p>
                    <p>metaldepartment@companyemail.com</p>
                </div>

                <div>
                    <h3>Rock Department</h3>
                    <p>(888)-345-6789</p>
                    <p>rockdepartment@companyemail.com</p>
                </div>

                <div>
                    <h3>For all other questions</h3>
                    <p>(888)-678-9000</p>
                    <p>generalquestions@companyemail.com</p>
                </div>
            </div>
        </div>
    );
};