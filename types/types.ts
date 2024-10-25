export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export type Posts = {
  posts: Post[];
};

export type Comment = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: string;
    username: string;
    fullName: string;
  };
};

export type DataComments = {
  comments: Comment[];
  total: number;
  skip: number;
  limit: number;
};

export type User = {
  post: {
    [key: number]: {
      likes?: boolean;
      dislikes?: boolean;
      deleteComments?: {
        [key: number]: boolean;
      };
    };
  };
};

export type Reactions = "likes" | "dislikes";
