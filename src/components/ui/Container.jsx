const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 lg:max-w-7xl ${className}`}>
    {children}
  </div>
);

export default Container;
