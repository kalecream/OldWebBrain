import Image from "next/image";
import Needs from "./needs.webp";
import Link from "next/link";
import { PageReadTime } from "@utils/PageReadTime";

const WithSelfPage = () => {
  return (
    <>
      <section id="self">
        <h1>With Self</h1>
        <PageReadTime readingSpeedWPM={200} />
        <p className="prose">
          While this section will be focused on the Self, I believe we need strong relationships with ourselves to have
          a strong relationship with others where we can be aware of and prevent boundary lines from being crossed.
        </p>
        <p className="prose">
          Fostering a healthy relationship with myself is being started from scratch. My method of going through life
          was to mentally check out through media consumption and daydreams once the going got tough, and handing off
          the problem to a future me. I am now that future me. Having expressed opinions of the violence I would like to
          enact on previous versions of me, I have been told to be gentler with myself. I am now on a journey of paying
          more attention, giving greater care and being softer with her.
        </p>
        <p className="prose">
          When I was younger, a teenager specifically, it was a completely foreign concept to me that I would live this
          long. Thankfully, I’m still at a young enough age where I’ve come to terms that barring an accident or
          illness, I will not get my death wish. Having already experienced a debilitating illness, I'm not interested
          in experiencing anything like that again.
        </p>

        <div>
          <p className="prose">
            Learning to meet my own needs as set out in Maslow’s Hierarchy. When I feel overwhelmed, this is the order
            on which I need to focus. I will lay out what my priorities should be in caring for myself, and I will abide
            by these priorities in times of crisis. Hopefully, I will also abide by these priorities in times of calm.
          </p>
        </div>
        <hr />
        <div>
          <h2>Needs</h2>
          <details open className="prose">
            <summary>
              <i style={{ fontSize: "1.8rem" }}>Physiological</i>
            </summary>
            <p>
              These needs are the most important set and ones that we regularly betray or allow us to be led astray. I
              have found when my higher order needs are not being met, these are the needs which ground me. Mostly
              because when focused these are the needs I'm mostly likely to ignore. In future, I may expand all of these
              to their own pages.
            </p>
            <p>
              <b>
                <Link className="internal-link" href="with-self/breathe" title="Page not yet made">
                  breathe
                </Link>
              </b>
              . Frequently, I will realize I'm holding my breath or hyperventilating depending on what's going on. The
              practice of Pranayama sometimes helps me to calm down.
            </p>
            <p>
              <b>Water.</b> I have a measured 1.3L water bottle that shows me reccomended drink levels from 8AM to 7PM,
              but I still do not take in enough water daily. I tend to focus solely on what's in front of me or be
              wildly distracted. In either scenario, I keep forgetting to drink water.
              <br />
            </p>
            <p>
              <b>Food.</b> I occasionally feel hunger, but my relationship with food needs work. I sometimes eat nothing
              and other times overstuff myself. Moderation is a problem here.
              <br />
            </p>
            <p>
              <b>Shelter.</b> The need I treat with the most seriousness. I have a roof over my head and I'm grateful
              for it.
              <br />
            </p>
            <p>
              <b>Sleep.</b> I've developed a bedtime routine that I'm happy with so far.
              <br />
            </p>
          </details>
          <details open>
            <summary>
              <i style={{ fontSize: "1.8rem" }}>Safety</i>
            </summary>
            <p>
              <b>Security in Body</b>
              <br />
            </p>
            <p>
              <b>Security in Resources</b>
              <br />
            </p>
            <p>
              <b>Security in Morality</b>
              <br />
            </p>
            <p>
              <b>Security in Family</b>
              <br />
            </p>
            <p>
              <b>Security in Health</b>
              <br />
            </p>
            <p>
              <b>Security in Property</b>
              <br />
            </p>
          </details>
          <details>
            <summary>
              <i style={{ fontSize: "1.8rem" }}>Belonging</i>
            </summary>
            <p>
              <b>Friendship</b>
              <br />
            </p>
            <p>
              <b>Family</b>
              <br />
            </p>
            <p>
              <b>Sexual Intimacy</b>
              <br />
            </p>
          </details>
          <details>
            <summary>
              <i style={{ fontSize: "1.8rem" }}>Esteem</i>
            </summary>
            <p>
              <b>Esteem for oneself (dignity, achievement, mastery, independence) </b>
              <br />
            </p>
            <p>
              <b>The need to be accepted and valued by others (e.g., status, prestige)</b>
              <br />
            </p>
          </details>
        </div>
      </section>
    </>
  );
};

export default WithSelfPage;
