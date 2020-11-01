export default {
    actions: {
        async getPosts(ctx, limit = 5) {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
            );
            const posts = await res.json();

            ctx.commit('updatePosts', posts)
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        valedPosts(state) {
            return state.posts.filter( p => {
                return p.title && p.body
            })
        },
        allPosts (state) {
            return state.posts
        },
        postsCount(state, getters) {
            return getters.valedPosts.length
        }
    }
}