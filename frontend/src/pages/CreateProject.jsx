import { getLineHeight } from "antd/es/theme/internal";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Button, Layout } from "antd";
export const CreateProject = () => {
  const { Header, Content, Footer } = Layout;
  const LayoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
    width: "calc(500px - 8px)",
    maxWidth: "calc(500px -  8px)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    paddingInline: 48,
    LineHeight: "68px",
    backgroundColor: "#4096ff",
  };

  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  };

  const { createProjectMutation, isPending } = useCreateProject();

  async function handleCreateProject() {
    console.log("going to trigger the api");
    try {
      await createProjectMutation();
      console.log("Now we should redirect to the ediot");
    } catch (error) {
      console.log("Error creatign project", error);
    }
  }

  return (
    <Layout style={LayoutStyle}>
      <Header style={headerStyle}>
        <h1>Create Project</h1>
      </Header>
      <Content style={contentStyle}>
        <button type="primary" onClick={handleCreateProject}>
          Create Playground
        </button>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
