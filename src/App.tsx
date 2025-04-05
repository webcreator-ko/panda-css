import { Box } from '@styled-system/jsx'
function App() {

  return (
    <>
    {/* 2つのカラーコード */}
    <Box alignItems="center" color="red" >Hello 🐼!</Box>
    <Box alignItems="center"  color="var(--colors-red)">Hello 🐼!</Box>
    </>
  )
}

export default App
