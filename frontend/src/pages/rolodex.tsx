import Page from "@containers/layout/page";
import Link from "next/link";

export const Rolodex = () => {
    return (
        <Page>
            <section style={{textAlign: 'left'}}>
                <h2 className='section-title'>Rolodex</h2>
                    <p>
                        <Link href="https://grimgrains.com/site/home.html" target="_blank">Grim Grains</Link> Vegan recipe blog with cute illustrations.
                    </p>
                    <p><Link href="https://jzhao.xyz/posts/a-failure-resume" target="_blank">Failure Resume</Link></p>
                    <p><Link href="https://memo.barrucadu.co.uk/personal-finance.html" target="_blank">Personal Finance</Link> I had been looking up ways persons were using Ledger. Instead I got a paradigm shift on how I was viewing my personal finances and a cool new blog to follow. I now use beancount, but I come back to this post every now and again to make sure my run-aways are correct. Super-duper important need-to-know information if you ever lose your job.</p>
            </section>
        </Page>
    );
}

export default Rolodex;
