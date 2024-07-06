export type QiitaItem = {
    coediting: boolean;
    comments_count: number;
    created_at: string;
    id: string;
    likes_count: number;
    stocks_count: number;
    page_views_count: number;
    private: boolean;
    reactions_count: number;
    body: string;
    rendered_body: string;
    tags: { name: string; versions: [] }[];
    title: string;
    updated_at: string;
    url: string;
    user: {
      description: string;
      facebook_id: string;
      followees_count: number;
      followers_count: number;
      github_login_name: string;
      id: string;
      items_count: number;
      linkedin_id: string;
      location: string;
      name: string;
      organization: string;
      permanent_id: number;
      profile_image_url: string;
      team_only: boolean;
      twitter_screen_name: string;
      website_url: string;
    };
};

export type Query = {
    title?: string,
    body?: string,
    userId?: string,
    numItems?: number,
    numPage: number,
}

export type QiitaUser = {
    description?: string,
    facebook_id?: string,
    followees_count: number,
    followers_count: number,
    github_login_name?:string,
    id: string,
    items_count: number,
    linkedin_id?: string,
    name?: string,
    organization?: string,
    permanent_id: number,
    profile_image_url: string,
    team_only: boolean,
    twitter_screen_name?: string,
    website_url?: string,
}