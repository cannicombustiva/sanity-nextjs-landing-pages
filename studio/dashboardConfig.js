export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e71f15d076fcf3bdc5a1e7b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6iayebnb',
                  apiId: 'e7ea233e-4fa1-4670-b694-13a7cdbe7158'
                },
                {
                  buildHookId: '5e71f15e2af73b1c7db43c06',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f8mz53ic',
                  apiId: '62cfe7e1-9ed3-4254-bc37-3c976d31869a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cannicombustiva/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f8mz53ic.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
