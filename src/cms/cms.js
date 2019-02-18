import CMS from 'netlify-cms';

import EventsPostPreview from './preview-templates/EventsPostPreview';
// import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('events-post', EventsPostPreview);
// CMS.registerPreviewTemplate('offerings-page', OfferingsPagePreview);
// CMS.registerPreviewTemplate('blog', BlogPostPreview);
