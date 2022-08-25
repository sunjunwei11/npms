export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/gap-vue-router-cjs.js',
            format: 'cjs',
            exports: "auto"
        },
        {
            file: 'dist/gap-vue-router-umd.js',
            format: 'umd',
            name: 'umd_ok',
            exports: "auto"
        },
        {
            file: 'dist/gap-vue-router-es.js',
            format: 'es'
        },
        {
            file: 'dist/gap-vue-router-iife.js',
            format: 'iife',
            name: 'iife_ok'
        },
    ]
  };