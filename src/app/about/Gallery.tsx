"use client";
import { StaticImageData } from "next/image";
import React, { useState } from 'react';
import Image from 'next/image';
import style from './Gallery.module.scss';

export interface GalleryData {
  id: number;
  src: string;
  name: string;
  desc: string;
  tags: string[];
}

interface ImageViewProps {
  src: string;
  name: string;
  desc: string;
  tags: string[];
  onClose: () => void;
}

interface GalleryProps {
  data: GalleryData[];
  onOpenImageView: (id: number) => void;
}

interface TileProps {
  id: number;
  src: string;
  name: string;
  desc: string;
  onClick: () => void;
}

interface ImageProps {
  CSSClass: string;
  src: string;
  alt: string;
}

const NineGridGallery: React.FC<{ images: GalleryData[] }> = ({images}) => {
  const [data, setData] = useState<GalleryData[]>(images);
  const [activeID, setActiveID] = useState<number | null>(null);
  const [imageView, setImageView] = useState<boolean>(false);

  const openImageView = (id: number) => {
    setActiveID(id);
    setImageView(true);
  };

  const closeImageView = () => setImageView(false);

  return (
    <div className="wrapper">
      {imageView && activeID !== null ? (
        <ImageView {...data[activeID]} onClose={closeImageView} />
      ) : (
        <Gallery data={data} onOpenImageView={openImageView} />
      )}
    </div>
  );
};

const ImageView: React.FC<ImageViewProps> = ({ src, name, desc, tags, onClose }) => (
  <div className={`${style["imageview-wrapper"]} ${style.fadeIn}`}>
    <div className={`${style.imageview}`} >
      <Picture CSSClass={`${style["imageview-image"]}`} src={src} alt={name} />
      <div className={`${style["imageview-info"]}`} >
        <button className={`${style["imageview-close"]}`}  onClick={onClose}>
          x
        </button>
        <h2>{name}</h2>
        <p>{desc}</p>
        {/* <h3>Tags</h3>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag} </li>
          ))}
        </ul> */}
      </div>
    </div>
  </div>
);

const Gallery: React.FC<GalleryProps> = ({ data, onOpenImageView }) => (
    <div className={`${style.gallery} ${style.fadeIn}`}>
    {data.map((item) => (
      <Tile key={item.id} {...item} onClick={() => onOpenImageView(item.id)} />
    ))}
  </div>
);

const Tile: React.FC<TileProps> = ({ id, src, name, desc, onClick }) => (
    <div className={`${style["gallery-tile"]}`} onClick={onClick}>
    <div className={`${style["picture-info"]}`}>
      <h2>{name}</h2>
    </div>
    <Picture CSSClass={`${style["tile-image"]}`} src={src} alt={name} />
  </div>
);

const Picture: React.FC<ImageProps> = ({ CSSClass, src, alt }) => (
  <img className={CSSClass} src={src} alt={alt} />
);

export default NineGridGallery;
