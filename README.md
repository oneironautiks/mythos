# mythos

## Table of Contents
- [Overview](#overview)
  - [Project Description](#project-description)
- [Design](#design)
  - [Wireframes](#wireframes)
    - [Desktop](#desktop)
    - [Mobile](#mobile)
- [Development](#development)
  - [Functional Goals](#functional-goals)
    - [MVP](#mvp)
    - [Post-MVP](#post-mvp)
  - [Functional Heirarchy](#functional-heirarchy)
    - [Repo Structure](#repo-structure)
    - [Database Table Structure](#express-database-structure)
    - [React Structure](#react-structure)
  - [Functional Components](#functional-components)
    - [Component Breakdown](#component-breakdown)
    - [Component Timeframes](#component-timeframes)
    - [Helper Functions](#helper-functions)
  - [Supporting Libraries](#supporting-libraries)
- [Project Review](#project-review)
  - [Code Showcase](#code-showcase)
  - [Bugs, Issues, and Resolutions](#issues-&-resolutions)
- [Project Followup](#project-followup)

<br>
<br>

# Overview

## Project Description
mythos is a website dedicated first & foremost to collecting recorded instances of pan-cultural myths & legends from around the world in one centralized place, and secondly to the birth of new, modern stories from and for our modern world. Users will be able to browse through and read the world's folklore, edit mistakes/fill in missing gaps & upload missing myths, as well as contribute their own personal tales.

#### Project Inspiration

#### Project Permissions

<br>

# Design

## ERD Model
![ERD Model](https://imgur.com/0PihVkP.png)

## Sitemap

## Wireframes

#### Desktop

#### Mobile

<br>

# Development

## Functional Goals 

### MVP
- User authentication & password hashing
- Ruby-on-Rails backend with models for stories, as well as users & comments
  - Users (username, email, password, fav_story)
    - User has_many stories, User has_many comments
  - Stories (title, summary, place_of_origin, date_of_origin, story)
    - Story has_many comments
  - Comments (title, comment, date_posted)
    - Comments belongs_to Users, Comments belongs_to Stories
- CRUD functionality
- Core React Components
  - Pages
    - Landing (Overview, Login, Register)
    - Homepage (_Index_)(View All Story Summaries)
    - User (_Show_)
    - Story (_Show_)
  - Modules
    - Login Form
    - Register Form
    - Upload-a-story Form

### Post-MVP
- Users can have thumbnail avatars
- Upvote/downvote functionality for stories & comments
- Additional user stats
- Insight into the origins of stories, where applicable/available
- Become-a-mod/admin feature
- Stories sorted by origin info/plot content
  - Search feature 

<br> 

## Functional Hierarchy

#### Repo Structure

#### Ruby-on-Rails Database Structure

#### React Structure

<br> 

## Functional Components

#### Component Breakdown

#### Component Timeframes

#### Helper Functions

<br>

## Supporting Libraries

<br>
<br>

# Project Review

## Code Showcase

<br>

## Conflicts & Resolutions

<br>
<br>

# Project Followup
