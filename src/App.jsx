import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/antd/dist/reset.css';
import AreaList from './Area/AreaList';
import TabArticulos from './Articulo/tabArticulos';
import EdificioList from './Edificio/EdificioList';
import EspacioList from './Espacio/EspacioList';
import InstitutosList from './Instituto/InstitutosList';
import Sidebar from './components/sidebar';
const { Header, Content } = Layout;
const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar />
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            minHeight: 280,
          }}
        >
          <Routes>
            <Route path='/Institutos' element={<InstitutosList />} />
            <Route path='/areas_academicas/:id_instituto' element={<AreaList />} />
            <Route path='/edificios/:id_area' element={<EdificioList />} />
            <Route path='/espacios/:id_edificio' element={<EspacioList />} />
            <Route path='/articulos/:id_espacio' element={<TabArticulos />} />

          </Routes>

        </Content>
      </Layout>
    </Layout>
  );
};
export default App;