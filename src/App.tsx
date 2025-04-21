
import {Suspense, useRef} from 'react'
import {fullpageApi, type Item} from '@fullpage/react-fullpage';
import state, {type State} from './store'
import {Sections} from './utilities/types'
import { useDeviceDectection } from './hooks'
import { SECTIONS } from './utilities/constants';
import FullPage from './components/FullPage';


// import components
// import utils
// import sections


function App() {
  const apiRef = useRef<fullpageApi>();
  const deviceType = useDeviceDectection();

  const handleLoadFullPage = ({ api }: { api: fullpageApi }) => {
    apiRef.current = api;
  }

  const handleSectionChange = ({to}: {to: Item})=>{
    state.section = SECTIONS[to.index];
  }


  return (
    <>
      {/* Add your FullPage component here */}
      <FullPage onChange={handleSectionChange} onLoad={handleLoadFullPage}  >
        {() => (
          <>
          
          {/* Add your section components here */}
          {/* Example Section Component */}
          <div>Section 1</div>
          <div>Section 2</div>
          <div>Section 3</div>
          </>
        )}
      </FullPage>
    </>
  )
}

export default App
