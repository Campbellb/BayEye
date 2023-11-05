interface Section {
  title: string;
  prompt: string;
  dataset: string;
}

interface TopicSchema {
  title?: string;
  instructions: string;
  sections: Section[];
}

export interface Schema {
  [key: string]: TopicSchema; // Index signature
}

export const schema: Schema = {
  neighborhood: {
    instructions: `
      We are generating content for a concise and engaging newsletter report focused on the neighborhood of San Francisco that is listed above, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
      
      Use the provided personalization data to personalize the newsletter. Use personal language, speaking directly to the reader.
      Use their occupation, hobbies, interests and any other relevant personal details to tailor the content and language directly for the reader.
      Be sure to translate your response to the language specified in the personalization data.
      To personalize the BayEye newsletter, start by addressing the reader by their first name to create an immediate connection.
      Examine their occupation to include news, events, or articles that resonate with their professional interests.
      Incorporate their hobbies and the activities they enjoy into the content, suggesting local events, parks, or community activities in San Francisco that align with these interests.
      Consider their neighborhood when mentioning area-specific advice, such as new local ordinances, construction updates, or neighborhood watch news.
      If they've provided their age, use it to inform the tone and content of the articles; for example, younger readers may appreciate more trending and upbeat topics, while older subscribers may value more in-depth analysis or health and wellness information.
      Lastly, check the language preference indicated in the personalization data and ensure the newsletter is translated accordingly.
      The goal is to make each reader feel as though the newsletter has been curated just for them, increasing engagement and reader satisfaction.

      Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
      When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
      This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
      DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
      DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
      Ensure that it is well formatted, using correct HTML tags used properly. DO NOT just return a giant list, make it looks beautiful, appealing and easy to read. Don't use " - ", use proper HTML tags.

      Here is an example of what a section could look like. Keep the sections the same length, don't make them too long.: 
      <b>President Zelensky of Ukraine has emphasized that the Israel-Gaza conflict is overshadowing the war in Ukraine, which aligns with Russia's strategic goals.</b> He also highlighted the urgent need for advanced weaponry and anti-aircraft systems from the U.S. to continue the fight effectively.
      <br/>
      <b>More:</b>
      <br/>
      <ul>
      </li>Zelensky refutes the idea of a stalemate in Ukraine, contradicting his top military general's remarks.</li>
      <li>Ukraine's southern counter-offensive is slow, raising concerns of war fatigue among Western allies.</li>
      <li>Russia denies a stalemate, asserting Ukraine won't win on the battlefield.</li>
      <li>Advanced weapons and anti-aircraft defenses from the U.S. are deemed crucial by Zelensky.</li>
      <li>The veracity of both sides' claims regarding the situation remains unverified.</li>
      </ul>
      <b>Zoom Out:</b>
      <li>General Valery Zaluzhnyi, Ukraine's military leader, indicated that the conflict is entering a drawn-out, stationary phase, potentially enabling Russia to regroup its forces.</li>
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
    Keep the returned text to around 3-4 sentences in total, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
      dataset: 'fb8utadysw4fixqo409e4lqt'
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
    },
    {
      title: "Community Corner: Local Events & Highlights",
      prompt: `
  This fourth section is dedicated to spotlighting upcoming local events and community highlights in the specified neighborhood of San Francisco. 
  Focus on community-organized events, local achievements, and cultural celebrations that bring together residents and foster a sense of belonging.
  Provide details on event dates, locations, and what attendees can expect, aiming to excite and engage the community.
  Highlight any community leaders or local heroes who are making a positive impact, celebrating their contributions in a way that instills pride among residents.
  Keep the language warm, inclusive, and encouraging, inviting readers to participate and get involved in their community.
  Maintain a brief format, sticking to around 3-4 sentences, ensuring clarity and conciseness, and embodying the tone of an engaging community bulletin.

  Do not hallucinate or make up facts, only report on the data provided. DO NOT use placeholder data. 
  `,
      dataset: 'i8ropxf5ysthuxsq0rdqex0i'
    },
    {
      title: "Board Briefs: SF Board Meeting Synopses",
      prompt: `
      The second section should reference the SF City Board meeting notes, and how they relate to specified neighborhood of San Francisco.
      Include any information relevant to a resident of the specified neighborhood of San Francisco.
    `,
      dataset: 'o154jggzzpkzklz0bcnq7cdi'
    }
  ]
  },
  supervisors: {
    title: 'BayEye on SF Supervisors',
    instructions:`
    We are generating content for a concise and engaging newsletter report focused on the San Francisco City Board's September meeting, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
      Use the provided personalization data to personalize the newsletter. Use personal language, speaking directly to the reader.
      Use their occupation, hobbies, interests and any other relevant personal details to tailor the content and language directly for the reader.
      Be sure to translate your response to the language specified in the personalization data.
      To personalize the BayEye newsletter, start by addressing the reader by their first name to create an immediate connection.
      Examine their occupation to include news, events, or articles that resonate with their professional interests.
      Incorporate their hobbies and the activities they enjoy into the content, suggesting local events, parks, or community activities in San Francisco that align with these interests.
      Consider their neighborhood when mentioning area-specific advice, such as new local ordinances, construction updates, or neighborhood watch news.
      If they've provided their age, use it to inform the tone and content of the articles; for example, younger readers may appreciate more trending and upbeat topics, while older subscribers may value more in-depth analysis or health and wellness information.
      Lastly, check the language preference indicated in the personalization data and ensure the newsletter is translated accordingly.
      The goal is to make each reader feel as though the newsletter has been curated just for them, increasing engagement and reader satisfaction.

    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
        Ensure that it is well formatted, using correct HTML tags used properly. DO NOT just return a giant list, make it looks beautiful, appealing and easy to read. Don't use " - ", use proper HTML tags.

    Here is an example of what a section could look like. Keep the sections the same length, don't make them too long.: 
    <b>President Zelensky of Ukraine has emphasized that the Israel-Gaza conflict is overshadowing the war in Ukraine, which aligns with Russia's strategic goals.</b> He also highlighted the urgent need for advanced weaponry and anti-aircraft systems from the U.S. to continue the fight effectively.
    <br/>
    <b>More:</b>
    <br/>
    <ul>
    </li>Zelensky refutes the idea of a stalemate in Ukraine, contradicting his top military general's remarks.</li>
    <li>Ukraine's southern counter-offensive is slow, raising concerns of war fatigue among Western allies.</li>
    <li>Russia denies a stalemate, asserting Ukraine won't win on the battlefield.</li>
    <li>Advanced weapons and anti-aircraft defenses from the U.S. are deemed crucial by Zelensky.</li>
    <li>The veracity of both sides' claims regarding the situation remains unverified.</li>
    </ul>
    <b>Zoom Out:</b>
    <li>General Valery Zaluzhnyi, Ukraine's military leader, indicated that the conflict is entering a drawn-out, stationary phase, potentially enabling Russia to regroup its forces.</li>

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
    title: 'BayEye on SF Transportation',
    instructions: `
    Generate the content for a concise and engaging newsletter report focused on Transportation in San Francisco, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
          Use the provided personalization data to personalize the newsletter. Use personal language, speaking directly to the reader.
      Use their occupation, hobbies, interests and any other relevant personal details to tailor the content and language directly for the reader.
      Be sure to translate your response to the language specified in the personalization data.
      To personalize the BayEye newsletter, start by addressing the reader by their first name to create an immediate connection.
      Examine their occupation to include news, events, or articles that resonate with their professional interests.
      Incorporate their hobbies and the activities they enjoy into the content, suggesting local events, parks, or community activities in San Francisco that align with these interests.
      Consider their neighborhood when mentioning area-specific advice, such as new local ordinances, construction updates, or neighborhood watch news.
      If they've provided their age, use it to inform the tone and content of the articles; for example, younger readers may appreciate more trending and upbeat topics, while older subscribers may value more in-depth analysis or health and wellness information.
      Lastly, check the language preference indicated in the personalization data and ensure the newsletter is translated accordingly.
      The goal is to make each reader feel as though the newsletter has been curated just for them, increasing engagement and reader satisfaction.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
        Ensure that it is well formatted, using correct HTML tags used properly. DO NOT just return a giant list, make it looks beautiful, appealing and easy to read. Don't use " - ", use proper HTML tags.

    Here is an example of what a section could look like. Keep the sections the same length, don't make them too long.:
    <b>President Zelensky of Ukraine has emphasized that the Israel-Gaza conflict is overshadowing the war in Ukraine, which aligns with Russia's strategic goals.</b> He also highlighted the urgent need for advanced weaponry and anti-aircraft systems from the U.S. to continue the fight effectively.
    <br/>
    <b>More:</b>
    <br/>
    <ul>
    </li>Zelensky refutes the idea of a stalemate in Ukraine, contradicting his top military general's remarks.</li>
    <li>Ukraine's southern counter-offensive is slow, raising concerns of war fatigue among Western allies.</li>
    <li>Russia denies a stalemate, asserting Ukraine won't win on the battlefield.</li>
    <li>Advanced weapons and anti-aircraft defenses from the U.S. are deemed crucial by Zelensky.</li>
    <li>The veracity of both sides' claims regarding the situation remains unverified.</li>
    </ul>
    <b>Zoom Out:</b>
    <li>General Valery Zaluzhnyi, Ukraine's military leader, indicated that the conflict is entering a drawn-out, stationary phase, potentially enabling Russia to regroup its forces.</li>

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
      {
        title: "SFMTA Board Meeting Notes",
        prompt: `
          This new section focuses on synthesizing the latest SFMTA board meeting notes with an emphasis on decisions and discussions that affect the public transportation in San Francisco.
          It should inform the readers about recent motions, upcoming projects, and any changes in the public transportation policy that might impact their daily commute.
          Present this information in an easy-to-understand format, highlighting the implications for regular users of the SFMTA services. Consider fare changes, service modifications, and infrastructure developments.
          Keep the tone accessible and straightforward, aiming to keep the public informed and prepared for any changes. Ensure that the information is up-to-date and includes any specific dates related to the implementation of these decisions.
          Limit the update to a brief paragraph, maintaining grammatical accuracy and the friendly tone of a community-centric newsletter.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      }

    ]
  },
  cleansafesf: {
    title: 'BayEye on Clean Safe SF',
    instructions: `
    Generate the content for a concise and engaging newsletter report focused on Cleanliness and Safety in San Francisco, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
          Use the provided personalization data to personalize the newsletter. Use personal language, speaking directly to the reader.
      Use their occupation, hobbies, interests and any other relevant personal details to tailor the content and language directly for the reader.
      Be sure to translate your response to the language specified in the personalization data.
      To personalize the BayEye newsletter, start by addressing the reader by their first name to create an immediate connection.
      Examine their occupation to include news, events, or articles that resonate with their professional interests.
      Incorporate their hobbies and the activities they enjoy into the content, suggesting local events, parks, or community activities in San Francisco that align with these interests.
      Consider their neighborhood when mentioning area-specific advice, such as new local ordinances, construction updates, or neighborhood watch news.
      If they've provided their age, use it to inform the tone and content of the articles; for example, younger readers may appreciate more trending and upbeat topics, while older subscribers may value more in-depth analysis or health and wellness information.
      Lastly, check the language preference indicated in the personalization data and ensure the newsletter is translated accordingly.
      The goal is to make each reader feel as though the newsletter has been curated just for them, increasing engagement and reader satisfaction.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
        Ensure that it is well formatted, using correct HTML tags used properly. DO NOT just return a giant list, make it looks beautiful, appealing and easy to read. Don't use " - ", use proper HTML tags.

    Here is an example of what a section could look like. Keep the sections the same length, don't make them too long.:
    <b>President Zelensky of Ukraine has emphasized that the Israel-Gaza conflict is overshadowing the war in Ukraine, which aligns with Russia's strategic goals.</b> He also highlighted the urgent need for advanced weaponry and anti-aircraft systems from the U.S. to continue the fight effectively.
    <br/>
    <b>More:</b>
    <br/>
    <ul>
    </li>Zelensky refutes the idea of a stalemate in Ukraine, contradicting his top military general's remarks.</li>
    <li>Ukraine's southern counter-offensive is slow, raising concerns of war fatigue among Western allies.</li>
    <li>Russia denies a stalemate, asserting Ukraine won't win on the battlefield.</li>
    <li>Advanced weapons and anti-aircraft defenses from the U.S. are deemed crucial by Zelensky.</li>
    <li>The veracity of both sides' claims regarding the situation remains unverified.</li>
    </ul>
    <b>Zoom Out:</b>
    <li>General Valery Zaluzhnyi, Ukraine's military leader, indicated that the conflict is entering a drawn-out, stationary phase, potentially enabling Russia to regroup its forces.</li>

  `,
    sections: [
      {
        title: "Clean Sweep: 311 Clean-Up Chronicles",
        prompt: `
    This first section should report on the latest city cleaning operations as recorded by 311, including types and volumes of requests, areas targeted, response times, and successful resolutions. Stress the improvements in city aesthetics and hygiene, using before-and-after examples and relevant statistics from the dataset.
     Do not generalize, cite specific facts and data when generating your response.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "Safety First: SFPD Weekly Roundup",
        prompt: `
    This second section should Summarize the SFPD's weekly crime log, noting any significant shifts in crime trends, case progressions, or effective community safety programs. Present data on crime types, changes in incident rates, and examples of proactive police work contributing to community safety. Offer insights into how these updates might affect commuters and travelers in the city. Do not generalize, cite specific facts and data when generating your response.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "Legal Lens: DA Resolutions Revealed",
        prompt: `
    This third section should Discuss the latest DA resolutions, focusing on their implications for crime reduction, legal processes, and rehabilitation efforts. Highlight how these resolutions will tackle specific neighborhood issues or address recent high-profile cases, with a clear explanation of the legal outcomes expected.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      },
      {
        title: "Transit Talk: SFMTA Board Insights",
        prompt: `
    This fourth section should provide an update on SFMTA board's latest meeting outcomes, emphasizing the expected impact on public transportation and infrastructure. Detail specific policy changes or initiatives, affected routes or areas, and anticipated environmental benefits. Ensure accuracy and date relevance.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'f1vabifgiikpyiio1bz0rdmi'
      }
    ]
  },
  community: {
    title: 'BayEye on SF Community',
    instructions: `
    Generate the content for a concise and engaging newsletter report focused on Community in San Francisco, adopting a style similar to Inside.com newsletters. The report should present information in a digestible format with short, informative sections, bullet points, and a direct, accessible tone. Begin with a compelling headline for each section, followed by succinct, bulleted summaries that highlight the essential points and their significance to the community. Avoid long paragraphs and ensure that each section is self-contained with clear takeaways.
          Use the provided personalization data to personalize the newsletter. Use personal language, speaking directly to the reader.
      Use their occupation, hobbies, interests and any other relevant personal details to tailor the content and language directly for the reader.
      Be sure to translate your response to the language specified in the personalization data.
      To personalize the BayEye newsletter, start by addressing the reader by their first name to create an immediate connection.
      Examine their occupation to include news, events, or articles that resonate with their professional interests.
      Incorporate their hobbies and the activities they enjoy into the content, suggesting local events, parks, or community activities in San Francisco that align with these interests.
      Consider their neighborhood when mentioning area-specific advice, such as new local ordinances, construction updates, or neighborhood watch news.
      If they've provided their age, use it to inform the tone and content of the articles; for example, younger readers may appreciate more trending and upbeat topics, while older subscribers may value more in-depth analysis or health and wellness information.
      Lastly, check the language preference indicated in the personalization data and ensure the newsletter is translated accordingly.
      The goal is to make each reader feel as though the newsletter has been curated just for them, increasing engagement and reader satisfaction.
    Below you will find instructions for the individual section of the newsletter we are creating. Each section should only be 1 or 2 paragraphs long. Wrap the section titles in <h1> tags.
    When giving your responses, do not include any decorative text or instructions. Do not use any placeholder data, only use real facts.
    This should represent official communication to the resident of the city. The data is real, up-to-date data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
    DO NOT include ANY placeholder data, only use real facts drawn from the provided dataset. DO not do things like "XX number of cases", use the REAL NUMBER. Do NOT do things like "[Street Name] will be closed for construction between [Intersection A] and [Intersection B]."
    DO NOT talk about the provided dataset, just report the facts.
    DO NOT include anything like this: "Note: This response is generated based on the information provided in the document excerpt. It is always recommended to refer to official city sources for the most accurate and up-to-date information regarding specific street closures and their impacts." This IS an official city source, we are using the data provided by the city of San Francisco, and the language should reflect trustworthiness and authority.
        Ensure that it is well formatted, using correct HTML tags used properly. DO NOT just return a giant list, make it looks beautiful, appealing and easy to read. Don't use " - ", use proper HTML tags.

    Here is an example of what a section could look like. Keep the sections the same length, don't make them too long.:
    <b>President Zelensky of Ukraine has emphasized that the Israel-Gaza conflict is overshadowing the war in Ukraine, which aligns with Russia's strategic goals.</b> He also highlighted the urgent need for advanced weaponry and anti-aircraft systems from the U.S. to continue the fight effectively.
    <br/>
    <b>More:</b>
    <br/>
    <ul>
    </li>Zelensky refutes the idea of a stalemate in Ukraine, contradicting his top military general's remarks.</li>
    <li>Ukraine's southern counter-offensive is slow, raising concerns of war fatigue among Western allies.</li>
    <li>Russia denies a stalemate, asserting Ukraine won't win on the battlefield.</li>
    <li>Advanced weapons and anti-aircraft defenses from the U.S. are deemed crucial by Zelensky.</li>
    <li>The veracity of both sides' claims regarding the situation remains unverified.</li>
    </ul>
    <b>Zoom Out:</b>
    <li>General Valery Zaluzhnyi, Ukraine's military leader, indicated that the conflict is entering a drawn-out, stationary phase, potentially enabling Russia to regroup its forces.</li>

  `,
    sections: [
      {
        title: "Park Life: Upcoming SF Rec & Park Events",
        prompt: `
    This first section should Detail the upcoming events from the SF Parks and Rec calendar, highlighting community gatherings, recreational activities, and cultural celebrations happening in local parks. Include dates, locations, and descriptions of the events.
     Do not generalize, cite specific facts and data when generating your response.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'i8ropxf5ysthuxsq0rdqex0i'
      },
      {
        title: "Food for Thought: New SF Food Permits Issued",
        prompt: `
    This second section should Provide a rundown of newly issued food permits, showcasing the diverse culinary expansions within the city. Highlight where new food vendors and establishments will be located and the variety of cuisines they will offer.
    Explain its importance in layman's terms and discuss the anticipated effects on the city’s infrastructure and economy.
    Use the tone of an informational news letter providing a valuable service to the neighborhood, using casual and kind language. Be sure to give specific dates.
    Keep the returned text to around 3-4 sentences, and make sure it's grammatically correct, and in the language and tone of an informational news letter, like inside.com newsletters. Do not include placeholder data, only cite real facts.
  `,
        dataset: 'i8ropxf5ysthuxsq0rdqex0i'
      }
    ]
  },
}