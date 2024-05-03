import '../node_modules/antd/dist/reset.css'
import Sidebar from './components/sidebar';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import Formulario from './components/formIngreso';
import TabAreasAc from './components/tabAreasAcademicas';
import TabArticulos from './components/tabArticulos';
import TabCateg from './components/tabCategorias';
import TabEspacios from './components/tabEspacios';
import TabEdificios from './components/tabEdificios';
import TabUsuarios from './components/tabUsuarios';
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
            padding: 24,
            minHeight: 280,
          }}
        >
          <TabUsuarios/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;