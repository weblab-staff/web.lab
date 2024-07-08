"use client";

export default function Rules() {
  return (
    <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
      {rulez.map((rule, k) => (
        <li
          className="flex flex-col gap-2 whitespace-pre-wrap rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur-2xl transition duration-300 ease-in-out lg:p-8"
          key={k}
        >
          <h3 className="text-lg font-semibold tracking-tighter text-white lg:text-xl 2xl:text-2xl">
            {rule.title}
          </h3>
          {rule.desc && (
            <p className="text-xs tracking-tighter text-neutral-300 lg:text-sm 2xl:text-base">
              {rule.desc}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

const rulez = [
  {
    title: "website development starts monday, january 8, 2024 at 1PM.",
    desc: "development prior to this date will result in disqualification.",
  },
  {
    title: "dynamically-generated pages",
    desc: "must contain pages that are dynamically produced outside the client (e.g. Node.js, Ruby on Rails, PHP or Python scripts) using the results of queries to some database or other data service. MongoDB (what we teach in class) is recommended. if you would like to use something else, please confirm with staff first.",
  },
  {
    title: "user authentication",
    desc: "must contain pages that display content for authenticated users only. this can be as simple as a username and password, or as complex as a full OAuth implementation (MIT Keystone does not count).",
  },
  {
    title: "original design and implementation",
    desc: "design and implementation of key features must be original. frameworks and libraries are allowed, as well as open-source components provided the top-level design is original and your main functionality is not just a wrapper around the component. you may not customize a CMS system such as Wordpress for your site.",
  },
  {
    title: "pre-generated dataset",
    desc: "your database contains a processed version of a publicly accessible dataset, or you can bootstrap your site with fake data. if you choose to bootstrap your site by generating data, be creative! judges will be bored by a site where the same three names show up everywhere!",
  },
  {
    title: "3rd party data access",
    desc: "your system uses another application's publicly accessible API to access and return data on the fly. you must declare all 3rd-party APIs that you use. if you go this route, you should use a database as a cache and fallback mechanism for the API requests. you will be disqualified if your application malfunctions after the submission deadline as a result of a broken 3rd party API.",
  },
  {
    title: "data visualization",
    desc: "Your application presents data in a visual manner that enhances the users' understanding of the data. The visualization should highlight some feature of the data that isn't obvious or trivial. The user must be able to influence which data gets displayed in the visualizations. You are allowed to use a pre-existing implementation for your visualization, like a jQueryUI widget, provided that it fits with your application. Remember that all widgets and libraries must be cited.",
  },
  {
    title: "dynamic filtering",
    desc: `Your application shows a small (< 10%) subset of data which is most relevant to the user at the moment, or ranks the data such that the most relevant items are shown first. The subset and/or the ordering of the data must change in response to the user's actions. Three examples that would fulfill this requirement are full-text search, criteria-based search, and a "recommended for you" section. For the latter, you will have to convince us that the contents changes based on user actions.`,
  },
  {
    title: "asynchronous viewing/modification of data",
    desc: `After your application is loaded, future additions, modifications, or deletions are done asynchronously (without a new page load). A "single-page app" that contains significant functionality implemented via asynchronous calls to your server would satisfy this requirement.`,
  },
  {
    title: "website utilizes github.",
    desc: "teams must use github for version control and keeping source code. staff will be teaching this in class.",
  },
  {
    title: "plagiarism",
    desc: "we will ask you to name all your team members and list all the 3rd party data, code, and media that you have used. please keep careful track of your sources, just like you would for any other course, and include a citation of ALL sources used. This includes, but is not limited to, the use of: 3rd party libraries, code distributed by the staff, code snippets shared on Piazza, and code snippets found on StackOverflow or other forums. For all components of your application that are not your own, include a citation in the README of your repository. Additionally, for code snippets pasted (with or without modification) into your source code, include a brief citation or link to the origin of the code as a comment in the code itself. Plagiarism may result in disqualification, a failing grade, and referral to MIT's Committee of Discipline.",
  },
  {
    title: "third-party code/data/media",
    desc: "any code or content that is not your own must be public available at no cost through legal means. this includes content such as images, fonts, and stylesheets. All such code and content must be cited in your repository's README (see Plagiarism section above). You may not use any code that you wrote before January 8, 2024, unless it was publicly released.",
  },
  {
    title: "straight-forward evil",
    desc: "Do not spam or host malware. Do not encourage or assist users in breaking non-disclosure agreements or infringing copyright. Your site must not provide a haven for discussion or sharing of topics violating relevant local, state, and Federal laws, including copyright law. Do not abuse MIT's infrastructure or databases. Do not interfere with other contestants' development process.",
  },
  {
    title: `past competitors who were in a team who have won more than $2,000 in their 6.9620 (formerly 6.148) career are not eligible to compete. Special prizes do not count towards this restriction. If in doubt, please contact the staff.`,
  },
];

const rules = [
  {
    details:
      "website development is prohibited until monday, january 8, 2024 at 1PM. failure to do so will result in disqualification.",
  },
  {
    details: "website meets all of the following criteria",
    expand: [
      {
        title: "dynamically-generated pages",
        desc: "must contain pages that are dynamically produced outside the client (e.g. Node.js, Ruby on Rails, PHP or Python scripts) using the results of queries to some database or other data service. MongoDB (what we teach in class) is recommended. if you would like to use something else, please confirm with staff first.",
      },
      {
        title: "user authentication",
        desc: "must contain pages that display content for authenticated users only. this can be as simple as a username and password, or as complex as a full OAuth implementation (MIT Keystone does not count).",
      },
      {
        title: "original design and implementation",
        desc: "design and implementation of key features must be original. frameworks and libraries are allowed, as well as open-source components provided the top-level design is original and your main functionality is not just a wrapper around the component. you may not customize a CMS system such as Wordpress for your site.",
      },
    ],
  },
  {
    details: "website is populated with data",
    expand: [
      {
        title: "pre-generated dataset",
        desc: "your database contains a processed version of a publicly accessible dataset, or you can bootstrap your site with fake data. if you choose to bootstrap your site by generating data, be creative! judges will be bored by a site where the same three names show up everywhere!",
      },
      {
        title: "3rd party data access",
        desc: "your system uses another application's publicly accessible API to access and return data on the fly. you must declare all 3rd-party APIs that you use. if you go this route, you should use a database as a cache and fallback mechanism for the API requests. you will be disqualified if your application malfunctions after the submission deadline as a result of a broken 3rd party API.",
      },
    ],
  },
  {
    details: "website possesses dynamic user interaction.",
    expand: [
      {
        title: "data visualization",
        desc: "Your application presents data in a visual manner that enhances the users' understanding of the data. The visualization should highlight some feature of the data that isn't obvious or trivial. The user must be able to influence which data gets displayed in the visualizations. You are allowed to use a pre-existing implementation for your visualization, like a jQueryUI widget, provided that it fits with your application. Remember that all widgets and libraries must be cited.",
      },
      {
        title: "dynamic filtering",
        desc: `Your application shows a small (< 10%) subset of data which is most relevant to the user at the moment, or ranks the data such that the most relevant items are shown first. The subset and/or the ordering of the data must change in response to the user's actions. Three examples that would fulfill this requirement are full-text search, criteria-based search, and a "recommended for you" section. For the latter, you will have to convince us that the contents changes based on user actions.`,
      },
      {
        title: "asynchronous viewing/modification of data",
        desc: `After your application is loaded, future additions, modifications, or deletions are done asynchronously (without a new page load). A "single-page app" that contains significant functionality implemented via asynchronous calls to your server would satisfy this requirement.`,
      },
    ],
  },
  {
    details: "website utilizes version control and source code is on github.",
  },
  {
    details: "teams comply with US law and MIT academic & integrity policies.",
    expand: [
      {
        title: "plagiarism",
        desc: "we will ask you to name all your team members and list all the 3rd party data, code, and media that you have used. please keep careful track of your sources, just like you would for any other course, and include a citation of ALL sources used. This includes, but is not limited to, the use of: 3rd party libraries, code distributed by the staff, code snippets shared on Piazza, and code snippets found on StackOverflow or other forums. For all components of your application that are not your own, include a citation in the README of your repository. Additionally, for code snippets pasted (with or without modification) into your source code, include a brief citation or link to the origin of the code as a comment in the code itself. Plagiarism may result in disqualification, a failing grade, and referral to MIT's Committee of Discipline.",
      },
      {
        title: "third-party code/data/media",
        desc: "any code or content that is not your own must be public available at no cost through legal means. this includes content such as images, fonts, and stylesheets. All such code and content must be cited in your repository's README (see Plagiarism section above). You may not use any code that you wrote before January 8, 2024, unless it was publicly released.",
      },
      {
        title: "straight-forward evil",
        desc: "Do not spam or host malware. Do not encourage or assist users in breaking non-disclosure agreements or infringing copyright. Your site must not provide a haven for discussion or sharing of topics violating relevant local, state, and Federal laws, including copyright law. Do not abuse MIT's infrastructure or databases. Do not interfere with other contestants' development process.",
      },
    ],
  },
  {
    details: `past competitors who were in a team who have won more than $2,000 in their 6.9620 (formerly 6.148) career are not eligible to compete. Special prizes do not count towards this restriction. If in doubt, please contact the staff.`,
  },
];
