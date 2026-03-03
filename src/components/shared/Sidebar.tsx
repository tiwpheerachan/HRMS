"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { Role } from "@/types";
import { Home, User, Calendar, Clock, Bell, Wallet, Users, Shield, Settings2, FileBarChart2 } from "lucide-react";

function NavItem({ href, label, icon: Icon }: { href: string; label: string; icon: any }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition",
        active ? "bg-brand-100 text-brand-800" : "hover:bg-slate-100 text-slate-700"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar({ role }: { role: Role }) {
  return (
    <aside className="rounded-xl2 bg-white shadow-soft ring-1 ring-slate-200/70 p-3">
      <div className="px-2 py-2">
        <div className="font-semibold">HRMS</div>
        <div className="text-xs text-slate-500 mt-1">Light - Blue/White</div>
      </div>

      <div className="mt-2 space-y-1">
        {role === "employee" && (
          <>
            <NavItem href="/dashboard" label="Dashboard" icon={Home} />
            <NavItem href="/checkin" label="Check-in/out" icon={Clock} />
            <NavItem href="/attendance" label="Attendance" icon={Calendar} />
            <NavItem href="/leave" label="Leave" icon={Calendar} />
            <NavItem href="/overtime" label="Overtime" icon={Clock} />
            <NavItem href="/payslip" label="Payslip" icon={Wallet} />
            <NavItem href="/notifications" label="Notifications" icon={Bell} />
            <NavItem href="/profile" label="Profile" icon={User} />
          </>
        )}

        {role === "teamlead" && (
          <>
            <NavItem href="/teamlead/dashboard" label="Team Dashboard" icon={Home} />
            <NavItem href="/teamlead/team" label="My Team" icon={Users} />
            <NavItem href="/teamlead/approvals" label="Approvals" icon={Shield} />
            <NavItem href="/teamlead/schedule" label="Schedule" icon={Calendar} />
          </>
        )}

        {role === "hr" && (
          <>
            <NavItem href="/hr/dashboard" label="HR Dashboard" icon={Home} />
            <NavItem href="/hr/employees" label="Employees" icon={Users} />
            <NavItem href="/hr/attendance" label="Attendance" icon={Calendar} />
            <NavItem href="/hr/leaves" label="Leaves" icon={Shield} />
            <NavItem href="/hr/payroll" label="Payroll" icon={Wallet} />
            <NavItem href="/hr/shifts" label="Shifts" icon={Clock} />
            <NavItem href="/hr/reports" label="Reports" icon={FileBarChart2} />
            <NavItem href="/hr/users" label="Users & Roles" icon={User} />
            <NavItem href="/hr/settings" label="Settings" icon={Settings2} />
          </>
        )}
      </div>
    </aside>
  );
}
