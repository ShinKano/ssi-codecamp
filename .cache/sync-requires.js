const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/blog/index.js"))),
  "component---src-pages-calender-2020-feb-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/calender/2020/Feb.js"))),
  "component---src-pages-calender-2020-jan-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/calender/2020/Jan.js"))),
  "component---src-pages-calender-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/calender/index.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/contact/thanks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/index.js"))),
  "component---src-pages-rooms-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/rooms.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-codecamp/src/pages/tags/index.js")))
}

