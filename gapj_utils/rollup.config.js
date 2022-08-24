export default {
    input: 'src/main.js',
    output: [
        {
            file: 'dist/bundle_cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle_umd.js',
            format: 'umd',
            name: 'umd_ok'
        },
        {
            file: 'dist/bundle_ems.js',
            format: 'es'
        },
        {
            file: 'dist/bundle_iife.js',
            format: 'iife',
            name: 'iife_ok'
        },
    ]
  };