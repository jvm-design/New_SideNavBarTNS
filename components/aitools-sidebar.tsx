"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { svgPaths } from "@/lib/svg-paths";
import { HelpMenuOverlay } from "./help-menu-overlay";

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[45px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 45 32"
      >
        <g id="Logo">
          <g id="Vector">
            <path d={svgPaths.p18f19200} fill="#FEFEFE" />
            <path d={svgPaths.p217c0c00} fill="#FEFEFE" />
            <path d={svgPaths.p2957680} fill="#FEFEFE" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface SidebarBtnProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

function SidebarBtn({ icon, label, isActive = false, onClick }: SidebarBtnProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showActiveOrHover = isActive || isHovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="content-stretch flex flex-col gap-[4px] h-[58px] items-center justify-center relative rounded-[16px] shrink-0 w-full"
      data-name="sidebar_btn"
    >
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
        {/* Hover gradient background layer */}
        <motion.div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              "linear-gradient(46deg, #181B1F 55.14%, #2E30FE 84.9%, #851FE8 90.5%, #FF06C9 91.99%, #181B1F 111.04%)",
          }}
          initial={false}
          animate={{
            opacity: isHovered && !isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        />

        {/* Active/clicked gradient background layer */}
        <motion.div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              "linear-gradient(48deg, #181B1F 1.15%, #181B1F 9.49%, #282BC5 26.58%, #472BF8 38.31%, #851FE8 53.45%, #FF06C9 88.55%)",
          }}
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        />

        {/* Content layer */}
        <div className="flex flex-col items-center justify-center size-full relative">
          <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative size-full font-light">
            <div
              className={`transition-all ${
                showActiveOrHover
                  ? "[&_svg]:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] [&_svg_path]:stroke-[#fefefe] [&_svg_path[fill='currentColor']]:fill-[#fefefe] [&_svg_path[fill='currentColor']]:stroke-none"
                  : "[&_svg_path]:stroke-[rgba(255,255,255,0.4)] [&_svg_path[fill='currentColor']]:fill-[rgba(255,255,255,0.4)] [&_svg_path[fill='currentColor']]:stroke-none"
              }`}
              style={{
                transitionDuration: "var(--timing-standard)",
                transitionTimingFunction: "var(--ease-apple)"
              }}
            >
              {icon}
            </div>
            <p
              className={`font-medium leading-[normal] not-italic relative shrink-0 text-[11px] text-nowrap whitespace-pre transition-colors ${
                isActive ? "text-white" : isHovered ? "text-white/70" : "text-white/40"
              }`}
              style={{
                transitionDuration: "var(--timing-standard)",
                transitionTimingFunction: "var(--ease-apple)"
              }}
            >
              {label}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface HomeButtonProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function HomeButton({ activeTab, setActiveTab }: HomeButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeTab === "home";

  return (
    <button
      onClick={() => setActiveTab("home")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="content-stretch flex flex-col gap-[4px] h-[58px] items-center justify-center relative rounded-[12px] shrink-0 w-full"
    >
      <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-full">
        {/* Hover gradient background layer - elegant black gradient */}
        <motion.div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              "linear-gradient(46deg, #0a0a0a 55.14%, #1a1a1a 70%, #2a2a2a 84.9%, #1f1f1f 90.5%, #0f0f0f 91.99%, #0a0a0a 111.04%)",
          }}
          initial={false}
          animate={{
            opacity: isHovered && !isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        />

        {/* Active/clicked gradient background layer - deeper black gradient */}
        <motion.div
          className="absolute inset-0 rounded-[8px]"
          style={{
            backgroundImage:
              "linear-gradient(48deg, #000000 1.15%, #0a0a0a 9.49%, #1a1a1a 26.58%, #2d2d2d 38.31%, #1f1f1f 53.45%, #0d0d0d 88.55%)",
          }}
          initial={false}
          animate={{
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        />

        {/* Content layer */}
        <div className="flex flex-col items-center justify-center size-full relative">
          <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center p-[12px] relative size-full font-light">
            <Logo />
            <p className="font-semibold leading-[normal] not-italic relative shrink-0 text-[#fefefe] text-[12px] text-nowrap whitespace-pre">
              HOME
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface NavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function Nav({ activeTab, setActiveTab }: NavProps) {
  return (
    <div
      className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
      data-name="nav"
    >
      <SidebarBtn
        isActive={activeTab === "library"}
        onClick={() => setActiveTab("library")}
        icon={
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                d={svgPaths.p12ee3d00}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={svgPaths.p2ff6c80}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        }
        label="LIBRARY"
      />
      <SidebarBtn
        isActive={activeTab === "story"}
        onClick={() => setActiveTab("story")}
        icon={
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path
                d={svgPaths.p1616b7f0}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M5 3V7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M19 17V21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M3 5H7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M17 19H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        }
        label="STORY"
      />
      <SidebarBtn
        isActive={activeTab === "hub"}
        onClick={() => setActiveTab("hub")}
        icon={
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <path d={svgPaths.p801d400} stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d={svgPaths.p353ae460} stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d={svgPaths.p37b28a00} stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d={svgPaths.p17356800} stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d={svgPaths.p262a0500} fill="currentColor" />
            </svg>
          </div>
        }
        label="HUB"
      />
      <SidebarBtn
        isActive={activeTab === "apps"}
        onClick={() => setActiveTab("apps")}
        icon={
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 18 20"
            >
              <path d="M11.5447 1.67285C11.9869 0.699988 13.116 0.246738 14.1082 0.643548L16.3113 1.52441C17.3747 1.94975 17.8644 3.17983 17.3845 4.21972L15.7019 7.86621L15.3738 8.57616H17.0925C17.3687 8.57616 17.5925 8.79996 17.5925 9.07616V17.0762C17.5924 18.4568 16.4732 19.5762 15.0925 19.5762H3.09254C1.712 19.5761 0.592709 18.4568 0.592539 17.0762V9.07616C0.592539 8.80136 0.814459 8.57836 1.08864 8.57616L2.68727 8.56346L1.36598 7.66308L1.21754 7.56152C1.2125 7.55808 1.20773 7.55435 1.20289 7.55078C0.262439 6.85723 0.440938 5.40246 1.52125 4.95703L3.64137 4.083L3.85231 3.99511L3.92457 3.77831L4.64918 1.60253C5.01821 0.493908 6.45716 0.213888 7.2146 1.10351L8.7009 2.8496L8.8494 3.02441L9.0779 3.02538L10.5994 3.0371L10.9236 3.03906L11.0584 2.74316L11.5447 1.67285ZM1.59254 17.0762C1.59271 17.9045 2.2643 18.5761 3.09254 18.5762H15.0925C15.9209 18.5762 16.5924 17.9045 16.5925 17.0762V9.57616H1.59254V17.0762ZM7.5925 12.0762H10.5925C10.8687 12.0762 11.0925 12.3 11.0925 12.5762C11.0924 12.8522 10.8686 13.0762 10.5925 13.0762H7.5925C7.3166 13.0761 7.0927 12.8522 7.09254 12.5762C7.09254 12.3001 7.3165 12.0763 7.5925 12.0762ZM5.59742 1.91796L4.87379 4.09374C4.73615 4.50733 4.42518 4.84064 4.02223 5.00683L1.90309 5.88085L1.04664 6.23437L1.81227 6.75683L3.87477 8.16306C3.93956 8.20736 3.99021 8.26286 4.02614 8.32516L4.16969 8.57616H10.5896L10.4714 7.97949C10.4448 7.84418 10.4274 7.69814 10.4216 7.55663L10.4207 7.37695C10.4283 7.18229 10.4658 6.95138 10.5847 6.75781L11.7859 4.80371L12.2507 4.04882L11.364 4.04199L9.0711 4.02538C8.6352 4.02229 8.2218 3.83 7.9392 3.49804L6.45289 1.75195L5.8777 1.07617L5.59742 1.91796ZM13.7371 1.57226C13.2719 1.38614 12.7467 1.57391 12.5007 1.99902L12.4548 2.08691L12.1472 2.76464L11.9861 3.11913L12.2908 3.3623C12.8556 3.81245 13.0609 4.64105 12.6384 5.32812L11.4929 7.18945L11.4207 7.30761L11.4197 7.44726C11.4195 7.46577 11.4196 7.48873 11.4207 7.51562C11.4238 7.59074 11.4325 7.66992 11.4451 7.74316C11.4579 7.8169 11.4733 7.88006 11.4871 7.92382C11.5033 7.97507 11.5115 8.027 11.5115 8.07616V8.57616H14.2732L14.407 8.28516L16.4763 3.80078C16.7161 3.28095 16.4719 2.66583 15.9402 2.45312L13.7371 1.57226Z" fill="currentColor" />
            </svg>
          </div>
        }
        label="APPS"
      />
      <SidebarBtn
        isActive={activeTab === "studio"}
        onClick={() => setActiveTab("studio")}
        icon={
          <div className="relative shrink-0 size-[24px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19 19"
            >
              <path
                d={svgPaths.p19e60400}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={svgPaths.p1dd07c00}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d={svgPaths.p28bc2300}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M6.625 16.1875H17.5938"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        }
        label="STUDIO"
      />
    </div>
  );
}

interface AiToolsSidebarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export function AiToolsSidebar({
  activeTab: externalActiveTab,
  setActiveTab: externalSetActiveTab,
}: AiToolsSidebarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState("home");
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  
  const activeTab = externalActiveTab ?? internalActiveTab;
  const setActiveTab = externalSetActiveTab ?? setInternalActiveTab;

  return (
    <div
      className="backdrop-blur-md backdrop-filter bg-black box-border content-stretch flex flex-col h-screen items-center justify-between px-[8px] py-[24px] relative shrink-0 w-[72px] z-[55]"
      data-name="Nav"
    >
      {/* AITools Border Gradient (TNS Spec) */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-[1px] pointer-events-none"
        style={{
          background: "var(--border-gradient-ai)"
        }}
      />
      <div className="content-stretch flex flex-col gap-[4px] items-center justify-end relative shrink-0 w-full">
        <div
          className="bg-clip-text bg-gradient-to-r flex flex-col font-semibold from-[#2e30fe] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap to-[#ff06c9]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          <p className="leading-[normal] whitespace-pre">v0.6</p>
        </div>
        <HomeButton activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content-stretch flex flex-col gap-[8px] h-[74px] items-center justify-end relative shrink-0 w-full">
        <button 
          onClick={() => setIsHelpMenuOpen(!isHelpMenuOpen)}
          className={`box-border content-center flex flex-wrap gap-[10px] items-center justify-center overflow-clip p-[4px] relative rounded-[8px] shrink-0 transition-colors ${
            isHelpMenuOpen ? "bg-white/10" : "hover:bg-white/5"
          }`}
        >
          <div className="relative shrink-0 size-[24px]">
            {/* Info Icon */}
            <motion.svg
              className="block size-full absolute inset-0"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              initial={false}
              animate={{
                opacity: isHelpMenuOpen ? 0 : 1,
                scale: isHelpMenuOpen ? 0.8 : 1,
                rotate: isHelpMenuOpen ? -90 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <path d={svgPaths.p29592580} fill="#FFFFFF" />
            </motion.svg>
            
            {/* Close X Icon */}
            <motion.svg
              className="block size-full absolute inset-0"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              initial={false}
              animate={{
                opacity: isHelpMenuOpen ? 1 : 0,
                scale: isHelpMenuOpen ? 1 : 0.8,
                rotate: isHelpMenuOpen ? 0 : 90,
              }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </button>
        <button className="relative shrink-0 size-[32px] hover:opacity-80 transition-opacity">
          <div className="absolute bg-[#4bab71] inset-0 overflow-clip rounded-[40px]">
            <img
              alt="User avatar"
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
            />
          </div>
          <div className="absolute bg-[#ffc224] bottom-[22px] left-[22px] rounded-[9999px] size-[12px]">
            <div
              aria-hidden="true"
              className="absolute border-2 border-[#292d32] border-solid inset-[-2px] pointer-events-none rounded-[10001px]"
            />
          </div>
        </button>
      </div>
      
      <HelpMenuOverlay 
        isOpen={isHelpMenuOpen} 
        onClose={() => setIsHelpMenuOpen(false)} 
      />
    </div>
  );
}

