import { TagEntry } from "./tag";

export interface TechnologyItemExperience {
    title: string;
    description: string;
}

export interface TechnologyItem {
    title: string;
    experience: TechnologyItemExperience[];
    tags: TagEntry[];
}

export const technologyEntries: TechnologyItem[] = [
    {
        title: 'Angular, React',
        experience: [
            {
                title: 'Frankli',
                description: 'The front-end of the application was developed in Angular. I owned the front-end and am responsible for most of the visual features in the app.'
            },
            {
                title: 'This website',
                description: 'This website is built in Angular. I have also created a few other projects in Angular. I created an exact copy of this website in React using Vite to learn how it works.'
            },
            {
                title: 'College',
                description: 'Angular was the first front-end framework we learned in college and we used React later. I used Expo in my third year project, a React framework for building mobile apps.'
            }
        ],
        tags: [TagEntry.FRAMEWORK, TagEntry.WEB_DEV, TagEntry.FRONT_END]
    },
    {
        title: 'TypeScript, Javascript',
        experience: [
            {
                title: 'Frankli',
                description: 'I modified the tsconfig to make it stricter and added linting rules to ensure we were writing consistent code. I also added some shorthands for directories to make imports easier.'
            },
        ],
        tags: [TagEntry.LANGUAGE, TagEntry.WEB_DEV, TagEntry.FRONT_END]
    },
    {
        title: 'CSS, SCSS',
        experience: [
            {
                title: 'Frankli',
                description: 'I was usually asked to step in and assist other developers with styling issues. I created many re-usable components and styles so we could have a consistent look and feel. I moved us over to SCSS to make our styles more maintainable and created a set of reusable variables and mixins that we could use for colours and breakpoints.'
            },
            {
                title: 'This website',
                description: 'This website uses SCSS. It should be fully responsive and work on all modern browsers.'
            },
        ],
        tags: [TagEntry.FRONT_END, TagEntry.WEB_DEV, TagEntry.DESIGN, TagEntry.UI_UX]
    },
    {
        title: 'Java, Spring Boot',
        experience: [
            {
                title: 'Frankli',
                description: 'The back-end of the application was developed in Java using Spring Boot and Maven. I have added plenty of features to the back-end and have a deep understanding of the architecture.'
            }
        ],
        tags: [TagEntry.BACK_END, TagEntry.LANGUAGE]
    },
    {
        title: 'MySQL, SQL Server',
        experience: [
            {
                title: 'Frankli',
                description: 'The primary database ran on MySQL. I was responsible for upgrading it from 5.7 to 8.0. I wrote many migration scripts for features I developed. I also had to write queries to extract data if clients wanted reports as a CSV.'
            },
            {
                title: 'College',
                description: 'We learned SQL Server in college across multiple modules.'
            }
        ],
        tags: [TagEntry.DATABASE_MANAGEMENT]
    },
    {
        title: 'Git, Bitbucket',
        experience: [
            {
                title: 'Frankli',
                description: 'We used Bitbucket for our source control. I created branches and pull requests regularly. I established a branching strategy for the team to follow so that we avoided conflicts and didn\'t accidentally deploy unfinished features.',
            },
            {
                title: 'Personal Projects',
                description: 'I use git for all my personal projects.'
            },
        ],
        tags: [TagEntry.SOURCE_CONTROL]
    },
    {
        title: 'Bitbucket Pipelines, GitHub Actions',
        experience: [
            {
                title: 'Frankli',
                description: 'I rewrote the original pipelines to make them more reliable, efficient and easier to maintain. I split them into multiple stages so we could run tests in parallel. I also added caching to speed up the builds.'
            },
            {
                title: 'This website',
                description: 'I use GitHub Actions for this website.'
            }
        ],
        tags: [TagEntry.DEV_OPS]
    },
    {
        title: 'Docker',
        experience: [
            {
                title: 'Frankli',
                description: 'I created a docker image for the pipeline to use with all of our dependencies pre-installed to make it faster and easier to understand. I experimented with a docker-compose file which would run each part of the architecture locally but this was never fully adopted.'
            },
            {
                title: 'RadarrSync fork',
                description: 'One of my first projects was a fork of a docker image which was used to sync movie lists between two instances of the same service. My fork has almost 700k downloads as of writing.'
            }
        ],
        tags: [TagEntry.CONTAINERS]
    },
    {
        title: 'Shell Scripting and the Terminal',
        experience: [
            {
                title: 'Frankli',
                description: 'I created a set of scripts to help with common tasks like running the application locally and packaging it for deployment'
            },
            {
                title: 'Workspace finder',
                description: 'I created a command to easily open Visual Studio Code workspace files from the terminal so that I wouldn\'t have to install all of my extensions on the same profile.'
            },
            {
                title: 'College',
                description: 'We had a module on shell scripting where we learned the basics.'
            }
        ],
        tags: [TagEntry.SHELL]
    },
    {
        title: 'AWS, Azure, Google Cloud',
        experience: [
            {
                title: 'Frankli',
                description: 'We used AWS for our infrastructure. I regularly used Elastic Beanstalk, CloudFormation, RDS, S3, CloudWatch, IAM, Route53 and many other services. I was the point of contact for a Well-Architected Framework Review by CloudVisor and made many improvements to our infrastructure as a result. I also used Azure regularly when working on our SSO authentication, Entra integration and Teams app.'
            },
            {
                title: 'Game servers',
                description: 'I used to have an EC2 instance for running any game servers I wanted to host but have sinced moved to an Intel NUC in my house which can be reached by a TailScale proxy.'
            },
            {
                title: 'College',
                description: 'We received several AWS certifications. We also used Azure and Google Cloud for some group projects.'
            }
        ],
        tags: [TagEntry.DEV_OPS, TagEntry.CLOUD_INFRASTRUCTURE]
    },
    {
        title: 'CloudFlare, Route53, GoDaddy, Namecheap',
        experience: [
            {
                title: 'Frankli',
                description: 'Our domains were split across GoDaddy and Namecheap. I transferred them all to CloudFlare to make it easier to manage them. When we changed domain as part of a rebrand, I ensured the records were set up correctly and that the old domain forwarded to the new one properly.'
            },
            {
                title: 'This website',
                description: 'I use CloudFlare for this website. I have added records to support email forwarding and created a subdomains which my friends can use to join any video game servers I host locally.'
            }
        ],
        tags: [TagEntry.CLOUD_INFRASTRUCTURE]
    },
    {
        title: 'Jira, GitHub Issues, Trello, Atlas',
        experience: [
            {
                title: 'Frankli',
                description: 'We used Jira to track our work. I added custom issue types and fields so we could easily track how important the tickets were and measure effort vs importance. I came up with a system for our board columns that made it easier to see what point a ticket was at. I also wrote some custom filters so that we could easily find tickets. I introduced Atlas so that other teams could understand what was being worked on more easily.'
            },
            {
                title: 'College',
                description: 'We used Trello and GitHub issues for some team projects.'
            }
        ],
        tags: [TagEntry.PROJECT_MANAGEMENT]
    },
    {
        title: 'Figma, Adobe XD',
        experience: [
            {
                title: 'Frankli',
                description: 'I used XD for designs initially but later moved to Figma. I created a standard library of colours, components, and styles so that we could quickly mockup new features at a high fidelity.'
            },
            {
                title: 'College projects',
                description: 'I used XD for some college projects, mainly a large group project that we had to do in third year.'
            }
        ],
        tags: [TagEntry.DESIGN, TagEntry.UI_UX]
    }
]