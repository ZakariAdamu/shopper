import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
	dest: "public",
	register: true,
	disable: process.env.NODE_ENV === "development",
	scope: "/app",
	sw: "service-worker.js",
	cacheOnFrontEndNav: true,
	cacheStartUrl: "/",
	dynamicStartUrl: false,
});

export default withPWA({
	reactStrictMode: true,
});
