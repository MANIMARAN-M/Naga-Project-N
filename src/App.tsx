
// import of react-router-dom to manage navigations
import { Route, Routes } from 'react-router-dom';
// import of style
import './sass/style.css';
// import of reuseable components
import Layout from './components/layout/layout';
import TabFive from './components/pages/tabFive/tabFiveIndex';
import TabFour from './components/pages/tabFour/tabFourIndex';
import TabOne from './components/pages/tabOne/tabOneIndex';
import TabSix from './components/pages/tabSix/tabSixIndex';
import TabThree from './components/pages/tabThree/tabThreeIndex';
import TabTwo from './components/pages/tabTwo/tabTwoIndex';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<TabOne />} />
        <Route path='/tab-two' element={<TabTwo />} />
        <Route path='/tab-three' element={<TabThree />} />
        <Route path='/tab-four' element={<TabFour />} />
        <Route path='/tab-five' element={<TabFive />} />
        <Route path='/tab-six' element={<TabSix />} />
      </Routes>
    </Layout>
  );
}

export default App;
