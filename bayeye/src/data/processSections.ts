import generateSection from './generateSection';
import { Schema } from './schema'
import { replaceHtmlTagsWithChakra } from './htmlToChakra'

export const processSections = async (schema: Schema, neighborhood: string | undefined) => {
  try {
    console.log('here')
    // Use Promise.all to wait for all section content to be generated.
    const newsletterSections = await Promise.all(schema.sections.map(async (section) => {
      // Generate each section and wrap the result in HTML
      const prompt = neighborhood ? `San Francisco Neighborhood: ${neighborhood} ${schema.instructions} ${section.prompt}` : `${schema.instructions} ${section.prompt}`
      const sectionContent = await generateSection({ prompt, dataset: section.dataset });
      //if not undefined, replace html tags with chakra components
      return sectionContent;
    }));

    // // Combine all the sections into one HTML string
    // const newsletterHTML = newsletterSections.join('\n\n');

    // // Wrap the combined HTML in a parent <div> for rendering in a browser
    // return `<div id="newsletterContent">\n${newsletterHTML}\n</div>`;
    console.log('newsletterSections', newsletterSections)

    return newsletterSections;
  } catch (error) {
    // If there's an error in any of the Promises, catch it here and log it.
    console.error('Error while generating newsletter sections:', error);
  }
};
