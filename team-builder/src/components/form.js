import React,{useState} from 'react';
import './form.css';


function Form(props) {
    const memForm = { name: "", email: "", role: "" };
    const [member, setMember] = useState(memForm);

    const handleChange = event => {
        setMember({
          ...member,
          [event.target.name]: event.target.value
        });
      };

    const submitHandle = event => {
        event.preventDefault();
    
        if (!member.name || !member.email || !member.role) {
          alert("Please fill out both fields!");
        } else {
          props.setMember([member, ...props.member]);
          resetForm();
        }
    };
    const resetForm = () => {
        setMember(memForm);
    };
    

    return (
            <form className="formClass" onSubmit={submitHandle}>
                <h1 className="formHeader">Create Team Member</h1>
                <div class="formFlex">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={member.name}></input>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={member.email}></input>
                    <label for="role">Role</label>
                    <input type="text" name="role" id="role" onChange={handleChange} value={member.role}></input>
                </div>
                <button type="submit">Submit</button>
            </form>
    );
}

export default Form;