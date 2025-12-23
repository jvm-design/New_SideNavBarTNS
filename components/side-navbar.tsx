"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  Library,
  PlusSquare,
  Heart,
  Settings,
  User,
  Menu,
  X,
  ChevronRight,
  LayoutDashboard,
  FileText,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
}

interface SideNavbarProps {
  className?: string;
}

export function SideNavbar({ className }: SideNavbarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems: NavItem[] = [
    { title: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/" },
    { title: "Projects", icon: <FileText size={20} />, href: "/projects", badge: "12" },
    { title: "Team", icon: <Users size={20} />, href: "/team" },
    { title: "Analytics", icon: <BarChart3 size={20} />, href: "/analytics" },
    { title: "Messages", icon: <MessageSquare size={20} />, href: "/messages", badge: "3" },
    { title: "Library", icon: <Library size={20} />, href: "/library" },
  ];

  const bottomItems: NavItem[] = [
    { title: "Settings", icon: <Settings size={20} />, href: "/settings" },
    { title: "Profile", icon: <User size={20} />, href: "/profile" },
  ];

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Right edge gradient stroke */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[1px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(174,205,225,0.3) 20%, rgba(174,205,225,0.5) 40%, rgba(174,205,225,0.3) 60%, rgba(174,205,225,0.1) 80%, rgba(255,255,255,0) 100%)'
        }}
      />
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
              A
            </div>
            <span className="font-semibold text-lg">AppName</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-slate-700 text-white"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <X size={20} />}
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => setActiveItem(item.title)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all duration-200 relative overflow-hidden",
                activeItem === item.title
                  ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white shadow-lg shadow-black/50 ring-1 ring-gray-700/50"
                  : "text-slate-300 hover:bg-gradient-to-br hover:from-gray-800 hover:via-slate-700 hover:to-gray-900 hover:text-white hover:shadow-md hover:shadow-black/30",
                isCollapsed && "justify-center"
              )}
            >
              <div className="flex items-center space-x-3">
                <span className={cn(activeItem === item.title && "scale-110 transition-transform")}>
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="font-medium">{item.title}</span>
                )}
              </div>
              {!isCollapsed && item.badge && (
                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-red-500 text-white">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 mx-4 border-t border-slate-700" />

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="px-4 mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Quick Actions
            </p>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white"
              >
                <PlusSquare size={16} className="mr-2" />
                New Project
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-slate-300 border-slate-600 hover:bg-slate-700 hover:text-white"
              >
                <Heart size={16} className="mr-2" />
                Favorites
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-slate-700 p-2">
        {bottomItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setActiveItem(item.title)}
            className={cn(
              "w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 mb-1 relative overflow-hidden",
              activeItem === item.title
                ? "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white shadow-lg shadow-black/50 ring-1 ring-gray-700/50"
                : "text-slate-300 hover:bg-gradient-to-br hover:from-gray-800 hover:via-slate-700 hover:to-gray-900 hover:text-white hover:shadow-md hover:shadow-black/30",
              isCollapsed && "justify-center"
            )}
          >
            {item.icon}
            {!isCollapsed && (
              <span className="ml-3 font-medium">{item.title}</span>
            )}
          </button>
        ))}
      </div>

      {/* User Profile Section */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700 bg-slate-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center font-bold">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-slate-400 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}





