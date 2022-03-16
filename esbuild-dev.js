require('esbuild').build({
  watch: true,
  bundle: true,
  entryPoints: ['./src/app.ts'],
  target: 'ES5',
  outdir: './public'
}).then(() => {
  console.log('watching...')
})
