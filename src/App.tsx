import { Box, styled } from '@styled-system/jsx'
import { getVw } from './utils/styleUtils'
const Header = styled('header')

function App() {

  return (
    <Header bg="gold">
      <div style={{
       width: getVw(30),
       color: "var(--colors-red)",
      }}>aaa</div>
      <Box alignItems="center" color="red" style={{ width: getVw(55) }} >Hello 🐼!</Box>
      <Box alignItems="center"  color="var(--colors-red)">Hello 🐼!</Box>
    </Header>
  )
}

export default App
