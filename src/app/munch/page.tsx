import Link from "next/link";

const MunchPage = () => {
  return (
    <section>
      <h1>Munch</h1>
      <p className="prose blur">
        TLDR; It's an opportunity for members of the local kink community to get together to socialize in a low
        pressure, non-play environment. This is not a play event or opportunity to "pick up" partners. If the only
        reason you come to the munch is for pick up a playmate, you are going to be disappointed. This is a relaxed
        social event to meet new people and I will be enforcing the <b>relaxed</b>. The comfort of everyone in attendance is my top priority.
      </p>
      <p className="prose blur">
        If you would like to play, <Link href="https://therosedungeon.com/events/">The Rose Dungeon</Link> is holding
        their next club night on Saturday, Nov 30 at 10:00pm-04:00am at 26 Old Hope Road.
      </p>

      <h2>What to Wear</h2>
      <p className="prose blur">
        The dress code is casual, the same as you would to have lunch with friends. Clothing at an average munch will range from
        relatively casual to party clothes, and all of them are welcome. This isn't the time to wear fetishwear because we're in a public location. 
      </p>
      <h2>Comfort</h2>
      <p className="prose blur">
        If you feel uncomfortable with a situation, please tell the host. We would very much rather deal with something
        at the time it happens than find out later that there was a problem we never knew about. Bear in mind, too, that
        these ARE public events. While it's probably a good start that the person you've met who seems so interesting is
        attending a munch, it does not vouch for his or her character. Don't assume that everyone you meet there is safe
        and trustworthy simply due to their presence. Most are, in fact, but you still need to behave as responsibly as
        you would had you met them in other circumstances. 
      </p>
    </section>
  );
};

export default MunchPage;
