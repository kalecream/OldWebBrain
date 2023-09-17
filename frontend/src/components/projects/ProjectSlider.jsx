import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectsData from '@data/projectsData';
import styles from '@styles/modules/ProjectSlider.module.scss';
import * as PIXI from 'pixi.js';
import { GetMonthName } from '@utils/GetMonthName';

export const ProjectSlider = () => {
    const loadRef = useRef(null);

    let targ, //target - the element to drag
        coordX, //inital x value
        offsetX, // offset after cursor moved
        drag; //boolean - is drag on or off

    const dragStart = (e) => {
        //  determine event object
        if (!e) {
            var r = window.event;
        }
        if (e.preventDefault) e.preventDefault();

        //  IE uses srcElement, others use target
        targ = e.target ? e.target : e.srcElement;

        if (targ.className !== 'drag__item') { return };
        // calculate event X coords
        offsetX = e.clientX;

        // assign default for left
        if (!targ.style.left) {
            targ.styles.left = '0px'
        };

        //  calc int value for left
        coordX = parseInt(targ.style.left);
        drag = true;

        // move div element
        document.onmousemove = dragDiv;
        return false;
    }

    let dragDiv = (e) => {
        if (!drag) { return };
        if (!e) { let e = window.event };
        targ.style.left = coordX + e.clientX - offsetX + 'px';
        return false;
    }

    let stopDrag = () => {
        drag = false;
    }

    window.onload = () => {
        document.getElementById('loadMore').onmousedown = dragStart;
        document.getElementById('loadMore').onmouseup = stopDrag;
        if (loadRef.current) {
            displacement();
        }
    }

    // const app = new PIXI.Application();
    // document.body.appendChild(app.view);

    // app.stage.interactive = true;

    // const container = new PIXI.Container();
    // app.stage.addChild(container);

    // const flag = PIXI.Sprite.from('examples/assests/pixi-filters/flag.png');
    // container.addChild(flag);
    // flag.x = 100;
    // flag.y = 100;

    // const displacementSprite = PIXI.Sprite.from('examples/assests/pixi-filters/displacement_map_repeat.jpg');
    // displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    // const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    // displacementFilter.padding = 10;

    // app.stage.addChild(displacementSprite);
    // flag.filters = [displacementFilter];

    // displacementFilter.scale.x = 30;
    // displacementFilter.scale.y = 60;

    // app.ticker.add(() => {
    //     //  offset the spite position to make vFilterCoord update to larger value Repeat wrapping makes sure there's still pixels on the coordinates
    //     displacementSprite.x += 1;
    //     // reset x to 0 when it's over width to keep values from going to very huge numbers.
    //     if (displacementSprite.x > displacementSprite.width) {
    //         displacementSprite.x = 0;
    //     }
    // });

    // const thumbnail__image = loadRef?.current.getElementsByClassName('drag__item__image');

    // thumbnail__image.addEventListener('mouseover', () => {
    //     thumbnail__image.style.filter = 'blur(0px)';
    // })

    // const playgrounds = [];

    // let displacesments = () => {
    //     for (let i = 0; i < 10; i++) {
    //         let playground = {
    //             id: i,
    //             displacement: PIXI.Sprite.from('examples/assests/pixi-filters/displacement_map_repeat.jpg'),
    //             displacementFilter: new PIXI.filters.DisplacementFilter(playground.displacement),
    //             displacementSprite: PIXI.Sprite.from('examples/assests/pixi-filters/displacement_map_repeat.jpg'),
    //         }
    //         playgrounds.push(playground);
    //         animate();
    //     }
    // }

    // Array.from(thumbnail__image).map((item, index) => {
    //     let playground = {};
    //     //  set up render
    //     playground.renderer = PIXI.autoDetectRenderer({ width: thumbnail__image[index].offsetWidth, height: thumbnail__image[index].offsetHeight, transparent: true });
    //     playground.renderer.autoResize = true;
    //     item.appendChild(playground.renderer.view);
    //     let tp = PIXI.Texture.from(list[index].thumb);
    // })

    // //  https://medium.com/fink-it/draggable-carousel-with-webgl-effects-a69b20780f27
    // //  TODO: FINISH this
    // let preview = new PIXI.sprite(tp);
    // preview.anchor.set(0.5);
    // preview.width = playground.renderer.width;
    // preview.height = playground.renderer.height;
    // preview.x = playground.renderer.width / 2;
    // preview.y = playground.renderer.height / 2;
    // playground.preview = preview;

    // // let displacementSprite = PIXI.Sprite.from('examples/assests/pixi-filters/displacement_map_repeat.jpg');
    // // let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
    // displacementSprite.scale.y = 0;
    // displacementSprite.scale.x = 0;
    // displacementSprite.rotation = 90;
    // let stage = new PIXI.Container();
    // stage.addChild(displacementSprite);

    // stage.addChild(preview);
    // playground.stage = stage;

    // playgrounds.push(playground);

    // let animate = () => {
    //     requestAnimationFrame(animate);
    //     playgrounds.map(item => {
    //         item.displacementSprite.scale.x += 0.3;
    //         item.displacementSprite.scale.y += 0.3;
    //         item.stage.filters = [item.displacementFilter]
    //         item.renderer.render(item.stage);
    //     })
    // }



    return (
        <div id='loadMore' ref={loadRef}>
            <div className={styles.drag__zone}>
                {ProjectsData.map((project) => {
                    return (
                        <Link
                            key={project.id}
                            className={styles.drag__item__container}
                            href={`/project/${project.id}`
                            }>
                            <div className={styles.drag__item}>
                                <h2 className={styles.drag__item__title}>
                                    <div className={styles.drag__item__year}>
                                        {GetMonthName(project.created)}
                                        {project.created.split('-', 1)}
                                    </div>
                                    {project.title}
                                </h2>
                                <div className={styles.drag__item__image}>
                                    <Image
                                        loader={({ src, width }) => `${src}?w=${width}`}
                                        height={0}
                                        width={0}
                                        sizes="100vw"
                                        style={{ width: 'auto', height: '250px', margin: '0 auto', display: 'flex' }}
                                        src={project.image}
                                        alt={project.title}
                                    />
                                </div>
                                <div className={styles.drag__item__details}>
                                    <p className={styles.drag__item__title}>
                                        {project.title}
                                    </p>
                                    {/* <p className={styles.drag__item__description}>
                                        {project.description}
                                    </p> */}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )

}
