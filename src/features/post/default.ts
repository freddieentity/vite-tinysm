export const namespace = 'post';

import {
  Post,
  FeedPostState,
  ProfilePostState,
  GeneralPostState,
} from './interface';

export const postDefault: Post = {
  comment_count: 0,
  archived: false,
  images: [],
  like_count: 0,
  at: '',
  location: '',
  id: '',
  content: '',
  username: '',
  tags: [],
  // previewComments: [commentDefault],
};

export const feedPostsDefault: FeedPostState = {
  feedPosts: [],
  loading: false,
  error: '',
  more: true,
};

export const profilePostsDefault: ProfilePostState = {
  profilePosts: [],
  loading: false,
  error: '',
  more: true,
};

export const generalPostState: GeneralPostState = {
  feedPost: feedPostsDefault,
  profilePost: profilePostsDefault,
};
