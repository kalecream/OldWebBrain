import { Page } from "containers/layout";
import { CapsTitle, FullSection } from "@components/global";
import { PostType } from "types/post";
import { getAllPosts } from "lib/api";
import { GetStaticProps } from "next";
import "styles/articles.module.css"
import styled from "@emotion/styled";

type BlogProps = {
    posts: PostType[];
};

const BlogContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    height: auto;
    margin: 0 auto;
    gap: 2rem;
`;

const Featured = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        margin-top: 3rem;
        max-width: 600px;
    }
`;

const FeaturedArticle = styled.div`
    width: 600px;
    height: auto;
    padding: 1rem;
    margin-bottom: 10px;
    border: var(--border);
    border-radius: var(--border-radius);

    & > img {
        width: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
    }

    & > h2 {
        font-size: 2rem;
        font-weight: 600;
        margin: 0;
        text-align: center;
    }

    & > p {
        font-size: 1rem;
        margin: 0;
    }
`;

const FormerFeatured = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        max-width: 600px;
    }
`;

const FormerFeaturedArticle = styled.div`
    display: flex;
    width: 600px;
    height: auto;
    padding: 1rem;
    margin-bottom: 10px;
    align-items: center;
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
        padding: 1rem;

        & > h2 {
            font-size: 1.5rem;
            font-weight: 600;
            margin: 0;
            text-align: center;
        }
        
        & > p {
            font-size: 1rem;
            margin: 1rem;
        }
    }
`;

const RestofArticles = styled.div`
    display: block;
    width: 100%;
    flex-direction: column;
    height: auto;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        max-width: 600px;
    }
`;

export const BlogPage = ({ posts }: BlogProps): JSX.Element => {
    return (
        <Page>
            <FullSection>
                <CapsTitle>Blog</CapsTitle>
                <BlogContainer className="blog-container">
                    <Featured className="featured">
                        {posts.slice(0,1).map((post) => {
                                return (
                                    <FeaturedArticle className="featured-article">
                                        <img src={post.coverImage} />
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                    </FeaturedArticle>
                                )
                            })}
                    </Featured>
                    <FormerFeatured className="former-featured">
                        {posts.slice(1,4).map((post) => {
                                return (
                                    <FormerFeaturedArticle className="former-featured-article">
                                        <img src={post.coverImage} />
                                        <div className="former-featured-article-content">
                                        <h2>{post.title}</h2>
                                        <p>{post.description}</p>
                                        </div>
                                    </FormerFeaturedArticle>
                                )
                        })}
                    </FormerFeatured>
                    <RestofArticles className="rest-of-articles">
                        {posts.slice(3, 9).map((post) => {
                            return (
                                <div className="regular-article">
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>)
                        })}
                    </RestofArticles>
                </BlogContainer>
            </FullSection>
        </Page>
    )
}

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

export default BlogPage
