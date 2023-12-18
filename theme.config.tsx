export default {
  logo: <p className="font-light text-xl text-inherit">🌩️ stratus</p>,
  project: {
    link: "https://github.com/stratus-team/stratus-docs",
  },
  // ... other theme options
  docsRepositoryBase: "https://github.com/stratus-team/stratus-docs/blob/main",
  // TODO: Update to dynamic
  //https://nextra.site/docs/docs-theme/theme-configuration#dynamic-tags-based-on-page
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Stratus Docs" />
      <meta property="og:description" content="Making dev's lives easier." />
    </>
  ),
};
