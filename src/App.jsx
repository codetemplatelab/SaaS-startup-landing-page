import SiteLayout from "./components/layouts/SiteLayout.jsx";
import AuthLayout from "./components/layouts/AuthLayout.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout.jsx";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Router, useRouter } from "./router/Router.jsx";

const AppRoutes = () => {
  const { route } = useRouter();

  if (route === "/") {
    return (
      <SiteLayout>
        <Home />
      </SiteLayout>
    );
  }

  if (route === "/signin") {
    return (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    );
  }

  if (route === "/signup") {
    return (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    );
  }

  if (route === "/dashboard") {
    return (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    );
  }

  return <NotFound />;
};

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
