const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const yamlPlugin = () => ({
  name: 'yaml',
  setup(build) {
    build.onLoad({ filter: /.yaml$/ }, async (args) => {
      const content = yaml.load(fs.readFileSync(args.path, 'utf8'));
      return {
        contents: JSON.stringify(content),
        loader: 'json',
      };
    });
  },
});

require('esbuild').build({
  entryPoints: { index: 'src/resume.js' },
  bundle: true,
  metafile: true,
  outdir: 'dist/',
  watch: process.env.MODE === 'dev' && {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error);
      else console.log('watch build succeeded:', result);
    },
  },
  plugins: [
    yamlPlugin(),
    require('esbuild-copy-static-files')({
      src: 'src/assets',
      dest: 'dist',
    }),
    require('@craftamap/esbuild-plugin-html').htmlPlugin({
      files: [
        {
          filename: 'index.html',
          htmlTemplate: 'src/resume.html',
          entryPoints: ['src/resume.js'],
        },
      ],
    }),
  ],
});
