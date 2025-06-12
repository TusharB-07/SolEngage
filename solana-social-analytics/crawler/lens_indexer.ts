import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

interface LensPost {
    id: string;
    content: string;
    author: string;
    timestamp: string;
}

class LensIndexer {
    private client: ApolloClient<any>;

    constructor() {
        this.client = new ApolloClient({
            uri: 'https://api.lens.dev',
            cache: new InMemoryCache()
        });
    }

    async fetchPosts(profileId: string): Promise<LensPost[]> {
        const GET_POSTS = gql`
            query GetPosts($profileId: String!) {
                posts(where: { profileId: $profileId }) {
                    items {
                        id
                        content
                        profile {
                            handle
                        }
                        createdAt
                    }
                }
            }
        `;

        try {
            const result = await this.client.query({
                query: GET_POSTS,
                variables: { profileId }
            });

            return result.data.posts.items.map((post: any) => ({
                id: post.id,
                content: post.content,
                author: post.profile.handle,
                timestamp: post.createdAt
            }));
        } catch (error) {
            console.error('Error fetching Lens posts:', error);
            return [];
        }
    }
}

export default LensIndexer;
