import styled from "@emotion/styled";
import Page from "../containers/layout/page";
import Link from "next/link";

const Background = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }
`;

const Text404 = styled.h1`
  position: relative;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Inter", monospace;
  font-size: 8rem;
  font-weight: 900;
  text-align: center;
  color: transparent;
  stroke: 1px var(--primary);
  -webkit-text-stroke: 0px var(--secondary);
  -webkit-text-fill-color: transparent;
  background: repeating-linear-gradient(
    45deg,
    var(--secondary) 0%,
    var(--primary) 75%
  );
  background-size: 100px 100px;
  background-clip: text;
  -webkit-background-clip: text;
  animation: stripeBackgroundPosition 8s linear infinite;

  @keyframes stripeBackgroundPosition {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: calc(100px * -1) 0;
    }
  }
  @keyframes stripeBackgroundPosition {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: calc(100px * -1) 0;
    }
  }

  @keyframes stripeTransform {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(100px * -1));
    }
  }

  @media (max-width: 425px) {
    font-size: 6rem;
  }
`;

const Text404Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const Text404DescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    max-width: 75rem;
  }
`;

export const Lost = () => {
  return (
    <Page>
      <Background>
        <Text404Container>
          <Text404>404</Text404>
          <Text404DescriptionContainer>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL and try again.</p>
            <Link href="/">Back to Home</Link>
          </Text404DescriptionContainer>
        </Text404Container>
      </Background>
    </Page>
  );
};

export default Lost;
