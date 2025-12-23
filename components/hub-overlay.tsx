"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CarAdsIcon, TrailerIcon, CutoutIcon, AdvertisingIcon } from "./workflow-icons";

interface HubCardProps {
  title: string;
  category: string;
  projectCount: string;
  bgMedia: string; // Video or image path
  mediaType?: "video" | "image"; // Default to video
  flipVideo?: boolean; // Flip video horizontally
  workflows: Array<{
    icon: React.ReactNode;
    label: string;
  }>;
}

function HubCard({ title, category, projectCount, bgMedia, mediaType = "video", flipVideo = false, workflows }: HubCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const appleEasing = [0.32, 0.72, 0, 1] as const;

  return (
    <div
      className="box-border content-stretch flex flex-col flex-1 min-h-0 items-start overflow-hidden relative rounded-[24px] shadow-[0px_1px_6px_0px_rgba(0,0,0,0.1)] w-full cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Media with Blur Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          filter: isHovered ? "blur(0px)" : "blur(5px)",
        }}
        transition={{
          duration: 0.4,
          ease: appleEasing,
        }}
      >
        {mediaType === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            style={{ transform: flipVideo ? "scaleX(-1)" : "none" }}
          >
            <source src={bgMedia} type="video/mp4" />
          </video>
        ) : (
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={bgMedia}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </motion.div>

      {/* Header */}
      <div className="relative z-10 max-w-[720px] shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col items-start p-[18px]">
          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
            <div className="text-shadow-sm flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap uppercase">
              <p className="leading-[normal] whitespace-pre">{category}</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip relative shrink-0 mt-1">
            <div className="text-shadow flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.24px]">
              <p className="leading-[30px] whitespace-pre">{title}</p>
            </div>
          </div>
          <div className="box-border content-stretch flex items-center pt-[5.5px] relative shrink-0 w-full">
            <div className="text-shadow-sm flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap">
              <p className="leading-[normal] whitespace-pre">{projectCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Cards */}
      <div className="absolute bottom-0 left-0 right-0 h-[98px] z-10">
        {workflows.map((workflow, index) => (
          <motion.div
            key={index}
            className="absolute bg-[rgba(16,17,18,0.85)] backdrop-blur-sm bottom-[-51.5px] h-[172px] overflow-clip rounded-[12px] shadow-[0px_4.668px_25.676px_0px_rgba(0,0,0,0.5)] w-[130px]"
            animate={{
              y: isHovered ? -12 : 0,
              right:
                workflows.length === 2
                  ? isHovered
                    ? index === 0
                      ? 145
                      : 26
                    : index === 0
                    ? 129
                    : 42
                  : isHovered
                  ? 26
                  : 42,
            }}
            transition={{
              duration: 0.4,
              ease: appleEasing,
            }}
          >
            <div className="absolute left-1/2 top-[calc(50%-34px)] translate-x-[-50%] translate-y-[-50%] text-pink-400">
              {workflow.icon}
            </div>
            <div className="absolute content-stretch flex flex-col items-center left-1/2 overflow-clip top-[88px] translate-x-[-50%] w-[126px]">
              <div className="text-shadow-sm flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap uppercase">
                <p className="leading-[normal] whitespace-pre">{workflow.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HubOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const appleEasing = [0.32, 0.72, 0, 1] as const;

  const hubCards: HubCardProps[] = [
    {
      title: "Workflow Video",
      category: "Hub",
      projectCount: "5 projects",
      bgMedia: "/videos/automobile.mp4", // 👈 REPLACE WITH YOUR VIDEO PATH
      mediaType: "video",
      flipVideo: true, // Flip video horizontally
      workflows: [
        {
          icon: <CarAdsIcon className="w-14 h-14" />,
          label: "CAR ADS",
        },
      ],
    },
    {
      title: "Cutout",
      category: "Hub",
      projectCount: "5 projects",
      bgMedia: "/videos/cutout.mp4", // 👈 REPLACE WITH YOUR VIDEO PATH
      mediaType: "video",
      workflows: [
        {
          icon: <CutoutIcon className="w-14 h-14" />,
          label: "AUTOYA",
        },
      ],
    },
    {
      title: "Trailers",
      category: "Hub",
      projectCount: "5 projects",
      bgMedia: "/videos/trailers.mp4", // 👈 REPLACE WITH YOUR VIDEO PATH
      mediaType: "video",
      workflows: [
        {
          icon: <TrailerIcon className="w-14 h-14" />,
          label: "TRAILER",
        },
      ],
    },
    {
      title: "Advertising",
      category: "Hub",
      projectCount: "5 projects",
      bgMedia: "/videos/advertising.mp4", // 👈 REPLACE WITH YOUR VIDEO PATH
      mediaType: "video",
      workflows: [
        {
          icon: <AdvertisingIcon className="w-14 h-14" />,
          label: "ADVERTISING",
        },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed left-[72px] top-0 right-0 bottom-0 bg-black/75 backdrop-blur-lg z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.35,
              ease: appleEasing,
            }}
            onClick={onClose}
          />

          {/* Hub Panel */}
          <motion.div
            className="fixed left-[72px] top-0 bottom-0 w-[496px] z-50 overflow-hidden"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: appleEasing,
            }}
            style={{
              originX: 0,
              originY: 0.5,
            }}
          >
            <div className="relative size-full">
              <div className="flex flex-col size-full">
                <div className="box-border flex flex-col gap-[24px] items-start px-[32px] py-[43px] size-full">
                  {hubCards.map((card, index) => (
                    <HubCard key={index} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}




