"use client";

import { useState } from "react";
import { AiToolsSidebar } from "@/components/aitools-sidebar";
import { HubOverlay } from "@/components/hub-overlay";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isHubOverlayOpen, setIsHubOverlayOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "hub") {
      setIsHubOverlayOpen(true);
    } else {
      setIsHubOverlayOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <AiToolsSidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      <HubOverlay 
        isOpen={isHubOverlayOpen} 
        onClose={() => {
          setIsHubOverlayOpen(false);
          setActiveTab("home");
        }} 
      />

      {/* Dark mode content area to showcase overlay effects */}
      <main className="flex-1 overflow-y-auto bg-black">
        <div className="p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Sample content blocks to show the overlay effect */}
            <div className="bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">
                Main Content Area
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This is a simple content area with dark colors to clearly 
                demonstrate the overlay effects when the Hub is opened.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
                <div className="w-full h-32 bg-gray-700 rounded mb-4"></div>
                <h3 className="text-lg font-medium text-gray-100 mb-2">Content Block 1</h3>
                <p className="text-gray-300 text-sm">
                  Sample content to visualize the overlay dimming effect.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg shadow-sm p-6 border border-gray-700">
                <div className="w-full h-32 bg-gray-700 rounded mb-4"></div>
                <h3 className="text-lg font-medium text-gray-100 mb-2">Content Block 2</h3>
                <p className="text-gray-300 text-sm">
                  Sample content to visualize the overlay dimming effect.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg shadow-sm p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
