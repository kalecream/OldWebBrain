import Page from "../../containers/layout/page";
import styled from "@emotion/styled";

const UpdatedText = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
    padding: 0 1.5rem;
`;

const TermsParagraph = styled.p`
max-width: 45rem;
text-align: justify;
`;

const TermsList = styled.ul`
max-width: 45rem;
text-align: justify;
    margin-bottom: 1rem;
    padding: 0 1.5rem;
`;

const TermsListItem = styled.li`
    font-weight: 400;
    margin-bottom: 1rem;
    list-style: lower=roman;
`;

const TermsOfService = () => {
    return (
        <Page title="Terms of Service">
            <UpdatedText>
                Last updated: 2023-01-01
            </UpdatedText>
            <br /><br/>
            <TermsParagraph>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully on how to use the https://kalecream.com website (the "Service") operated by KaleCream Limited ("us", "we", or "our").
            </TermsParagraph>
            <TermsParagraph>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
            </TermsParagraph>
            <TermsParagraph>
            Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.

            You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
            </TermsParagraph>
            <TermsParagraph>
            You must not:
            </TermsParagraph>
            <TermsList>
                <TermsListItem>republish material from this website (including republication on another website);</TermsListItem>
                <TermsListItem>sell, rent or sub-license material from the website;</TermsListItem>
                <TermsListItem>show any material from the website in public;</TermsListItem>
                <TermsListItem>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;</TermsListItem>
                <TermsListItem>edit or otherwise modify any material on the website; or</TermsListItem>
                <TermsListItem>redistribute material from this website [except for content specifically and expressly made available for redistribution].</TermsListItem>
            </TermsList>
            <h3>Acceptable Use</h3>
            <TermsParagraph>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
            </TermsParagraph>
            <TermsParagraph>
            You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
            </TermsParagraph>
            <TermsParagraph>
            You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without our express written consent of KaleCream Limited.
            </TermsParagraph>
            <TermsParagraph>
            You must not use this website to transmit or send unsolicited commercial communications.
            </TermsParagraph>
            <TermsParagraph>
            You must not use this website for any purposes related to marketing without our express written consent.
            </TermsParagraph>
            <h3>Restricted Access</h3>
            <TermsParagraph>
            Access to certain areas of this website is restricted. KaleCream Limited reserves the right to restrict access to certain areas of this website, or at our discretion, this entire website. KaleCream Limited may change or modify this policy without notice.
            </TermsParagraph>
            <TermsParagraph>
            If KaleCream Limited provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential. You alone are responsible for your password and user ID security.
            </TermsParagraph>
            <TermsParagraph>
            KaleCream Limited may disable your user ID and password in KaleCream Limited's sole discretion without notice or explanation.
            </TermsParagraph>
            <h3>User Content</h3>
            <TermsParagraph>
            In these terms and conditions, "your user content" means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
            </TermsParagraph>
            <TermsParagraph>
            You grant to KaleCream Limited a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to KaleCream Limited the right to sub-license these rights, and the right to bring an action for infringement of these rights.
            </TermsParagraph>
            <TermsParagraph>
            Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or KaleCream Limited or a third party (in each case under any applicable law).
            </TermsParagraph>
            <TermsParagraph>
            You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.
            </TermsParagraph>
            <TermsParagraph>
            KaleCream Limited reserves the right to edit or remove any material submitted to this website, or stored on KaleCream Limited's servers, or hosted or published upon this website.
            </TermsParagraph>
        </Page>
    )
}

export default TermsOfService;