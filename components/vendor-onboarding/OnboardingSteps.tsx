"use client";

import { useState, useEffect } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import OnboardingStep from "@/components/shared/OnboardingStep";
import CurvedArrow from "@/components/shared/CurvedArrow";

const steps = [
  {
    stepNumber: 1,
    title: "Let us know you!",
    description:
      "Let's begin your journey with Warmpawz. Share your details and tell us about your expertise in pet care services.",
    videoSrc: "/videos/step1.mov",
  },
  {
    stepNumber: 2,
    title: "Upload your documents",
    description:
      "Your expertise deserves visibility. Upload the necessary certifications and documents to verify your qualifications.",
    videoSrc: "/videos/step2.mov",
  },
  {
    stepNumber: 3,
    title: "Submission Completed",
    description:
      "Sit back and relax, while we review the application. Our team will carefully assess your profile and credentials.",
    videoSrc: "/videos/step3.mov",
  },
  {
    stepNumber: 4,
    title: "Look out for query notifications",
    description:
      "Submit any missing details, Help move the application. Stay responsive to ensure a smooth verification process.",
    videoSrc: "/videos/step4.mov",
  },
  {
    stepNumber: 5,
    title: "Approved!",
    description:
      "Ready to set up and start growing! Congratulations on completing the verification process successfully.",
    videoSrc: "/videos/step5.mov",
  },
  {
    stepNumber: 6,
    title: "Your choice of Services",
    description:
      "Select and Publish your services. Choose from our catalog or create your own unique service offerings.",
    videoSrc: "/videos/step6.mov",
  },
  {
    stepNumber: 7,
    title: "Congrats! You're Ready!",
    description:
      "You are ready to receive your Pet Parents. Start connecting with pet parents and grow your business.",
    videoSrc: "/videos/step7.mov",
  },
];

// Video frame matching OnboardingStep's own frame (no extra PhoneMockup wrapper)
const StepVideo = ({ videoSrc }: { videoSrc: string }) => (
  <div className="relative w-[220px] h-[450px] sm:w-[280px] sm:h-[570px] rounded-[48px] overflow-hidden">
    <video
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      className="w-full h-full object-cover video-no-controls bg-transparent"
      style={{ pointerEvents: "none" }}
      onContextMenu={(e) => e.preventDefault()}
    />
  </div>
);

// StickyScroll content with "Step N" prefix in title
const stepsForSticky = steps.map((step) => ({
  title: `Step ${step.stepNumber}: ${step.title}`,
  description: step.description,
  content: <StepVideo videoSrc={step.videoSrc} />,
}));

const bgColors = [
  "#EDE3D8", // beige
  "#C8D5C8", // sage
  "#FFFFFF", // white
];

const OnboardingSteps = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Desktop: StickyScroll with step titles
  if (isDesktop) {
    return <StickyScroll content={stepsForSticky} />;
  }

  // Mobile: Original OnboardingStep components with alternating backgrounds
  return (
    <>
      {steps.map((step, index) => (
        <div
          key={step.stepNumber}
          className="py-12 sm:py-16 px-4 sm:px-6"
          style={{ backgroundColor: bgColors[index % bgColors.length] }}
        >
          <div className="max-w-5xl mx-auto">
            <OnboardingStep
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              videoSrc={step.videoSrc}
              isReversed={index % 2 !== 0}
            />
          </div>

          {index < steps.length - 1 && (
            <div className="flex justify-center mt-8">
              <CurvedArrow direction={index % 2 === 0 ? "right" : "left"} />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default OnboardingSteps;