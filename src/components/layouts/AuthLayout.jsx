import { Sparkles } from "lucide-react";
import { RouteLink } from "../../router/Router.jsx";

const AuthLayout = ({ children }) => (
  <div className="min-h-screen bg-base-50">
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-base-900 px-12 py-12 text-white lg:flex">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-soft">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="font-display text-lg font-semibold">Flowforge</p>
            <p className="text-xs text-base-300">Template auth suite</p>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold">Launch-ready auth flows.</h1>
          <p className="text-base text-base-200">
            Use these pages as a visual template only. No backend connection or
            authentication service is wired.
          </p>
          <ul className="space-y-3 text-sm text-base-200">
            <li>• Pre-styled layouts and form states</li>
            <li>• Local-only, dummy data usage</li>
            <li>• Redirects to a sample dashboard after submit</li>
          </ul>
        </div>
        <p className="text-xs text-base-400">Designed for premium SaaS templates.</p>
      </div>

      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <RouteLink to="/" className="text-sm font-semibold text-brand-600">
            ← Back to landing page
          </RouteLink>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AuthLayout;
