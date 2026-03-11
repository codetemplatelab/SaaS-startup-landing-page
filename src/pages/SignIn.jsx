import { Lock, Mail } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Notice from "../components/ui/Notice.jsx";
import { RouteLink, useRouter } from "../router/Router.jsx";

const SignIn = () => {
  const { navigate } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl font-semibold text-base-900">Sign in</h2>
        <p className="mt-2 text-sm text-base-600">
          Use any email and password. This is a local-only template.
        </p>
      </div>

      <Notice title="Template only">
        No backend or authentication provider is connected. Submitting will route to
        a demo dashboard.
      </Notice>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-base-700">
          Email address
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-base-200 bg-white px-3 py-2">
            <Mail className="h-4 w-4 text-base-400" />
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full border-0 bg-transparent text-sm text-base-900 outline-none"
              required
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-base-700">
          Password
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-base-200 bg-white px-3 py-2">
            <Lock className="h-4 w-4 text-base-400" />
            <input
              type="password"
              placeholder="Enter any password"
              className="w-full border-0 bg-transparent text-sm text-base-900 outline-none"
              required
            />
          </div>
        </label>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-base-600">
            <input type="checkbox" className="h-4 w-4 rounded border-base-300" />
            Remember me
          </label>
          <span className="text-brand-600">Forgot password?</span>
        </div>

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <p className="text-sm text-base-600">
        New here?{" "}
        <RouteLink to="/signup" className="font-semibold text-brand-600">
          Create an account
        </RouteLink>
      </p>
    </div>
  );
};

export default SignIn;
