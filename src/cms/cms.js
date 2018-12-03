import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import OfferingsPagePreviedew from './preview-templates/OfferingsPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import OfferingsPagePreview from './preview-templates/OfferingsPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('offerings', OfferingsPagePreviedew);
CMS.registerPreviewTemplate('offerings', OfferingsPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
