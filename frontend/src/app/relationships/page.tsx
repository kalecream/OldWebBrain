import Link from 'next/link';

const RShipPage = () => {
	return (
		<>
            <section id="toc">
                <h1>Introduction</h1>
				
			</section>
            <section id="introduction">
            <q>
					A relationship is a commitment<wbr/> to doing the work of<wbr/> becoming a more thoughtful person.
				</q>
				<p className="prose">
					The most daunting problem I’ve found in trying to understand how other persons view relationships is that
					information on the internet about growing and repairing relationships are geared towards romantic
					relationships when familial ties and camaraderie are the basis of most of the relationships in our lives.
				</p>{' '}
				<p className="prose">
					Another issue is people just having thought about it at all. There are no definitions or personal boundaries.
					When I've asked persons about their thoughts on some of the things I've been trying to find my own personal
					definitions for, I realize we've all been basing our social life on vibes, pop culture and whatever we lacked
					in our formative years. The alternative isn't better either, some who have thought about it have just
					swallowed some philosopher’s world-view. I have no heroes, so that approach doesn't gel with me. I want to
					create my own thoughts on this with my own reasoning. I don't want to do that from scratch and it would make
					no sense to throw away the thoughts that came before me in this venture. My thoughts are speaking on all
					relationships unless I specify romantic. I believe that romantic relationships should be an evolution of
					friendship. One cannot be a good partner without being a good friend to their partner.
				</p>
				<p className="prose">
					This document is ongoing as I navigate my relationship with myself and others. It was started and (the bulk of
					it) written in 2023 to aid me in recovering from a break-up with a long-term partner. After the realizations
					that came with the dissolution of that relationship, I felt the need to define how I wanted to interact with
					others. I also thought about how I wanted to go about interacting with myself. I often hear that I’m too harsh
					with myself.
                </p>
                <hr/>
				<p className="prose">
					I've outlined a bunch of things for future me to check in with herself and keep us grounded without being a
					yam-head or the abusive farmer. The most important thing to note is that: 
                </p>
                <ol className="prose">
                    <li> Relationships are unique and do not
                        follow the same path.</li>
                    <li>We all know that life likes to just throw us off the road for no reason therefore adaptability
                        and consideration are  absolutely key. </li>
                    <li> Communication is a must.</li>
                    <li>Vulnerability should be encouraged.</li>
                    <li>All relationships, including the one with self,
					require effort and intention to nurture them.</li>
                </ol>
                <hr/>
				<p className="prose">
					The most important part of a relationship for me is Consideration. This includes considering how my actions
					affect myself and other persons to: reduce the chance of causing harm, never intentionally causing harm,
					considering myself enough to stay my own person and to not lose a sense of self becoming codependent.
				</p>
				<p className="prose">
					I hope to make myself proud by sticking to my values of being considerate and taking a stand, where necessary,
					to reduce harm in my circle of loved ones, then my wider community.
                </p>
                <ol className="prose" style={{textAlign: 'left'}}>
				<li>
					<Link href="/relationships/with-self">With Self</Link>
				</li>
				<li>
					<Link href="/relationships/with-family">With Family</Link>
				</li>
				<li>
					<Link href="/relationships/with-friends">With Friends</Link>
				</li>
				<li>
					<Link href="/relationships/with-romance">With Romantic Interests</Link>
				</li>
			</ol>
			</section>
			

			<section id="influences"></section>
			<section id="references"></section>
		</>
	);
};
export default RShipPage;
