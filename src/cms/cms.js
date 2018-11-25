import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import SingleProductPreview from './preview-templates/SingleProductPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import OfferingsPagePreview from './preview-templates/OfferingsPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('offerings', OfferingsPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('single-product', SingleProductPreview);
