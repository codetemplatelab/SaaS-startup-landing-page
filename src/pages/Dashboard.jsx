import { ArrowUpRight, Clock, Layers, ShieldCheck } from "lucide-react";
import Notice from "../components/ui/Notice.jsx";

const stats = [
  { label: "Active workflows", value: "128", change: "+12%" },
  { label: "Automation uptime", value: "99.98%", change: "+0.2%" },
  { label: "Hours saved", value: "1,240", change: "+18%" },
  { label: "Alerts resolved", value: "94", change: "+7%" }
];

const activity = [
  { title: "Lifecycle automation updated", time: "2 hours ago", status: "In review" },
  { title: "New alert routing added", time: "Today", status: "Live" },
  { title: "Quarterly ops report exported", time: "Yesterday", status: "Completed" },
  { title: "Retention cohort dashboard shared", time: "Yesterday", status: "Completed" }
];

const Dashboard = () => (
  <div className="space-y-8">
    <Notice title="Template dashboard">
      This dashboard is purely front-end. No backend or real data is connected.
    </Notice>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-2xl border border-base-200 bg-white p-5 shadow-soft">
          <p className="text-sm text-base-500">{item.label}</p>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-semibold text-base-900">{item.value}</span>
            <span className="text-sm font-semibold text-accent-600">{item.change}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-base-900">Workflow performance</h2>
            <p className="text-sm text-base-500">Last 30 days</p>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-brand-600">
            View report <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-base-200 bg-base-50 p-4">
            <p className="text-xs uppercase text-base-500">Success rate</p>
            <p className="mt-2 text-2xl font-semibold text-base-900">98.4%</p>
          </div>
          <div className="rounded-2xl border border-base-200 bg-base-50 p-4">
            <p className="text-xs uppercase text-base-500">Avg response</p>
            <p className="mt-2 text-2xl font-semibold text-base-900">1.4s</p>
          </div>
          <div className="rounded-2xl border border-base-200 bg-base-50 p-4">
            <p className="text-xs uppercase text-base-500">Live automations</p>
            <p className="mt-2 text-2xl font-semibold text-base-900">57</p>
          </div>
        </div>
        <div className="mt-6 h-52 rounded-2xl border border-base-200 bg-gradient-to-br from-brand-50 via-white to-accent-50" />
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-semibold text-base-700">
            <Layers className="h-4 w-4 text-brand-500" />
            Active stacks
          </div>
          <div className="mt-4 space-y-3 text-sm text-base-600">
            <div className="flex items-center justify-between">
              <span>Lifecycle automation</span>
              <span className="text-base-900">32 tasks</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Revenue routing</span>
              <span className="text-base-900">18 tasks</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Customer health</span>
              <span className="text-base-900">9 tasks</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-base-200 bg-white p-6 shadow-soft">
          <div className="flex items-center gap-2 text-sm font-semibold text-base-700">
            <Clock className="h-4 w-4 text-accent-500" />
            Recent activity
          </div>
          <div className="mt-4 space-y-3 text-sm text-base-600">
            {activity.map((item) => (
              <div key={item.title} className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-base-900">{item.title}</p>
                  <p className="text-xs text-base-400">{item.time}</p>
                </div>
                <span className="rounded-full bg-base-100 px-2 py-1 text-xs text-base-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-base-200 bg-base-900 p-6 text-white shadow-soft">
          <div className="flex items-center gap-2 text-sm font-semibold text-base-200">
            <ShieldCheck className="h-4 w-4 text-accent-300" />
            Compliance snapshot
          </div>
          <p className="mt-3 text-sm text-base-200">
            SOC 2, GDPR, and enterprise controls enabled across all workflows.
          </p>
          <div className="mt-4 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-4/5 rounded-full bg-accent-400" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
