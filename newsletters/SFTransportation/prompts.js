export const instructions =
  `
    Generate the content for a concise and engaging newsletter report focused on Transportation in San Francisco, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
  `


export const sections = [
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
