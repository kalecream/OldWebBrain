"use client";
import { useState } from "react";
import Image from "next/image";
import { GPhotos } from "@assets/images";

export interface GalleryData {
  year: string;
  month: string;
  id: number;
  src: string;
  name: string;
  desc: string;
  tags: string[];
}

interface TileProps {
  id: number;
  src: string;
  name: string;
  desc: string;
  expanded: boolean;
  onClick: () => void;
}

const NineGridGallery: React.FC<{ year: string; month: string }> = ({ year, month }) => {
  const [expandedID, setExpandedID] = useState<number | null>(null);

  const toggle = (id: number) =>
    setExpandedID((prev) => (prev === id ? null : id));

  const filtered = GPhotos.filter(
    (item) => item.year === year && item.month === month
  );

  return (
    <>
      <style>{`
        .gallery-wrapper {
          display: none;
        }

        @media (min-width: 960px) {
          .gallery-wrapper {
            display: block;
            flex: 0 0 36rem;
            width: 36rem;
          }
        }

        .gallery-grid {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          width: 100%;
          /* Allow expanded tiles to overflow the flex line */
          align-items: flex-start;
          animation: galleryFadeIn 300ms ease-in-out forwards;
        }

        .gallery-tile {
          flex: 0 0 calc(25% - 0.2rem);
          aspect-ratio: 1 / 1;
          margin: 0.1rem;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          border-radius: 2px;
          /* Smooth size transition */
          transition:
            flex-basis 350ms cubic-bezier(0.4, 0, 0.2, 1),
            aspect-ratio 350ms cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .gallery-tile--expanded {
          flex: 0 0 100%;
          aspect-ratio: 16 / 9;
          z-index: 1;
          border-radius: var(--sharpBorderRadius);
          box-shadow: var(--boxShadow);
        }

        .gallery-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition:
            transform 350ms ease-in-out,
            filter 350ms ease-in-out;
          display: block;
        }

        .gallery-tile:not(.gallery-tile--expanded):hover img {
          transform: scale(1.1);
          filter: brightness(70%);
        }

        .gallery-tile-info {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          padding: 0.5rem 0.6rem;
          opacity: 0;
          transition: opacity 300ms ease-in-out;
          background: linear-gradient(
            to top,
            rgba(var(--RGBsecondary), 0.5) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .gallery-tile:not(.gallery-tile--expanded):hover .gallery-tile-info {
          opacity: 1;
        }

        .gallery-tile-info h2 {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #fff;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 1px 3px rgba(0,0,0,0.7);
        }

        .gallery-tile--expanded .gallery-tile-info {
          opacity: 1;
          align-items: flex-end;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.55) 0%,
            transparent 50%
          );
        }

        .gallery-tile--expanded .gallery-tile-info h2 {
          font-size: 1rem;
        }

        @keyframes galleryFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <div className="gallery-wrapper">
        <div className="gallery-grid">
          {filtered.map((item) => (
            <Tile
              key={item.id}
              {...item}
              expanded={expandedID === item.id}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const Tile: React.FC<TileProps> = ({ id, src, name, desc, expanded, onClick }) => (
  <div
    className={`gallery-tile${expanded ? " gallery-tile--expanded" : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    aria-expanded={expanded}
    aria-label={name}
    title={desc}
  >
    <div className="gallery-tile-info" aria-hidden>
      <h2>{name}</h2>
    </div>
    <Image
      src={src}
      alt={desc || name}
      width={800}
      height={800}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

export default NineGridGallery;