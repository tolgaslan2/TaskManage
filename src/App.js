
import Sidebar from './components/Sidebar';
import { useAutoAnimate } from '@formkit/auto-animate/react'
function App() {
  const [parent] = useAutoAnimate();

  return (
    <>
      <div className='flex' ref={parent}>
        <Sidebar />
        <div className='bg-gray-200 flex-1'></div>
      </div>
    </>
  );
}

export default App;
