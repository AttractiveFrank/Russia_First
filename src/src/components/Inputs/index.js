import './input.css'

export const Input = ({ item, handleChange }) => {
  return (
    <input
      className="InputText x14 alignCenter"
      placeholder={item.placeholder}
      name={item.name}
      onChange={handleChange}
      // value={value}
      required
    />
  )
}


export const TextArea = ({ name, placeholder, onChange, value }) => {
  return (
    <textarea
      className="textArea"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      required />
  )
}