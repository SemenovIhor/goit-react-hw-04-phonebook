export const Filter = ({onChange}) => {

  const handleInputChange = e => {
    onChange(e.currentTarget.value);
  } 

  return (
    <>
      <p>Find contacts by name</p>
      <input 
        onChange={handleInputChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  )

}