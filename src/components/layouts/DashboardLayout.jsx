import { useState } from "react";
import {
  BarChart3,
  Bell,
  LayoutGrid,
  LogOut,
  Menu,
  Settings,
  Users,
  X
} from "lucide-react";
import { RouteLink } from "../../router/Router.jsx";
import Button from "../ui/Button.jsx";

const sidebarLinks = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Teams", icon: Users },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings }
];

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-50 text-base-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-base-200 bg-white px-6 py-8 lg:flex">
          <RouteLink to="/" className="text-sm font-semibold text-brand-600">
            ← Back to landing
          </RouteLink>
          <div className="mt-8 space-y-2 text-sm text-base-600">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.label}
                  type="button"
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-base-100"
                >
                  <Icon className="h-4 w-4 text-brand-500" />
                  {link.label}
                </button>
              );
            })}
          </div>
          <div className="mt-auto">
            <RouteLink
              to="/"
              className="flex items-center gap-2 text-sm font-semibold text-base-500 hover:text-base-900"
            >
              <LogOut className="h-4 w-4" />
              Sign out (template)
            </RouteLink>
          </div>
        </aside>

        <div className="flex flex-1 flex-col">
          <header className="border-b border-base-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="text-sm text-base-500">Welcome back</p>
                <h1 className="text-xl font-semibold text-base-900">Flowforge Dashboard</h1>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="secondary" className="h-10">
                  <Bell className="h-4 w-4" />
                  Alerts
                </Button>
                <Button className="h-10">New workflow</Button>
                <div className="hidden items-center gap-2 rounded-full border border-base-200 bg-base-50 px-3 py-1 text-sm lg:flex">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-700">
                    AC
                  </span>
                  <span className="font-semibold text-base-700">Alex Chen</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-base-200 px-6 py-3 lg:hidden">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-semibold text-base-600"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-4 w-4" />
                Open menu
              </button>
              <div className="flex items-center gap-2 rounded-full border border-base-200 bg-base-50 px-3 py-1 text-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/20 text-brand-700">
                  AC
                </span>
                <span className="font-semibold text-base-700">Alex Chen</span>
              </div>
            </div>
          </header>

          {open ? (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-base-900/40"
                onClick={() => setOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <RouteLink to="/" className="text-sm font-semibold text-brand-600">
                    ← Back to landing
                  </RouteLink>
                  <button type="button" onClick={() => setOpen(false)}>
                    <X className="h-5 w-5 text-base-600" />
                  </button>
                </div>
                <div className="mt-6 space-y-2 text-sm text-base-600">
                  {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <button
                        key={link.label}
                        type="button"
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-base-100"
                        onClick={() => setOpen(false)}
                      >
                        <Icon className="h-4 w-4 text-brand-500" />
                        {link.label}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-8">
                  <RouteLink
                    to="/"
                    className="flex items-center gap-2 text-sm font-semibold text-base-500 hover:text-base-900"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out (template)
                  </RouteLink>
                </div>
              </div>
            </div>
          ) : null}

          <main className="flex-1 px-6 py-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
