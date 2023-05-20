
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
import DropdownAPI from './components/pages/dropdownAPI/dropdownAPI';
import BreadCrumb from './components/reusableComponents/breadCrumb';
import TabTwoView from './components/pages/tabTwo/tabTwoView';
import PowerBIReports from './components/pages/PowerBIdashboard/PowerBIdashboard';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<TabOne />} />
        <Route path='/tab-two'>
          <Route index element={<TabTwo />} />
          <Route path='list-view' element={<TabTwoView />} />
          <Route path='update-view' element={<DropdownAPI />}>
            <Route index element={<BreadCrumb firstName='Tab One' link='/tab-two' secondName='Update List' />} />
          </Route>
        </Route>
        <Route path='/tab-three' element={<TabThree />} />
        <Route path='/tab-four' element={<TabFour />} />
        <Route path='/tab-five' element={<TabFive />} />
        <Route path='/tab-six' element={<TabSix />} />
        <Route path='/poweBI-reports' element={<PowerBIReports />} />
      </Routes>
    </Layout>
  );
}

export default App;
