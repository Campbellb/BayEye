import generateSection from './generateSection';

export const processSections = async (schema) => {
  try {
    console.log('here')
    // Use Promise.all to wait for all section content to be generated.
    const newsletterSections = await Promise.all(schema.sections.map(async (section) => {
      // Generate each section and wrap the result in HTML
      const sectionContent = await generateSection({ prompt: `${schema.instructions} ${section.prompt}`, dataset: section.dataset });
      return `<p>${sectionContent}</p>`;
    }));

    // Combine all the sections into one HTML string
    const newsletterHTML = newsletterSections.join('\n\n');

    // Wrap the combined HTML in a parent <div> for rendering in a browser
    return `<div id="newsletterContent">\n${newsletterHTML}\n</div>`;
  } catch (error) {
    // If there's an error in any of the Promises, catch it here and log it.
    console.error('Error while generating newsletter sections:', error);
  }
};
