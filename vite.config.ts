//Vite Configuration
import { defineConfig as viteConfig } from 'vite'

//Vite HTML minification
import { createHtmlPlugin as viteHTMLPlugin } from 'vite-plugin-html'

//Vite Image optimization and convertation
import { imagetools as viteImageTools } from 'vite-imagetools'
import { ViteImageOptimizer as viteImageOptimizer } from 'vite-plugin-image-optimizer'
import viteImagePresets, { widthPreset } from 'vite-plugin-image-presets'

//Font optimization
import viteWebFont from 'vite-plugin-webfont-dl'

//CSS Optimization
import { optimizeCssModules as viteOptimizeCSSModule } from 'vite-plugin-optimize-css-modules'

//Checkers and Helpers
import viteTypescriptChecker from 'vite-plugin-checker'

//Native Node.js modules
import path from 'node:path'

export default viteConfig(({ mode }) => {
	const isDev: boolean = mode === 'development' ? true : false

	return {
		clearScreen: false,
		appType: 'spa',
		root: path.resolve(__dirname, 'src'),
		assetsInclude: ['**/*.png', '**/*.webp', '**/*.jpg', '**/*.jpeg'],
		publicDir: path.resolve(__dirname, 'public'),
		server: {
			open: true,
		},
		test: {
			globals: true,
			setupFile: path.resolve(__dirname, 'tests-setup.ts'),
			environment: 'jsdom',
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		build: {
			minify: isDev ? 'esbuild' : 'terser',
			emptyOutDir: true,
			sourcemap: true,
			brotliSize: false,
			terserOptions: {
				ecma: 2020,
				compress: {
					arguments: true,
					drop_console: true,
					drop_debugger: true,
					expression: true,
				},
			},
			outDir: path.resolve(__dirname, 'build'),
			reportCompressedSize: false,
			chunkSizeWarningLimit: 250,
			rollupOptions: {
				input: path.resolve(__dirname, 'src/index.html'),
				output: {
					manualChunks: {
						'react-vendor': [
							'react',
							'react-dom',
							'react-dom/client',
							'react-router-dom',
						],
						'redux-vendor': ['@reduxjs/toolkit', 'react-redux', 'redux'],
					},
					assetFileNames: assetInfo => {
						let extType = assetInfo.name.split('.').at(1)

						if (/webp|png|jpg|jpeg|gif/i.test(extType)) extType = 'img'

						return `assets/${extType}/[name]-[hash][extname]`
					},
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
				},
			},
		},
		plugins: isDev
			? []
			: [
					viteTypescriptChecker({
						enableBuild: true,
						typescript: true,
						terminal: false,
						overlay: false,
						eslint: false,
					}),
					viteWebFont([], {
						injectAsStyleTag: false,
						minifyCss: !isDev,
					}),
					viteHTMLPlugin({ minify: true }),
					viteOptimizeCSSModule(),
					viteImageTools(),
					viteImageOptimizer({
						test: /\.(webp)$/i,
						webp: {
							quality: 20,
							alphaQuality: 20,
							effort: 6,
							smartSubsample: true,
						},
					}),
					viteImagePresets({
						thumbnail: widthPreset({
							class: 'img thumb',
							loading: 'lazy',
							widths: [30, 80],
							formats: {
								webp: { quality: 20 },
							},
						}),
					}),
			  ],
	}
})
