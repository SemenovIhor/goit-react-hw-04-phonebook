import { useState } from "react";

export const ContactForm = ({onSubmit}) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => { 
    const {name, value } = e.target
    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      setNumber(value);
    }
  }

  const handleInputSubmit = e => {
    e.preventDefault();
    onSubmit({name, number})
    reset()
  } 

  const reset = () => {
    setName('');
    setNumber('');
  };


  return (
    <>
      <form action="" onSubmit={handleInputSubmit}>
        <label>
          Name
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // id={this.nameInputId}
            required
          />  
        </label>
        <label>
          Number
          <input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // id={this.numberInputId}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>  
    </>
)

}