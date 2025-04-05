import { Box, styled } from '@styled-system/jsx'
import { getVw } from './utils/styleUtils'
import { css } from '@styled-system/css'
const Header = styled('header')

function App() {

  return (
    <Header bg="gold">
      <div className={css({
          color: "var(--colors-red)", 
          
          md: {
            color: "var(--colors-white)", 
            fontSize: '300px', 
          },
         
      })} 
      style={{
       width: getVw(30),
       
      }} >aaa</div>
      <Box alignItems="center" color="red" style={{ width: getVw(55) }} >Hello 🐼!</Box>
      <Box alignItems="center"  color="var(--colors-red)">Hello 🐼!</Box>
    </Header>
  )
}

export default App
