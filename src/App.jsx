import { Layout } from 'antd';
import '../node_modules/antd/dist/reset.css';
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
            padding: 24,
            minHeight: 280,
          }}
        >
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;