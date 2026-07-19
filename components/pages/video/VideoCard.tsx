"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";
import { VIDEO_URL } from "@/data/video";

import VideoHero from "./VideoHero";
import VideoPlayer from "./VideoPlayer";
import VideoQuestion from "./VideoQuestion";
import VideoContinue from "./VideoContinue";

export default function VideoCard() {
  const [openedVideo, setOpenedVideo] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  function handlePlay() {
    window.open(VIDEO_URL, "_blank");
    setOpenedVideo(true);
  }

  function handleFinish() {
    setConfirmed(true);
  }

  return (
    <GlassCard>
      <div className="relative max-w-5xl mx-auto py-10">
        <VideoHero />

        <VideoPlayer
          openedVideo={openedVideo}
          onPlay={handlePlay}
        />

        {openedVideo && !confirmed && (
          <VideoQuestion onFinish={handleFinish} />
        )}

        {confirmed && (
          <VideoContinue />
        )}
      </div>
    </GlassCard>
  );
}
