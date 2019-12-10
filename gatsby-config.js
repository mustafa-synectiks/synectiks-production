module.exports = {
	siteMetadata: {
		title: `Synectiks | Enterprise Devops`,
		description: `Synectiks | Enterprise Devops`,
		author: `Synectiks`
	},
	plugins: [
		`gatsby-remark-responsive-iframe`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`
			}
		},
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'synectiks-latest-website',
				protocol: 'https',
				hostname: 'synectiks.com'
			}
		},

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Synectiks`,
				short_name: `synectiks`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/favicon/android-icon-36x36.png`
				// This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-routes`,
			options: {
				// this is the path to your routes configuration file
				path: `${__dirname}/src/routes.js`
			}
		},
		`gatsby-plugin-meta-redirect`
	]
};
