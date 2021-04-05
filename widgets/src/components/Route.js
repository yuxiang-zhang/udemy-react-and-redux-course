const Route = ({path, children}) => {
  return window.location.pathname === path && children;
};

export default Route;
