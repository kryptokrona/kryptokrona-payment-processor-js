export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/config.json","fonts/Montserrat-Regular.woff","fonts/Montserrat-Regular.woff2","fonts/RobotoMono-Regular.woff","fonts/RobotoMono-Regular.woff2"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.0b9cf831.js","imports":["_app/immutable/entry/start.0b9cf831.js","_app/immutable/chunks/index.88c3ee78.js","_app/immutable/chunks/singletons.c43f7b46.js","_app/immutable/chunks/index.a0ee06d2.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.cc68a5d5.js","imports":["_app/immutable/entry/app.cc68a5d5.js","_app/immutable/chunks/index.88c3ee78.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
