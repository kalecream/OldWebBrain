import Image from "next/Image";
import Needs from "./needs"

const WithSelfPage = () => {
    return (
        <>
         <section id="self">
                <h1>With Self</h1>
                <div>
                    <p className="prose">Learning to meet my own needs as set out in Maslow’s Hierarchy. When I feel overwhelmed, this is the order on which I need to focus. 
                        I will lay out what my priorities should be in caring for myself, and I will abide by these priorities in times of crisis. 
                        Hopefully, I will also abide by these priorities in times of calm.</p>
                </div>
                <Image src={Needs} alt="" width={300} height={300}>
                <div>
                    <h2>Physiological Needs</h2>
                    <p className="prose"></p>
                    <h2>Self-Regulation</h2>
                    <h3>Meditation</h3>
                    <p className="prose">Meditation has a history that goes back thousands of years, and many meditative techniques began in Eastern traditions. The term “meditation” refers to a variety of practices that focus on mind and body integration and are used to calm the mind and enhance overall well-being.

                    </p>
                    <h3>Solo Dating</h3>
                    <p className="prose">Not to pollute the definition, but a date for me is an appointment. This is why I have solo dates, friend dates and romantic dates listed out as separate things.

                        Historically, solo dates make me more excited than romantic dates, but less than friend dates. I also put more effort into solo dates as I'm less likely to flake on myself than someone is on me as well, as the whole purpose is to go out and feel good. This is different from just “going out” somewhere, which can be done at any time. The entire purpose is the intention of wooing myself behind it.

                    </p>
                    <h3>Self Improvement</h3>
                    <p className="prose">Regular self-improvement is found under actualisation. This self-improvement is based on how I relate to other persons.</p>
                    <h4>Toxic Traits</h4>
                    <h5>Love bombing?</h5>
                    <p className="prose">I realise that a lot of us confuse limerance for love-bombing. For example, I used to say to my friends that I want a love-bombing situationship. No one wants that.
                        I've always tried to give myself fully to be the person in relationships that someone can rely on. After learning about love-bombing, I wondered if I was a love-bomber, then after learning the definition of love-bombing, I don't feel like I qualify as a love-bomber. I don't intentionally withdraw affection. When I'm pissed off, I need space. I've always felt guilty about that. That's mainly because I have never, not once, had that space respected when it should have been. This leads to being ignored and that is withdrawn affection. I need to be communicative and to foster a partner's complete social circle to be their lighthouse instead of just me being a flashlight in the dark.<br /><br />

                        Love Bombing is a manipulative and intense behavior often observed in the early stages of a relationship, characterized by the excessive and overwhelming expression of affection, attention, and positive reinforcement by one person towards another. The love bomber employs extravagant gestures, constant communication, and declarations of deep emotional attachment with the intention of creating a heightened sense of euphoria and dependency in the recipient. While on the surface, it may appear as genuine affection, love bombing is often a tactic employed by individuals with ulterior motives, such as establishing control, masking negative qualities, or manipulating the other person emotionally. It can lead to an imbalanced power dynamic and, in some cases, be indicative of toxic relationship patterns.
                    </p>
                    <h5>Unsolicited Advice</h5>
                    <p className="prose">In the past I have given unsolicited advice instead of being a sounding board. Sometimes a person just need someone to repeat that "this really sucks!" with me instead of trying to hand them half-baked generic solutions that they are already aware of and may not work for their context.</p>
                    <h5>Devil's Advocacy</h5>
                    <p className="prose">This used to be a feature of conversation that I thankfully think I've turned off.</p>
                    <h5>Being Flaky</h5>
                    <p className="prose">How do I still have friends? I'm so thankful for my heartbeats. I didn't make time for community. I used to throw money at the problem instead. When I had nothing my community still supported me through it.</p>

                </div>
            </section>
        </>
   )
}

export default WithSelfPage
