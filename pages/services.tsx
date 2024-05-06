"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="data:image/jpeg;base64,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"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Try once more again...!
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Rejected
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="data:image/jpeg;base64,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"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tadoww!
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Approved
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="data:image/jpeg;base64,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"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Wait a while....!
        </p>
        <p className="border border-yellow-500 bg-orange-100 dark:bg-yellow-900/20 text-yellow-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Pending
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="data:image/png;base64,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"
          alt="avatar"
          height="30"
          width="20"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          How can I help you?
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500"> Need assistance.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "AI Content Generation",
    description: (
      <span className="text-sm">
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Automated Proofreading",
    description: (
      <span className="text-sm">
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Contextual Suggestions",
    description: (
      <span className="text-sm">
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Status",
    description: (
      <span className="text-sm">
        Check what is the status of your complaint 
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Student Support",
    description: (
      <span className="text-sm">
        Our team will always be ready to help you with your issues.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
