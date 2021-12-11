
import Resume from './components/Resume.js'
import Cover from './components/Cover.js'
import TabNav from './components/TabNav.js'

function App() {
  return (
    <div className="bg-black h-full w-full">
      <Cover />
      <Resume />
      <TabNav />
    </div>
  );
}

export default App;
