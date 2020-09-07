module.exports = function ({ title, content, frontMatter }) {
  return `
    <!doctype html>
    <html>
      <head>
        <!-- <title>${title}</title> -->
        <title>${frontMatter.title}</title>
        <link rel="stylesheet" href="./css/site.css">
      </head>
      <body>
        <div class="profile">
        ${content}
        </div>
      </body>
    </html>
  `;
};
