# FundFusion - A Crowdfunding Platform

FundFusion is a crowdfunding platform designed to connect project creators with backers who are interested in supporting innovative ideas and initiatives. <br>
Whether you're a creative individual, a startup, or a non-profit organization, FundFusion provides a platform to showcase your projects and raise funds from a community of supporters.

## Features

- **Project Creation**: Users can create projects by providing detailed descriptions, images, deadlines and funding goals.
- **Backer Contributions**: Backers can browse projects and contribute funds to support the ones they are interested in.
- **Connection**: Backers and Creators can follow each other and projects of thier choice.
- **Project Updates**: Project creators can provide updates to backers about the progress of their projects.
- **Search and Filter**: Users can search for projects based on categories, keywords, or popularity.

## Installation

1. Clone the repository: `git clone https://github.com/avinashyadav16/FundFusion-Crowdfunding-Project.git`
2. Navigate to the project directory: `cd FundFusion-Crowdfunding-Project`
3. Add `config.php` into `FundFusion-Crowdfunding-Project/config/` folder with the following content:

```php
<?php
# In "config.php"
# DB configuration
define('DB_NAME', 'crowdfunding');
define('DB_USER', 'USERNAME');
define('DB_PASSWORD', 'PASSWORD');
define('DB_HOST', 'localhost');
```

4. Import the database schema from database.sql file into your MySQL database.
5. Configure your web server to point to the project directory.
6. Access the website through your web browser.



## Usage
1. Create an account or log in if you are an existing user or browse as an guest through all the projects.
2. Browse through the list of projects or use the search and filter options to find projects of interest.
3. Contribute funds to support the projects you are passionate about.
4. Keep track of project updates project creators.
5. Project creators can manage their projects, communicate with backers, and provide updates through their dashboard.

