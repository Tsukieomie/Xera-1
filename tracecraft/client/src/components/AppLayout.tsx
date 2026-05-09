import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  FileText, Layers, Clock, GitBranch, ListChecks, Moon, Sun, Menu, X,
} from "lucide-react";
import type { Case } from "@shared/schema";

const NAV = [
  { href: "/", label: "Overview", icon: FileText, testid: "nav-overview" },
  { href: "/evidence", label: "Evidence board", icon: Layers, testid: "nav-evidence" },
  { href: "/timeline", label: "Timeline", icon: Clock, testid: "nav-timeline" },
  { href: "/hypotheses", label: "Hypotheses", icon: GitBranch, testid: "nav-hypotheses" },
  { href: "/plan", label: "Research plan", icon: ListChecks, testid: "nav-plan" },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const { data: cases = [] } = useQuery<Case[]>({ queryKey: ["/api/cases"] });
  const activeCase = cases[0];

  return (
    <div className="min-h-screen flex">
      {/* mobile top bar */}
      <header className="md:hidden fixed top-0 inset-x-0 z-30 h-14 px-4 flex items-center justify-between border-b border-sidebar-border bg-sidebar/95 backdrop-blur">
        <div className="flex items-center gap-2">
          <Logo size={22} />
          <span className="font-serif text-base">Tracecraft</span>
        </div>
        <Button variant="ghost" size="icon" data-testid="button-menu-toggle" onClick={() => setOpen(o => !o)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </header>

      {/* sidebar */}
      <aside
        className={`fixed md:sticky top-0 h-dvh md:h-screen z-20 w-[260px] shrink-0 border-r border-sidebar-border bg-sidebar text-sidebar-foreground flex flex-col transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        data-testid="sidebar"
      >
        <div className="px-5 pt-6 pb-5 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <Logo size={28} />
            <div>
              <div className="font-serif text-[1.05rem] leading-tight">Tracecraft</div>
              <div className="stamp ink-faint">Research desk</div>
            </div>
          </div>
        </div>

        <nav className="px-3 py-5 flex-1 overflow-y-auto">
          <div className="stamp px-3 mb-2 ink-faint">Active case</div>
          <div className="px-3 mb-5 text-sm">
            <div className="font-serif text-[0.95rem] leading-snug" data-testid="text-active-case-title">
              {activeCase ? activeCase.title : "No case yet"}
            </div>
            {activeCase && (
              <div className="stamp ink-faint mt-1.5">
                {activeCase.status} · case {activeCase.id.slice(0, 6)}
              </div>
            )}
          </div>
          <div className="stamp px-3 mb-2 ink-faint">Sections</div>
          <ul className="space-y-0.5">
            {NAV.map(item => {
              const isActive = location === item.href;
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    data-testid={item.testid}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm hover-elevate active-elevate-2 ${
                      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                    {isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggle}
            data-testid="button-toggle-theme"
            className="w-full justify-start gap-2"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            <span className="text-sm">{theme === "dark" ? "Light" : "Dark"} mode</span>
          </Button>
          <p className="stamp ink-faint mt-3 px-1 leading-relaxed">
            Local prototype · No web search<br/>
            Source-discipline first
          </p>
        </div>
      </aside>

      {/* main */}
      <main className="flex-1 min-w-0 pt-14 md:pt-0">
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-8 md:py-12">{children}</div>
      </main>

      {/* mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-10 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
