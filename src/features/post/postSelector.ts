import { RootState } from '../../app/store';

export const selectFeedPosts = (state: RootState) => state.post.feedPost;
export const selectProfilePosts = (state: RootState) => state.post.profilePost;
export const selectDetailPost = (state: RootState) => state.post.detailPost;
