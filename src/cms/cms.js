import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import CMS from 'netlify-cms-app';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('distro', ProductPagePreview);
CMS.registerPreviewTemplate('archive', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
