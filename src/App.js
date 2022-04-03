import { Layout } from "antd";
import Add from "./componets/Todo/Add";
import List from "./componets/Todo/List";

const { Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Content style={{ padding: "50px" }}>
        <div className="site-layout-content">
          <h1>TODO LIST</h1>
          <Add />
          <List />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
