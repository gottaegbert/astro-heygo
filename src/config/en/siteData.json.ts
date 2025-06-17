import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "HeyGo",
	// Your website's title and description (meta fields)
	title: "HeyGo - Your AI Snowboarding Coach, Effortless Ride Made Easy",
	description:
		"HeyGo gives snowboarders the real-time insights and precision feedback once only available to pros.",

	// used on contact page and footer
	contact: {
		address1: "1234 Main Street",
		address2: "New York, NY 10001",
		phone: "(123) 456-7890",
		email: "creator@cosmicthemes.com",
	},

	// Your information for blog post purposes
	author: {
		name: "HeyGo",
		email: "creator@heygo.com",
		twitter: "HeyGo",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/cosmic-themes-logo.jpg",
		alt: "Cosmic Themes logo",
	},
};

export default siteData;
