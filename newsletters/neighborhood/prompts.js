export const instructions =
  `
  THE NEIGHBORHOOD IS SOMA
    We are generating content for a concise and engaging newsletter report focused on the neighborhood of San Francisco that is listed above, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    Ensure that it is well formatted, and not overly wordy. Do not return giant paragraphs.
  `

export const sections = [
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
    dataset: 'c48y7rr0q4oxc0ix07cl87ei'
  }
]
