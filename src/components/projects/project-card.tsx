"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

// Types for better TypeScript support and Storyblok integration
export interface MediaItem {
  type: "youtube" | "videopress" | "image";
  url: string;
  alt?: string; // For images
  title?: string; // For videos
  link?: string; // Optional external link for images
}

export interface ProjectCardProps {
  title: string;
  description: string;
  media: MediaItem;
  className?: string;
  variant?: "default" | "compact";
  animationDelay?: number;
}

// Helper function to extract video ID from various platforms
const getVideoId = (
  url: string,
  type: "youtube" | "videopress"
): string | null => {
  if (type === "youtube") {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
  }

  if (type === "videopress") {
    // Extract VideoPress ID from URLs like:
    // https://videopress.com/v/RkE5z6qc
    // https://videopress.com/embed/RkE5z6qc
    const patterns = [
      /videopress\.com\/v\/([^&\n?#]+)/,
      /videopress\.com\/embed\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
  }

  return null;
};

// YouTube embed component
const YouTubeEmbed: React.FC<{ videoId: string; title?: string }> = ({
  videoId,
  title = "YouTube video",
}) => (
  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

// VideoPress embed component
const VideoPressEmbed: React.FC<{ videoId: string; title?: string }> = ({
  videoId,
  title = "VideoPress video",
}) => (
  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
    <iframe
      src={`https://videopress.com/embed/${videoId}`}
      title={title}
      allow="clipboard-write"
      allowFullScreen
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

// Image component with optional link
const ProjectImage: React.FC<{
  src: string;
  alt: string;
  link?: string;
}> = ({ src, alt, link }) => {
  const imageElement = (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
    />
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {imageElement}
      </a>
    );
  }

  return imageElement;
};

export default function ProjectCard({
  title,
  description,
  media,
  className = "",
  variant = "default",
  animationDelay = 0,
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className={`relative ${className}`}
    >
      {/* Animated background glow */}
      <motion.div
        className="absolute -inset-4 bg-gradient-to-r from-sage-200 to-cream-200 rounded-xl blur-2xl opacity-20"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Card content */}
      <div className="relative bg-white border border-stone-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        {/* Media section */}
        <div className="p-6 pb-4">
          {media.type === "youtube" &&
            (() => {
              const videoId = getVideoId(media.url, "youtube");
              return videoId ? (
                <YouTubeEmbed videoId={videoId} title={media.title || title} />
              ) : (
                <div className="w-full aspect-video bg-stone-100 rounded-lg flex items-center justify-center">
                  <p className="text-stone-500">Invalid YouTube URL</p>
                </div>
              );
            })()}

          {media.type === "videopress" &&
            (() => {
              const videoId = getVideoId(media.url, "videopress");
              return videoId ? (
                <VideoPressEmbed
                  videoId={videoId}
                  title={media.title || title}
                />
              ) : (
                <div className="w-full aspect-video bg-stone-100 rounded-lg flex items-center justify-center">
                  <p className="text-stone-500">Invalid VideoPress URL</p>
                </div>
              );
            })()}

          {media.type === "image" && (
            <ProjectImage
              src={media.url}
              alt={media.alt || title}
              link={media.link}
            />
          )}
        </div>

        {/* Content section */}
        <div className={`px-6 ${isCompact ? "pb-4" : "pb-6"}`}>
          <h3
            className={`font-serif ${
              isCompact ? "text-xl" : "text-2xl"
            } font-medium text-stone-800 mb-3`}
          >
            {title}
          </h3>

          <div
            className={`prose ${
              isCompact ? "prose-sm" : "prose-base"
            } text-stone-600 max-w-none`}
          >
            <p>{description}</p>
          </div>

          {/* Optional link indicator for images */}
          {media.type === "image" && media.link && (
            <div className="mt-4 flex items-center text-sm text-stone-500">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Click image to view external link
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Example usage component showing different configurations
export function ProjectCardExamples() {
  const exampleProjects = [
    {
      title: "String Figuring",
      description:
        "String figures are made with a piece of string, the ends of which must be tied together to form a single loop. All string games begin with an opening, the goal of which is to get the original loop arranged on the hands so that a number of secondary loops cross from the fingers of the one hand to the fingers of the other, when the hands are held with the palms facing each other, and the fingers directed upward.",
      media: {
        type: "youtube" as const,
        url: "https://youtu.be/3peLAecz-_E",
        title: "Malawi String Figure Project - String in the Southern Region",
      },
    },
    {
      title: "Kgati",
      description:
        "Kgati is a rope-skipping game that requires three of more people. Two people swing the skipping rope and the third jumps in different ways, usually while singing or chanting. This game is also known as Ugqaphu/Kgadi/Ntimo in Southern Africa.",
      media: {
        type: "youtube" as const,
        url: "https://youtu.be/_CZNUAVKHxc",
        title: "Team kgati vhembe (venda)",
      },
    },
    {
      title: "Baanda",
      description:
        "Baanda also known as Banoo is a game popularly played in western Kenya. Players use marbles and play on the ground with a small hole at centre of the court. Banoo can be played by two or more players.In the past, the game was played while boys herded cattle. Today, it is played any time for leisure. Before starting, players bet, each suggesting the highest score they can get. Once the targets are set, all players place their balls around the hole. The one whose target is the highest, starts the game. The first player flips their ball with the finger aiming to hit their opponents’ balls. One scores by successfully hitting the ball(s) of other players, followed by one’s own ball landing into the hole.",
      media: {
        type: "image" as const,
        url: "https://dlala602468932.wordpress.com/wp-content/uploads/2022/05/screenshot-2022-05-24-at-21.22.56.png?w=1024",
        link: "https://www.africanstorybook.org/reader.php?id=38055&a=0&d=0",

        title: "Baanda",
      },
    },
    {
      title: "Mehareben Yayachihu",
      description:
        "This children’s game called ‘Mehareben Yayachihu’, literally meaning ‘have you seen my handkerchief’ in the Amharic language, is played in Ethiopia. It is played by young children. First, they sit in a circle. Then one of them goes around the circle holding a piece of cloth and enquiring ‘have you seen my handkerchief?’  The ones sitting respond that they have not seen. Later, the one running around the circle hides the piece of cloth behind one of the children who are sitting. The others inform that child about this. Then that child holds the cloth and runs to touch the one who put the cloth behind him/her before the latter sits down at her/his place. If he fails to touch him/her, he goes to the middle of the circle. The game continues like this until one person remains outside the circle.",
      media: {
        type: "youtube" as const,
        url: "https://youtu.be/S8q90YeGDNc",
        title: "Mehareben Yayaychihu Game",
      },
    },
    {
      title: "Moraboraba",
      description:
        "This game is played in South and East Africa. The game is referred to by many names in many languages such as Mlabalaba, Mmela, Muravava and Umlabalaba.  The game is played on a specially produced board, or it can be drawn in the sand, with stones or even bottle tops known as cows. This is a three-row board game that is played by two individuals in three stages. Each gamer starts with an empty board and 12 marbles/stones/bottle tops of identical colour that they may lose or gain at different game levels. In the first stage of the game players place one cow at a time on the board with an intent to be the first to place three in the row in a vertical, diagonal, or horizontal position. Cows can be placed on empty/unoccupied holes/circles on the board and each time a row of three cows is formed, a cow of the opponent is taken. Only one cow can be captured/shot at a time and the same ones will not be played again in the game. When a player has three cows in a row, they cannot be gained or shot by the opponent if the cows are available on the board. In the second stage of the game, cows which have already been placed on the board can be moved from one hole/circle to an adjacent circle/hole to create a row of three, which can be broken by players to either create new line or reposition their cows. Cows can be moved to the same hole/circle, a players row of three can be captured/shot. When a player has three cows left, they can move this cow to any unoccupied hole on the board which is not adjacent to the current hole, without worrying about the lines. Applying this rule means that the game is at its third stage: Victory is achieved when an opponent cannot move any cows, or when an opponent has lost all but two cows.",
      media: {
        type: "videopress" as const,
        url: "https://videopress.com/v/RkE5z6qc",
        title: "Moraboraba",
      },
    },
    {
      title: "Kisara",
      description:
        "Kisara in Amharic means a loss. It is played using flat stones or coins. To begin, players stand behind a line and take turns throwing one coin/stone into a hole. The one whose piece was closest to the hole in the first round is the first thrower in the next round. That person collects all the pieces and throws all of them together toward the hole. If any go into the hole they get to keep them.",
      media: {
        type: "image" as const,
        url: "https://dlala602468932.wordpress.com/wp-content/uploads/2022/05/screenshot-2022-05-24-at-20.44.19.png?w=723",
        link: "https://www.africanstorybook.org/reader.php?id=36715&a=0&d=0",
        title: "Baanda",
      },
    },
    {
      title: "Amagende",
      description:
        "This game is played in South Africa and Lesotho. It is also called Magave, Upuca, Puca, Ndonde. This game can be played by two or more players. Each player comes with an equal number of pebbles (10-30). Each player also keeps a bigger stone sometimes referred to as “mokinto” which is the stone that is thrown in the air. The game requires that players throw the larger stone in the air, while concurrently removing pebbles (as many pebbles as a player would like to remove, but not one pebble) from the drawn circle or dug hole and catching the stone with the same hand. The player is meant to throw the mokinto in the air while returning all stones but one while in turn catching the mokinto before it falls. With each round the player is meant to leave one stone outside the circle when returning the stones into the drawn circle or dug hole. This process continues until said player is left with more than one stone after returning the stones or if they drop the mokinto in the process. If this happens the next player gets an opportunity to play. The winner of the game is the individual with more stones outside the circle at the end of the game.",
      media: {
        type: "videopress" as const,
        url: "https://videopress.com/v/nEaRClw2",
        title: "Amagende",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-cream-50 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="font-serif text-3xl lg:text-4xl font-light text-stone-800 mb-12 text-center">
          Projects
        </h2> */}

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {exampleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              media={project.media}
              animationDelay={index * 0.2}
            />
          ))}
        </div>

        {/* TODO: Remove the compact version from this component - it should be simple */}
        {/* Compact variant example */}
        {/* <div className="mt-16">
          <h3 className="font-serif text-2xl font-light text-stone-800 mb-8 text-center">
            Compact Variant
          </h3>
          <div className="max-w-md mx-auto">
            <ProjectCard
              title="Quick Project"
              description="A shorter description for compact display in sidebars or smaller spaces."
              media={{
                type: "image",
                url: "/images/project-2.jpg",
                alt: "Compact project image",
              }}
              variant="compact"
              animationDelay={0.4}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
