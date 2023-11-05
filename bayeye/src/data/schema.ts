interface Section {
  title: string;
  prompt: string;
  dataset: string;
}

interface TopicSchema {
  instructions: string;
  sections: Section[];
}

interface Schema {
  [key: string]: TopicSchema; // Index signature
}

export const schema: Schema = {
  neighborhood: {
    instructions: `
    We are generating content for a concise and engaging newsletter report focused on the neighborhood of San Francisco that is listed above, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    Ensure that it is well formatted, and not overly wordy. Do not return giant paragraphs.
  `,
  sections: [
    {
      title: "Street Scene: Temporary Street Closures",
      prompt: `
    This first section should summarize impact of temporary street closures on residents of the specified neighborhood of San Francisco in the coming weeks, citing specific incidents found in the dataset. Do not generalize, cite specific facts and data when generating your response.
    Provide a brief overview of significant street developments, including closures, constructions, and revamps. Ensure the description gives actionable insights into how these changes affect local residents and businesses.
    Be specific about which streets are closing, and when, and what the impact will be on residents and businesses.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
      dataset: 'fb8utadysw4fixqo409e4lqt'
    }
    ,
    {
      title: "Board Briefs: SF Board Meeting Synopses",
      prompt: `
      The second section should reference the SF City Board meeting notes, and how they relate to specified neighborhood of San Francisco.
      Include any information relevant to a resident of the specified neighborhood of San Francisco.
    `,
      dataset: 'o154jggzzpkzklz0bcnq7cdi'
    },
    {
      title: "Safety Spotlight: Public Alerts and Advisories",
      prompt: `
      The third section should use the provided related to 311, fire and police incidents, and generate insights that are useful for residents of the specified neighborhood of San Francisco.
      Note that the statistics and overview of the incidents are from the last week, and specific to the neighborhood.
      Cite specific notable incidents, include date and locations. It should read less like a police blotter and more like a community update.
      Include some numbers about the incidents, such as the number of different types of incidents, and sections of the neighborhood affected.
      Keep this concise, and readable.
    `,
      dataset: 'xi2z18ifrduqyuts7clt2wq9'
    }
  ]
  },
  supervisors: {
    instructions:`
    We are generating content for a concise and engaging newsletter report focused on the San Francisco City Board's September meeting, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
  `,
    sections: [
      {
        title: "Governance in Action",
        prompt: `
    This first section should analyze the most recent decisions from the SF Board of Supervisors' meeting notes, focusing on resolutions and ordinances passed. Explain their implications for the city and potential effects on daily life for residents, drawing connections to historical data or similar decisions where applicable. Do not generalize, cite specific facts and data when generating your response.
    List a number of these, these are really valuable and important to the community. Ensure the description gives actionable insights into how these changes affect local residents and businesses.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'o154jggzzpkzklz0bcnq7cdi'
      }
      ,
      {
        title: "Supervisor in Focus",
        prompt: `
      Select a Supervisor featured in the latest meeting notes. Summarize their contributions, key statements, and voting patterns from the meeting. Provide a brief on their current initiatives or legislative focus. The second section should reference the SF City Board meeting notes.
      Include any information relevant to a resident of the specified neighborhood of San Francisco.
       Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
    `,
        dataset: 'o154jggzzpkzklz0bcnq7cdi'
      },
      {
        title: "The Public's Platform",
        prompt: `
      From the public comments section of the most recent SF Board of Supervisors' meeting notes, curate a selection of testimonials that reflect the community's response to board decisions. Summarize the concerns or support expressed by residents, providing context for the issues discussed.
       Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
    `,
        dataset: 'o154jggzzpkzklz0bcnq7cdi'
      },
      {
        title: "Next on the Agenda",
        prompt: `
      Preview the upcoming agenda items for the next SF Board of Supervisors meeting as outlined in the meeting notes. Highlight potential legislation, discussions, and community projects that are slated for review, giving readers an informative snapshot of future proceedings.
       Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
    `,
        dataset: 'o154jggzzpkzklz0bcnq7cdi'
      }
    ]
  },
  transportation: {
    instructions: `
    Generate the content for a concise and engaging newsletter report focused on Transportation in San Francisco, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
  `,
    sections: [
      {
        title: "SF Street Impacts",
        prompt: `
    This first section should return a summary of the latest San Francisco street closures. Offer insights into how these updates might affect commuters and travelers in the city. Do not generalize, cite specific facts and data when generating your response.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "BART Bulletin",
        prompt: `
    This second section should return a summary of the latest updates on BART operations, including service changes, maintenance schedules, and any planned expansions or improvements. Offer insights into how these updates might affect commuters and travelers in the city. Do not generalize, cite specific facts and data when generating your response.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "SFO Flight Focus",
        prompt: `
    This third section should return an update on airport operations, including new flight routes, terminal changes, or construction updates. Discuss how these developments impact both domestic and international travelers using SFO.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "MUNI Rider Report",
        prompt: `
    This fourth section should return an on MUNI in San Francisco, and provide any valuable updates for residents of the city.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
    ]
  }
}