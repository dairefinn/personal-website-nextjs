import { TagEntry } from "./tag";

export enum ProjectStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
    COMPLETED = 'Completed'
}

export type ProjectItem = {
    title: string;
    description: string;
    tags: TagEntry[];
    startDate?: Date;
    link?: string;
    isFeatured?: boolean;
    status: ProjectStatus;
}

export const projects: ProjectItem[] = [
    {
        title: 'This website but in React using Vite',
        description: `
            During my job search, I noticed that a lot of companies were using React instead of Angular. Having used some React previously and Expo heavily for my college third year project, I've always known that they were similar but I wanted to get some more experience with React incase there were any recent changes that I was unaware of.
            <br/><br/>
            I decided the best way to do this would be to recreate this website in React. The React documentation suggests using a framework when setting up new projects so I asked some of my friends who work with React professionally which one they would recommend. They all suggested Vite so I went with that.
            <br/><br/>
            I was pleasantly surprised at how fast I got everything converted over. The only real issue I had was with the routing. Angular has a bunch of built in features that make routing easy but React requires you to use a library. I set up React Router and got everything working as expected.
            `,
        tags: [TagEntry.WEB_DEV],
        link: 'https://github.com/dairefinn/personal-website-vite',
        startDate: new Date('2025-02-06'),
        status: ProjectStatus.COMPLETED
    },
    {
        title: 'Lorekeeper fork',
        description: `
            A friend of mine wanted to create a Pokémon-themed Art RPG for their community using the <a href="https://lorekeeper.me/" target="_blank">Lorekeeper</a> framework. However, they lacked the technical skills to set it up and customize it to fit their vision.
            <br/><br/>
            The concept revolves around players generating character prompts, which include a Pokémon species and various traits. Players then submit artwork based on these prompts, earning in-game currency or items in return. These rewards can be used to re-roll or modify the species and traits for future characters.
            <br/><br/>
            While Lorekeeper offers many of the features needed for this game, there were some additional functionalities my friend wanted. To address this, I forked the project and made custom modifications.
            <br/><br/>
            One major change I implemented was to randomize the character creation process, so that species and traits are generated randomly rather than selected by the player. I also introduced a "drop rate" system, where certain traits are rarer than others.
            <br/><br/>
            In addition, I added consumable items that allow players to modify or re-roll species and traits in their character prompts.
            <br/><br/>
            The project is built using PHP 8 and Laravel, both of which were new to me, so I’ve been learning as I go. It also involved some configuration tweaks to the MySQL database and Apache server on the VPS.
            <br/><br/>
            We've recently incorporated some closed source extensions so any of the latest changes will not be visible in the public repository, which only contains my personal modifications before the extensions were added.
            `,
        tags: [TagEntry.GAME_DEV, TagEntry.WEB_DEV],
        link: 'https://github.com/dairefinn/lorekeeper',
        startDate: new Date('2024-09-14'),
        status: ProjectStatus.ACTIVE
    },
    {
        title: 'S&Box Game Jam II entry - FarmH&',
        description: `
            <img src="/src/assets/images/farmhand.webp" alt="FarmH&" class="img-full-width img-rounded"/>
            <br/><br/>
            S&Box is a new in-development game engine built on top of the Source 2 engine. I am working alongside a group of friends to create a game for <a href="https://sbox.game/c/gamejam2" target="_blank">S&Box's Game Jam II</a> - a farming game with a horror twist called "FarmH&". The aim of the game is to grow and sell enough Melons to buy a car and leave the sinister farmer's farm.
            <br/><br/>
            We have each taken ownership of different features of the project and have been working on them in isolation before we can tie it all together into a coherent game. So far I have implemented quite a few features including:
            <ul>
                <li>Player movement</li>
                <li>Inventory and item system</li>
                <li>NPC dialogue system</li>
                <li>Planting, watering, fertilizing and growing of crops</li>
                <li>Buying tools and selling crops</li>
                <li>Day/night cycle</li>
                <li>Vehicles</li>
                <li>Map design</li>
            </ul>
            The game logic is written in C# and the UI is Razor and SCSS. S&Box is still in it's developer preview so the documentation is sparse and there are very few examples to learn from. This has been a fun challenge so far and we've made good progress by reverse engineering the parts of the engine that are exposed and looking at some existing projects.
            `,
        tags: [TagEntry.GAME_DEV],
        startDate: new Date('2024-08-16'),
        status: ProjectStatus.INACTIVE
    },
    {
        title: 'Batch script to toggle between Wired and Wireless connection',
        description: `
            My mobile hotspot is much faster than my wired connection but my wired connection is much more reliable so I usually use the hotspot to download large files and then switch back to the wired connection for everything else.
            <br/><br/>
            The problem is that I cannot rely solely on enabling wifi and disabling it as programs already using the wired adapter will continue using it.
            <br/><br/>
            This script is used to quickly toggle between the two connections, ensuring that all programs switch over to the new connection.
            `,
        tags: [TagEntry.SHELL, TagEntry.NETWORKING],
        link: 'https://github.com/dairefinn/windows-script-wlan-wifi-toggle',
        startDate: new Date('2024-08-08'),
        status: ProjectStatus.COMPLETED
    },
    {
        title: 'This website',
        description: `
            This site is hosted through Github Pages and is built using Angular.
            <br/><br/>
            One of the challenges here was getting the compiled site to be served properly. GitHub pages requires the index.html file to be in the root of the repository but Angular compiles the site into a dist folder.
            When searching for how to do this using angular there are a bunch of articles telling you to use libraries which push the compiled site to a new gh-pages branch but that seemed conveluted to me because instead of having a CI/CD pipeline, you'd have to run a script locally every time you wanted to push new version of the site live.
            Turns out it's much easier using Github Actions to push only the files we want to push without having a weird branch setup.
            <br/><br/>
            The next issue I had was that the routing would break if you refreshed the page while viewing a subpage (eg. dairefinn.com/home). This was fixed by duplicating the index.html file during the build process and renaming it to 404.html. This way, the Angular router would still work when you refreshed the page.
            <br/><br/>
            Now the site works perfectly and I can push changes to it by simply pushing to the master branch. On top of that, the hosting is 100% free.
            `,
        tags: [TagEntry.WEB_DEV, TagEntry.DEV_OPS],
        link: 'https://github.com/dairefinn/dairefinn.github.io',
        startDate: new Date('2024-07-29'),
        status: ProjectStatus.ACTIVE
    },
    {
        title: 'Reverse proxy over TailScale',
        description: `
            My home network has a fairly complex setup because it is a subnet of the house next door temporarily. For some reason, the gateway router crashes when I try to log in to it from my subnet. As a result, I cannot port forward without having to physically restart it.
            <br/><br/>
            As the person who hosts most if not all of our game servers, this was a problem. Sure - I could just have bought another big VPS in the cloud and hosted the servers there but I have the server hardware available so I wanted to use it.
            <br/><br/>
            I decided to buy a smaller VPS and use it as a reverse proxy. I could then use TailScale to connect it and the server PC and route the traffic through the VPS.
            This way, I could host the servers on my hardware and still have them accessible from the internet across only ports I have opened on the VPS and the TailScale ACLs.
            We haven't noticed any issues with latency or packet loss so far.
            <br/><br/>
            This costs me like 5 euro a month and works flawlessly - with the added benefit of letting my friends connect using a domain name instead of an IP address.
            <br/><br/>
            Update: I no longer need this set up as we have had a line installed to our house and I can now port forward without issue.
            `,
        tags: [TagEntry.NETWORKING],
        link: undefined,
        startDate: new Date('2024-07-29'),
        status: ProjectStatus.COMPLETED
    },
    {
        title: 'Godot game',
        description: `
            I\'ve always wanted to dabble in game development as a hobby because the field interests me. I decided to try out Godot because it\'s free and open source.
            <br/><br/>
            Currently, this is a 3D movement shooter style game but it could change. I\'m not sure if I\'ll ever finish this but I\'m having fun with it so far and I find it interesting how different game dev is to my primary field of web dev
            <br/><br/>
            So far I have implemented:
            <ul>
                <li>Player walking, jumping, double jumping, sprinting, dashing and sliding</li>
                <li>Camera movement</li>
                <li>Basic enemy AI/State machine</li>
                <li>Player health and damage</li>
                <li>Inventory system</li>
                <li>Pathfinding</li>
            </ul>
            The game logic code is written in C#. The visuals either using primitive shapes or free assets from Itch.io.
            `,
        tags: [TagEntry.GAME_DEV],
        link: 'https://github.com/dairefinn/sneak-game',
        startDate: new Date('2024-01-02'),
        status: ProjectStatus.ACTIVE
    },
    {
        title: 'Discord bot',
        description: `
            I had some time to kill while I was waiting for a game to download so I decided to check out how the Discord API works.
            <br/><br/>
            When a user posts a certain command in chat, the bot will join the voice channel they are in and play a preset sound.
            `,
        tags: [TagEntry.WEB_DEV],
        link: 'https://github.com/dairefinn/discord-bot',
        startDate: new Date('2023-10-26'),
        status: ProjectStatus.INACTIVE
    },
    {
        title: 'Geforce Now Searcher',
        description: `
            After a surgery, I was finding it difficult to sit at my computer so I resorted to streaming games to my TV via Nvidia's GeForce NOW service - which allows you to play games you own on a high-end VM with a dedicated GPU.
            <br/><br/>
            Unfortunately, their games list would show all available games on the service regardless of whether you owned them or not. This made it difficult to find games I could play without having to compare with my Steam library manually.
            <br/><br/>
            I decided to make a web app that would query both the GeForce NOW API and the Steam API to show only the games I owned that were available on the service. The Steam ID can be changed to work for other users too.
            <br/><br/>
            This was extremely useful at the time but I haven't used the service since I recovered and I'm sure that their filtering has improved since then.
            `,
        tags: [TagEntry.WEB_DEV],
        link: 'https://github.com/dairefinn/geforce-now-searcher',
        startDate: new Date('2021-12-05'),
        status: ProjectStatus.COMPLETED
    },
    {
        title: 'Slope v2',
        description: `
            One of my most played games is Garry\'s Mod. This is a sandbox game where people can create their own game modes and maps.
            <br/><br/>
            I used to enjoy playing one called \'Slope\' with my friends but the server hosting it went down which led me to attempt making my own version of it.
            <br/><br/>
            The sequel to Garry\'s Mod is in development so there's probably not much point in continuing this project but it was fun learning about lua and the source engine works.
            <br/><br/>
            I have acquired access to the sequel\'s developer preview so I'd like to continue this project for that game instead.
            `,
        tags: [TagEntry.GAME_DEV],
        link: 'https://github.com/dairefinn/slope_v2',
        startDate: new Date('2020-09-30'),
        status: ProjectStatus.INACTIVE
    },
    {
        title: 'Workspace function',
        description: `
            I often jump between multiple projects that use different programming languages. I wanted use an single editor for all of them just for simplicity. Visual Studio Code seemed like the best choice because it has a lot of extensions which add support for different languages.
            <br/><br/>
            The issue I had noticed was that the editor would slow down if I had too many extensions installed. Visual Studio Code offers workspaces which can be used to load only the extensions you need for a specific project but it can be annoying to transition between the two.
            <br/><br/>
            As a result, I made this utility to easily open a saved workspace via the terminal. It's a simple bash script that opens the workspace file based on the name you give it.
            <br/><br/>
            I use this almost every day and it has saved me a lot of time. As an added bonus, I have all my workspaces saved in a git repository so I can easily add them to a new machine.
            `,
        tags: [TagEntry.SHELL],
        link: 'https://github.com/dairefinn/workspace-function',
        startDate: new Date('2020-05-19'),
        status: ProjectStatus.COMPLETED
    },
    {
        title: 'RadarrSync',
        description: `
            RadarrSync is a utility that syncs your Radarr library with another instance of Radarr. This is useful if you have two instances of Radarr running on different servers and you want to keep the libraries in sync.
            <br/><br/>
            Someone I know was having trouble getting the original RadarrSync project to work in docker so I decided to fork it and make some changes to get it working for them.
            <br/><br/>
            My version is available publicly on docker hub and has almost 700k downloads as of writing.
            `,
        tags: [TagEntry.CONTAINERS, TagEntry.SOURCE_CONTROL],
        link: 'https://github.com/dairefinn/RadarrSync',
        startDate: new Date('2019-02-17'),
        status: ProjectStatus.COMPLETED
    },
].sort((a, b) => b.startDate?.getTime() - a.startDate?.getTime());
