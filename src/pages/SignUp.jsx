import { Lock, Mail, User } from "lucide-react";
import Button from "../components/ui/Button.jsx";
import Notice from "../components/ui/Notice.jsx";
import { RouteLink, useRouter } from "../router/Router.jsx";

const SignUp = () => {
  const { navigate } = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-3xl font-semibold text-base-900">Create account</h2>
        <p className="mt-2 text-sm text-base-600">
          Build your workspace in seconds with dummy local data.
        </p>
      </div>

      <Notice title="Template only">
        This is a front-end template with no backend connection. Use dummy details to
        preview the dashboard.
      </Notice>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-base-700">
          Full name
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-base-200 bg-white px-3 py-2">
            <User className="h-4 w-4 text-base-400" />
            <input
              type="text"
              placeholder="Alex Johnson"
              className="w-full border-0 bg-transparent text-sm text-base-900 outline-none"
              required
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-base-700">
          Email address
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-base-200 bg-white px-3 py-2">
            <Mail className="h-4 w-4 text-base-400" />
            <input
              type="email"
              placeholder="alex@company.com"
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
              placeholder="Create a password"
              className="w-full border-0 bg-transparent text-sm text-base-900 outline-none"
              required
            />
          </div>
        </label>

        <label className="flex items-start gap-2 text-sm text-base-600">
          <input type="checkbox" className="mt-1 h-4 w-4 rounded border-base-300" required />
          I agree to the Terms of Service and Privacy Policy (template only).
        </label>

        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>

      <p className="text-sm text-base-600">
        Already have an account?{" "}
        <RouteLink to="/signin" className="font-semibold text-brand-600">
          Sign in
        </RouteLink>
      </p>
    </div>
  );
};

export default SignUp;
