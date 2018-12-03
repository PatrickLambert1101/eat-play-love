import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import OfferingsPagePreview from './preview-templates/OfferingsPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('offerings', OfferingsPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
