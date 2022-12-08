const getters = {
  roles: state => state.user.roles,
  sidebarRouters: state => state.permissions.sidebarRouters,
  sidebar: state => state.app.sidebar,
  avatar: state => state.user.avatar,
  permissions: state => state.user.permissions
}
export default getters
