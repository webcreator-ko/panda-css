import { Box, styled } from '@styled-system/jsx'
const Header = styled('header')

function App() {

  return (
    <Header bg="gold">
      {/* 2つのカラーコード */}
      <Box alignItems="center" color="red" >Hello 🐼!</Box>
      <Box alignItems="center"  color="var(--colors-red)">Hello 🐼!</Box>
    </Header>
  )
}

export default App
