import { Page } from "containers/layout";
import { CapsTitle, FullSection } from "@components/global";
import { PostType } from "types/post";
import { getAllPosts } from "lib/api";
import { GetStaticProps } from "next";
import "../styles/articles.module.css";
import styled from "@emotion/styled";

type BlogProps = {
    posts: PostType[];
};

const BlogContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Featured = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;

    @media (max-width: 421px) {
        width: 300px;
    }

    @media (max-width: 1024px) {
        width: 90%;
    }

    @media (min-width: 1024px) {
        max-width: 600px;
    }
`;

const FeaturedArticle = styled.div`
    width: 300px;
    padding: 1rem;
    margin: 0 1rem;
    border: var(--border);
    border-radius: var(--border-radius);

    & > img {
        width: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    & > h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }

    & > p {
        font-size: 1rem;
        margin: 0;
        padding: 1rem;    }



    @media (max-width: 421px) {
        width: 275px;
    }

    @media (min-width: 421px) {
        width: 400px;
    }
`;

const FormerFeatured = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 auto;

    @media (max-width: 1024px) {
        max-width: 300px;
    }

    @media (min-width: 1024px) {
        max-width: 300px;
    }
`;

const FormerFeaturedArticle = styled.div`
    display: flex;
    width: 600px;
    padding: 0.5rem;
    margin: 0.5rem auto;
    border: var(--border);
    border-radius: var(--border-radius);

    & > img {
        width: 200px;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    & > .former-featured-article-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        & > h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
            text-align: center;
        }

        & > p {
            font-size: 1rem;
        }
    }

    @media (max-width: 768px) {
        width: 300px;
        & > img {
            display: none;
        }
    }
`;



export const BlogPage = ({ posts }: BlogProps): JSX.Element => {
    return (
        <Page>
            <FullSection>
                <CapsTitle>Blog</CapsTitle>
                <BlogContainer className="blog-container">
                            {posts.slice(0, 1).map((post) => {
                                return (
                                    <FeaturedArticle className="featured-article">
                                        <img src={post.coverImage} />
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </FeaturedArticle>
                                );
                            })}
                        <FormerFeatured className="former-featured">
                            {posts.slice(1, posts.length).map((post) => {
                                return (
                                    <FormerFeaturedArticle className="former-featured-article">
                                        <img src={post.coverImage} />
                                        <div className="former-featured-article-content">
                                            <p>{post.date }</p>
                                            <h2>{post.title}</h2>
                                            <p>{post.description}</p>
                                        </div>
                                    </FormerFeaturedArticle>
                                );
                            })}
                        </FormerFeatured>
                </BlogContainer>
            </FullSection>
        </Page>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts([
        "date",
        "description",
        "slug",
        "title",
        "coverImage",
        "tags",
    ]);

    return {
        props: { posts },
    };
};

export default BlogPage;
