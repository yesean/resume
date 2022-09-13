require('esbuild').build({
  entryPoints: { index: 'src/resume.js' },
  bundle: true,
  metafile: true,
  outdir: 'dist/',
  plugins: [
    require('esbuild-plugin-yaml').yamlPlugin(),
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
