---
layout: post
title: "Building My Portfolio with Jekyll and GitHub Pages"
description: "Learning to build a portfolio site from scratch using Jekyll and GitHub Pages - the process, challenges, and what I learned."
date: 2025-11-06
categories: [Tech, Learning]
tags: [jekyll, github-pages, portfolio, learning]
---

I have been building side projects for a while, but never had a proper place to showcase them. Some ended up as LinkedIn posts, most just sat on my laptop. I had been thinking about creating a personal website for a while, a space to share projects, write about what I am learning, and establish an online presence beyond social media.

Finally decided to just build it.

## What I Was Looking For

Pretty straightforward requirements:
- A clean way to showcase side projects
- Space for occasional blog posts (when I have something worth sharing)
- Full control over the design and structure
- Free hosting (seemed wasteful to pay for serving static HTML)

Nothing fancy, just something that worked for my needs.

## The Technology Choice

I went with **Jekyll and GitHub Pages**.

Jekyll converts markdown files to HTML - that's basically it. Write content in markdown, commit it, and it becomes a website. No complex build process to maintain.

GitHub Pages hosts it for free and handles HTTPS automatically. Push to the repository, wait a couple minutes, and the changes are live. Pretty smooth workflow.

I considered newer tools, but honestly, I just wanted to get something running without spending weeks learning a new framework. Sometimes the boring choice is the right choice.

## Building It

I kept the design simple, a single page that scrolls between sections. Nothing clever, just: intro, projects, blog (when there are posts), and contact links.

One thing that took some thought was the blog section. I didn't want it sitting there empty while I figured out what to write first. So I made it conditional, if there are no posts, the section doesn't appear. Once I publish something, it shows up automatically. Small detail, but it made the site feel more complete from day one.

For projects, I wanted flexibility since not everything I build lives on GitHub. Some have demo links, others have writeups, some have both. Made the data structure flexible enough to handle different types of links for each project.

All the content lives in YAML files in a `_data` folder, separate from the layout code. Means I can update my bio or add a project without touching any HTML. Makes maintenance easier.

```
_data/
  ├── personal.yml      # Bio, photo, contact
  └── projects.yml      # Side projects with links
_posts/
  └── yyyy-mm-dd-title.md  # Blog posts
```

This separation is key. Want to add a project? Edit `projects.yml`. Write a post? Drop a markdown file in `_posts/`. No touching HTML or layouts.

The entire site is on [GitHub](https://github.com/vmvadivel/vmvadivel.github.io) if you want to look at how it's structured. No special license restrictions, if something here is useful for your own site, feel free to use it.

### Post Naming Convention

Jekyll has a specific requirement for blog posts: they must be named `YYYY-MM-DD-title.md`. This isn't just convention, Jekyll uses this to extract the date and order posts automatically. So `2025-11-06-building-portfolio.md` becomes a post dated November 6, 2025, and appears in the right chronological order on your blog page.

It's a simple pattern, but it means you never have to manually specify dates in frontmatter or worry about sort order.

### Local Development

Getting Jekyll running locally was straightforward:

```bash
# Install Jekyll and bundler (run once)
gem install jekyll bundler

# Clone and navigate to the repository
git clone https://github.com/vmvadivel/vmvadivel.github.io.git
cd vmvadivel.github.io

# Install dependencies
bundle install

# Start the local development server
bundle exec jekyll serve

# Site runs at http://localhost:4000
```

The `bundle exec` part is important, it ensures you are using the exact gem versions specified in your `Gemfile.lock`, which matches what GitHub Pages uses. Saves you from "works on my machine" bugs.

### The Automatic Stuff

Two things Jekyll handles automatically that are worth mentioning:

**Sitemap Generation:** Add the `jekyll-sitemap` plugin to your `_config.yml`, and Jekyll generates a `sitemap.xml` automatically. Every page, every post, properly formatted for search engines. No manual maintenance needed.

**SEO Tags:** The `jekyll-seo-tag` plugin adds all the meta tags search engines and social media platforms look for - Open Graph tags, Twitter cards, canonical URLs. Just include it in your layout, and it pulls from your config and post frontmatter.

Both plugins are supported by GitHub Pages out of the box. Just add them to your config:

```yaml
plugins:
  - jekyll-sitemap
  - jekyll-seo-tag
```

That's it. SEO and discoverability handled.

## Learning Along the Way

This was my first time using Jekyll properly and my first real experience with GitHub Pages beyond just visiting other people's sites.

**Figuring out GitHub Pages** took a bit of time. The documentation is good, but there is always that gap between reading about something and actually doing it. Had to learn about build times, how the deployment works, and why sometimes local development looks different from production.

**Learning Jekyll** meant understanding Liquid templating, how layouts work, and the whole concept of collections and data files. Coming from other web frameworks, some of it felt familiar, others not so much. Spent a good amount of time reading docs and looking at other Jekyll sites to understand common patterns.

**Starting simple helped.** My initial plan had way more features - search, dark mode toggle, analytics, newsletter signup. Then I realized I was planning features for a site that didn't exist yet. Cut it back to just what was needed to launch: homepage, project showcase, blog capability. Everything else can wait.

The build process had a few hiccups. What worked locally didn't always work the same way on GitHub Pages, mostly due to Ruby version differences. Learned to test things after deploying rather than assuming local development matches production perfectly.


## What's Next

Planning to set up a **custom domain** once I get around to registering one. The `.github.io` URL works fine, but having a personal domain would be nice. That'll probably turn into another post about DNS setup and configuration.

Thinking about adding **search functionality** eventually, but it doesn't make sense until there are more posts to search through. Maybe after 10+ posts it'll be worth the time.

And of course, **more posts** about the projects listed on the site. Each one has interesting technical decisions and tradeoffs that might be worth writing about.

## Reflections

The site isn't perfect, and there are things I will probably change later. But it's live, it works, and I am actually using it. That's better than a perfect site that never launches.

Sometimes you just need to start building and figure it out as you go.