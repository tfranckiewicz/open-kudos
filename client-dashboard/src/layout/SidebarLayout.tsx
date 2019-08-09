import { Icon, Layout, Menu } from 'antd'
import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { dashboardRoutes } from '../setup/config'
import { pageTitles } from '../setup/messages'

interface IMenuItem {
  content: string,
  url: string,
  iconType?: string,
  children?: IMenuItem[]
}

const { Sider } = Layout
const { Item, SubMenu } = Menu
const menuItems: IMenuItem[] = [
  {
    content: pageTitles.dashboard,
    iconType: 'dashboard',
    url: dashboardRoutes.dashboardPage
  },
  {
    children: [
      {
        content: pageTitles.list,
        iconType: 'unordered-list',
        url: dashboardRoutes.giftsManagementPage
      },
      {
        content: pageTitles.requests,
        iconType: 'ordered-list',
        url: dashboardRoutes.giftRequestsPage
      }
    ],
    content: pageTitles.gifts,
    iconType: 'gift',
    url: dashboardRoutes.giftsManagementPage
  },
  {
    content: pageTitles.transfers,
    iconType: 'transaction',
    url: dashboardRoutes.transfersPage
  },
  {
    children: [
      {
        content: pageTitles.list,
        iconType: 'unordered-list',
        url: dashboardRoutes.usersNoKudos
      }
    ],
    content: pageTitles.users,
    iconType: 'user',
    url: dashboardRoutes.usersManagementPage
  },
  {
    content: pageTitles.settings,
    iconType: 'setting',
    url: dashboardRoutes.settingPage
  }
]

const renderSubMenu = (menuItem: IMenuItem) => {
  const { content, iconType, url, children } = menuItem
  if (children && children.length > 0) {
    return (
      <SubMenu key={url} title={
        <span>
          {iconType && <Icon type={iconType} />}
          {content}
        </span>
      }
      >
        {children.map(renderSubMenu)}
      </SubMenu>
    )
  }

  return (
    <Item key={url}>
      <Link to={url}>
        <Icon type={iconType} />
        <span>{content}</span>
      </Link>
    </Item>
  )
}

const SidebarLayout: React.FC<RouteComponentProps> = (props) => {
  const activeRoute = props.location.pathname

  return (
    <Sider
      width={250}
      className="sidebar-container"
    >
      <div className="logo-container">
        <h1>Open Kudos </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeRoute]}
      >
        {
          menuItems.map(item => renderSubMenu(item))
        }
      </Menu>
    </Sider>
  )
}

export default withRouter(SidebarLayout)
