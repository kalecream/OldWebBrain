"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import TextScrambleComponent from '@app/components/TextScramble';
import style from './AboutMe.module.scss';
import { CodersrankSummary } from './CodersRank';
import styles from "./books.module.scss";
import Pods from '@data/pod';

const AboutMeHero = () => {
    return (
        <div className="flex-row" style={{ alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "2rem" }}>
            <div className="frame">
                <Image
                    src={"https://i.imgur.com/sRfXe3l.jpeg"}
                    alt="A photo of Sab lying on a rounded boulder in the middle of a river with trees in the background"
                    height={250}
                    width={300}
                    style={{ margin: "auto", borderRadius: 0 }}
                />
            </div>
            <div>
                <p className="prose" style={{ margin: "2rem auto 0 auto" }}>
                    For the longest time, I struggled to figure out who I was.
                </p>

                <TextScrambleComponent />
                <p>I'm currently trying to figure out how to design this page. I have some more of my media habits in <Link href="/books">my books section</Link>.</p>
            </div>
        </div>
    )
}

const personalContent = () => {
    return (
        <>
            <AboutMeHero />
            <div className={styles.paragraph} id="podcasts">
                <h2 className="text-center">& I'm always listening to a podcast!</h2>
                <p className="prose blur ">
                    Mainly horror, sci-fi or comedy audiodramas, but I tend to listen to Non-Fiction or media-related Podcasts
                    when I'm doing work. These have been my favourite listens so far:
                </p>
                <div className="flex-row" style={{ flexWrap: "wrap", justifyContent: "center", gap: "1rem", margin: "1rem auto", maxWidth: "800px" }}>
                    {Pods.sort((a, b) => a.title.localeCompare(b.title)).map((p) => (
                        <div key={p.url}>
                            {p.url ? (
                                <Link href={p.url}>
                                    <Image width={125} height={125} src={p.cover} alt={p.title} title={p.title} className={`outerglow`} />
                                </Link>
                            ) : (
                                <small>{p.title}</small>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.paragraph} id="games">
                <h2 className="text-center">Rarely, I play Games!</h2>

                <p className={`blur prose`}>
                    My preference is playing short indie games or any game I physically own. I still play my Gameboy Advance, DS
                    and an NES emulator. <br />
                    <br />
                    Not featured in the game gallery below is several untouched games from{" "}
                    <Link className="link" href="https://steamcommunity.com/id/SabMedwinter">
                        Steam
                    </Link>{" "}
                    and <Link href="https://sabmedwinter.itch.io/">Itch.io</Link>. These are the main games in my rotation
                    nowadays:
                </p>
                <div className="flex row m-1 p-1">
                    <div className="">
                        <Link href="https://www.legendsofidleon.com/">
                            <Image
                                width={200}
                                height={100}
                                src={"https://imgur.com/APzegNB.png"}
                                alt="IdleOn"
                                className={`outerglow`}
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://shatteredpixel.com/shatteredpd/">
                            <Image
                                width={200}
                                height={100}
                                src="https://i.imgur.com/J6ExEz6.gif"
                                alt="Shattered Pixel Dungeon"
                                className={`outerglow`}
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://en.wikipedia.org/wiki/Etrian_Odyssey_II">
                            <Image
                                width={100}
                                height={100}
                                src="https://i.imgur.com/JbZW1N3.jpg"
                                alt="Etrian Odyssey II: Heroes of Lagaard"
                                className={`outerglow`}
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://en.wikipedia.org/wiki/The_World_Ends_with_You">
                            <Image
                                width={100}
                                height={100}
                                src="https://i.imgur.com/j6DsuvT.jpeg"
                                alt="World Ends With You"
                                className={`outerglow`}
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="https://en.wikipedia.org/wiki/Advance_Wars">
                            <Image
                                width={100}
                                height={100}
                                src="https://i.imgur.com/ofu3y5f.jpeg"
                                alt="Advanded Wars"
                                className={`outerglow`}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

const professionalContent = () => (

    <>
        <p>  Front-end focused developer with 5+ years of experience specializing modern web technologies. I focus on creating applications that solve real problems with elegant solutions.</p>
        <div>
            <CodersrankSummary />
            <p className="prose">
                Data from <Link href="https://profile.codersrank.io/user/kalecream">CodersRank.io</Link>{" "}
            </p>
        </div>
    </>
)

const AboutMe = () => {
    const [viewMode, setViewMode] = useState('personal');
    const currentContent = viewMode === 'personal' ? personalContent : professionalContent;

    return (
        <div className="flex-column" style={{ minHeight: '100vh', margin: "6rem 2rem 0 2rem" }}>
            <div className={style["view-toggle"]}>
                <button
                    className={`${style["toggle-btn"]} ${viewMode === 'personal' ? style["active"] : ''}`}
                    onClick={() => setViewMode('personal')}
                >
                    Personal
                </button>
                <button
                    className={`${style["toggle-btn"]} ${viewMode === 'professional' ? style["active"] : ''}`}
                    onClick={() => setViewMode('professional')}
                >
                    Professional
                </button>
            </div>
            <div className={style["content-wrapper"]}>
                <div className={style["content-card"]}>
                    {currentContent()}
                </div>
            </div>
        </div>
    );
};

export default AboutMe;