import Button from "../components/ui/Button.jsx";
import { RouteLink } from "../router/Router.jsx";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-base-50 px-6">
    <div className="max-w-md text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold text-base-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-base-600">
        The page you are looking for is part of this template but not available yet.
      </p>
      <Button as={RouteLink} to="/" className="mt-6">
        Back to home
      </Button>
    </div>
  </div>
);

export default NotFound;
