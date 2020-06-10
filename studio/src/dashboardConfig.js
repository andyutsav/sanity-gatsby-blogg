export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee0f0acbf198b32048d1899',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blogg-studio',
                  apiId: 'b0f1991b-1fb9-463a-b08f-1d4ebe60cba8'
                },
                {
                  buildHookId: '5ee0f0acbf198b39128d17fd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blogg',
                  apiId: '382748b5-c2f9-439f-951a-3de46c2522f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-gatsby-blogg',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blogg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
