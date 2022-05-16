const getters = {
  roles: state => state.user.roles,
  sidebarRouters: state => state.permissions.sidebarRouters,
  sidebar: state => state.app.sidebar
}
export default getters
