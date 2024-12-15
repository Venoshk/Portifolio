import StyleButton from './StyleButton.module.css'
export const Button = ({children, type}) => {
  return (
    <button type={type} className={StyleButton.button}>{children}</button>
  )
}
