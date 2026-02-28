/*
  # Create Blog Schema

  1. New Tables
    - `blog_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `description` (text, optional)
      - `color` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `author_name` (text)
      - `author_avatar` (text, optional)
      - `author_bio` (text, optional)
      - `category_id` (uuid, foreign key)
      - `tags` (text array)
      - `featured_image` (text, optional)
      - `published_at` (timestamp)
      - `updated_at` (timestamp)
      - `published` (boolean, default false)
      - `seo_meta_title` (text, optional)
      - `seo_meta_description` (text, optional)
      - `seo_keywords` (text array)
      - `reading_time` (integer)
      - `created_at` (timestamp)

    - `portal_waitlist`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `source` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published content
    - Add policies for authenticated admin access
*/

-- Create blog_categories table
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  color text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  author_name text,
  author_avatar text,
  author_bio text,
  category_id uuid REFERENCES blog_categories(id),
  tags text[] DEFAULT '{}',
  featured_image text,
  published_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published boolean DEFAULT false,
  seo_meta_title text,
  seo_meta_description text,
  seo_keywords text[] DEFAULT '{}',
  reading_time integer,
  created_at timestamptz DEFAULT now()
);

-- Create portal_waitlist table
CREATE TABLE IF NOT EXISTS portal_waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  source text DEFAULT 'portal_lp',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_categories
CREATE POLICY "Blog categories are viewable by everyone"
  ON blog_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Blog categories are editable by authenticated users"
  ON blog_categories
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for blog_posts
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts
  FOR SELECT
  TO public
  USING (published = true);

CREATE POLICY "All blog posts are viewable by authenticated users"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Blog posts are editable by authenticated users"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

-- Create policies for portal_waitlist
CREATE POLICY "Portal waitlist is insertable by everyone"
  ON portal_waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Portal waitlist is viewable by authenticated users"
  ON portal_waitlist
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);
CREATE INDEX IF NOT EXISTS idx_portal_waitlist_email ON portal_waitlist(email);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_blog_categories_updated_at
    BEFORE UPDATE ON blog_categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();