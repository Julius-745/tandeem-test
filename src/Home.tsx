import { Box } from '@chakra-ui/react'
import Layout from './components/layout'
import Banner from './components/section/banner'

function App() {

  return (
   <Box id='root'>
    <Layout>
      <Banner/>
    </Layout>
    </Box>
  )
}

export default App
