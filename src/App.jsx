import CustomButton from './CustomButton'

const App= ()=>{
  return(
    <div>
      <h1>Custom Buttons</h1>
      {/* Sadə düymə */}
      <CustomButton text="Normal Button" />

      {/* WarnMessage olan düymə */}
      <CustomButton text="Warning Button" warnMessage="Bu bir xəbərdarliqdir!" />

      {/* Hint olan düymə */}
      <CustomButton text="Hint Button" hint="Bu bir hintdir" />
    </div>
  )
}
export default App