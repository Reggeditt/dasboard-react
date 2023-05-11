import Sider from "antd/es/layout/Sider"
import Layout, { Content, Header } from "antd/es/layout/layout"
import './styles/dasboard.css'
import Menu from "antd/es/menu"
import {HiOutlineHome} from 'react-icons/hi'
import {GrOrganization} from 'react-icons/Gr'
import {BsPerson} from 'react-icons/Bs'
import {GiHamburgerMenu} from 'react-icons/Gi'
import { useState } from "react"

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="container">
        <Header style={{
          backgroundColor: "#fff",
        }}>
          <div style={{display: "flex", alignItems: "center"}}>
            <GiHamburgerMenu size={28} onClick={() => setCollapsed(!collapsed)} className="hamburger" />
            <div className="brand">Cool-Dashboard</div>
          </div>
        </Header>
        <Layout>
          <Sider collapsed={collapsed} theme="light">
            <Menu
              mode="inline"
              items={[
              {
                label: "Home",
                key: "home",
                icon: <HiOutlineHome />,
                children: [
                  {
                    label: "Profile",
                    key: "profile",
                    icon: <BsPerson />,
                  },
                  {
                    label: "All Users",
                    key: "all_users",
                    icon: <BsPerson />,
                  },
                ],
              },
              {
                label: "AboutUs",
                key: "about_us",
                icon: <GrOrganization />,
              },
            ]} />
          </Sider>
          <Content className="content">
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default App
