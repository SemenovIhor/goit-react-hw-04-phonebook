import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList'
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";


const initialContacts =  [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export const App = () => {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? initialContacts)
  const [filter, setFilter] = useState('')


  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const formSubmitHandler = data => {
    console.log(data)
      if (contacts.some(contact =>  contact.name.toLowerCase() === data.name.toLowerCase())) {
        alert("Hello");
      } else {
        const newContact = {...data, id: nanoid() }
        setContacts(prevState => {
          return [...prevState, newContact] ;
        });
      }
  }

  const filterInput = (filter) => {
    setFilter(filter);
  }

  const contactDelete = id => {
    const  newContact = contacts.filter((item) => item.id !== id); 
    setContacts([...newContact]);
  }

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
      );
  }
  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm
          onSubmit = {formSubmitHandler}
        />  
      </Section>
      <Section title="Contacts">
      {contacts.length !== 0 && (
        <>
          <Filter
            onChange = {filterInput}
          />
          <ContactList
            contacts={filteredContacts}
            onClick = {contactDelete}
          />
        </>
      )}
      </Section>
    </div>
  );
}