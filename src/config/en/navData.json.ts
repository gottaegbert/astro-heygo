/**
 * * This file is used to define the navigation links for the site.
 * Notes:
 * 1 level of dropdown is supported
 * Mega menus look best with 3-5 columns, but supports anything > 2 columns
 * If using icons, the icon should be saved in the src/icons folder. If filename is "tabler/icon.svg" then input "tabler/icon"
 * Recommend getting icons from https://tabler.io/icons
 */

// types
import { type navItem } from "../types/configDataTypes";

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	// {
	// 	text: "Features",
	// 	megaMenuColumns: [
	// 		{
	// 			title: "AI Technology",
	// 			items: [
	// 				{
	// 					text: "Real-time Coaching",
	// 					link: "/features/ai-coaching",
	// 					icon: "tabler/brain",
	// 				},
	// 				{
	// 					text: "Video Analysis",
	// 					link: "/features/video-analysis",
	// 					icon: "tabler/video",
	// 				},
	// 				{
	// 					text: "Performance Tracking",
	// 					link: "/features/performance-tracking",
	// 					icon: "tabler/chart-line",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Data Insights",
	// 			items: [
	// 				{
	// 					text: "Motion Sensors",
	// 					link: "/features/motion-sensors",
	// 					icon: "tabler/device-mobile",
	// 				},
	// 				{
	// 					text: "Analytics Dashboard",
	// 					link: "/features/analytics",
	// 					icon: "tabler/dashboard",
	// 				},
	// 				{
	// 					text: "Progress Reports",
	// 					link: "/features/progress-reports",
	// 					icon: "tabler/report",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Community",
	// 			items: [
	// 				{
	// 					text: "Train Together",
	// 					link: "/features/train-together",
	// 					icon: "tabler/users",
	// 				},
	// 				{
	// 					text: "Leaderboards",
	// 					link: "/features/leaderboards",
	// 					icon: "tabler/trophy",
	// 				},
	// 				{
	// 					text: "Challenges",
	// 					link: "/features/challenges",
	// 					icon: "tabler/target",
	// 				},
	// 			],
	// 		},
	// 	],
	// },

	{
		text: "About Us",
		link: "/about-us",
	},

	// {
	// 	text: "Blog",
	// 	link: "/blog",
	// },

	// {
	// 	text: "Join Us",
	// 	megaMenuColumns: [
	// 		{
	// 			title: "For Riders",
	// 			items: [
	// 				{
	// 					text: "Get Early Access",
	// 					link: "/signup",
	// 					icon: "tabler/mountain",
	// 				},
	// 				{
	// 					text: "Become a Beta Tester",
	// 					link: "/beta-program",
	// 					icon: "tabler/test-pipe",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "For Partners",
	// 			items: [
	// 				{
	// 					text: "Investor Relations",
	// 					link: "/investors",
	// 					icon: "tabler/chart-arrows",
	// 				},
	// 				{
	// 					text: "Careers",
	// 					link: "/careers",
	// 					icon: "tabler/briefcase",
	// 				},
	// 				{
	// 					text: "Partnership",
	// 					link: "/partnership",
	// 					icon: "tabler/hand-love-you",
	// 				},
	// 			],
	// 		},
	// 	],
	// },

	// {
	// 	text: "Contact",
	// 	link: "/contact",
	// },
];

export default navConfig;
