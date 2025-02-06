export enum CareerEntryType {
  EVENT = 'Event',
  CERTIFICATION = 'Certification',
  POSITION = 'Position',
}

export type CareerEntryItem = {
  type: CareerEntryType;
  title: string;
  description?: string;
  location?: string;
  startDate: Date;
  endDate?: Date | null;
  company?: string;
  link?: string;
};

export const RESUME_DOWNLOAD_LINK = '/src/assets/docs/resume-dairefinn-public.pdf';

export const careerEntriesEvents: CareerEntryItem[] = [
  {
    type: CareerEntryType.EVENT,
    title: 'Started BSc Honours in Computing',
    description: `
        I started my degree in computing at ATU Sligo. I chose this course because I had always been interested in computers and technology.
        This course also offered a nice divide between software and networking to begin with, after which you could elect to focus on one or the other.
        <br/><br/>
        My father works in networking so I decided to take the software route as I had already picked up plenty of knowledge from him regarding networking.
        <br/><br/>
        I feel like the course laid a good foundation for me and I learned a lot of the basics of software development.
        <br/><br/>
        More importantly, I met many new friends who I regularly discuss tech with and bounce ideas off of to this day.
        `,
    startDate: new Date(2016, 8, 1),
    endDate: new Date(2020, 4, 1),
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Expanding the team',
    description: `
        Due to the pandemic, Frankli saw a huge increase in demand for our platform as more and more companies were forced to go remote. This resulted in us having enough funding to expand the team and start working on some bigger projects.
        <br/><br/>
        We had grown to a team of 5 developers so to help keep everything coordinated I took the lead on utilizing the full Atlassian suite to manage our projects.
        `,
    startDate: new Date(2021, 6, 1),
    endDate: null
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Business as usual',
    description: `
        During this period, we developed many new features and integrations.
        <br/><br/>
        Our platform was growing rapidly and we were getting more and more clients.
        <br/><br/>
        The larger team size meant that we could focus on more varied projects and I got to work with some really interesting technologies. I learned a lot from my colleagues during this time and I feel like I grew a lot as a developer.
        <br/><br/>
        One project I enjoyed was overhauling our pipelines to be faster and more reliable. I achieved this by splitting them into more manageable steps, running steps in parallel, utilizing a cache and creating a custom Docker image for our build environment.
        `,
    startDate: new Date(2022, 1, 1),
    endDate: null
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Downsizing',
    description: `
        Unfortunately, the growth we had achieved during the pandemic was not sustained and we had to downsize the team drastically.
        This involved going remote first and downsizing the team to just one executive and a one developer.
        <br/><br/>
        I was offered and accepted the developer position, meaning I was now responsible for the entire codebase and was the point of contact for any technical queries.
        <br/><br/>
        I also took on a mentoring role for our graduate developer who had elected to stay on part-time.
        `,
    startDate: new Date(2023, 7, 10),
    endDate: null
  },
].sort((a, b) => b.startDate?.getTime() - a.startDate?.getTime());

export const careerEntriesPositions: CareerEntryItem[] = [
  {
    type: CareerEntryType.POSITION,
    title: 'Work Placement',
    description: `
        My college course required a few weeks of work placement in our third year, during which I managed to secure a position as front-end developer at Frankli, a performance management software company.
        <br/><br/>
        The first project I worked on was to implement a new sign-up workflow. I learned a lot about browser compatibility from this project because we needed to support older versions of Internet Explorer.
        `,
    company: 'Frankli',
    location: 'Sligo',
    startDate: new Date(2019, 4, 1),
    endDate: new Date(2019, 6, 1),
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Software Developer (Part-time)',
    description: `
        I opted to stay on part-time while I finished my degree and I quickly became the point of contact for all things front-end.
        <br/><br/>
        I was responsible for designing (in Adobe XD and later Figma) as well as maintaining and improving the front-end codebase and of course fixing bugs.
        <br/><br/>
        I created a standardized design library which helped to speed up the design process and ensure consistency across multiple developers.
    `,
    company: 'Frankli',
    location: 'Remote',
    startDate: new Date(2019, 6, 1),
    endDate: new Date(2020, 4, 1),
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Software Developer',
    company: 'Frankli',
    location: 'Sligo',
    startDate: new Date(2020, 4, 1, 1),
    endDate: new Date(2023, 10, 5),
    description: `
        I was offered a full-time position as a software developer after I graduated.
        <br/><br/>
        I resumed working on the front-end and design side of things but eventually started taking on back-end work too.
        <br/><br/>
        At this point, I was building my own features start to finish and was responsible for the entire process of designing, building, testing, and deploying any features I was making.
        <br/><br/>
        I also worked on a few projects that involved integrating with third-party APIs (eg. Zendesk, Microsoft Teams, Merge.dev).
        `,
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Senior Software Developer',
    company: 'Frankli',
    location: 'Remote',
    startDate: new Date(2023, 10, 5),
    endDate: new Date(2024, 11, 1),
    description: `
        I received a promotion to Senior Software Developer but since I was already managing all the technical aspects of the company, my responsibilities didn't change much.
        <br/><br/>
        We managed to keep things running smoothly with just the three of us and we even managed to secure some new clients.
        `,
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Career Break',
    description: `
        After 6 years of working at Frankli, I decided to take a break from work to recharge and refocus.
        <br/><br/>
        I spent my time off working on some personal projects, learning new technologies and traveling.
        `,
    startDate: new Date(2024, 11, 1),
  }
].sort((a, b) => b.startDate?.getTime() - a.startDate?.getTime());

export const careerEntriesCertifications: CareerEntryItem[] = [
  {
    type: CareerEntryType.CERTIFICATION,
    title: 'BSc in Computing (Honours)',
    description: `
        I graduated with a first-class honours. I had a GPA of 78%
        <br/>
        Technologies I learned about during my degree include C#, HTML, CSS, JavaScript, Angular, SQL, Shell scripting, Git.
        `,
    location: 'ATU Sligo',
    // startDate: new Date(2016, 8, 1),
    // endDate: new Date(2020, 4, 1)
    startDate: new Date(2020, 4, 1),
    endDate: null
  },
].sort((a, b) => b.startDate?.getTime() - a.startDate?.getTime());

export const careerEntries: CareerEntryItem[] = [
  ...careerEntriesEvents,
  ...careerEntriesPositions,
  ...careerEntriesCertifications,
  {
    type: CareerEntryType.EVENT,
    title: 'Present day',
    description: `
        I am currently looking for new work opportunities.
        `,
    startDate: new Date()
  }
].sort((a, b) => b.startDate?.getTime() - a.startDate?.getTime());
