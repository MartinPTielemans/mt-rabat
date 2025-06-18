/**
 * Demo data used as placeholders and initial values for the blog
 */

export const title = 'Blog.'

export const description = [
  {
    _key: '9f1a629887fd',
    _type: 'block',
    children: [
      {
        _key: '4a58edd077880',
        _type: 'span',
        marks: [],
        text: 'A statically generated blog example using ',
      },
      {
        _key: '4a58edd077881',
        _type: 'span',
        marks: ['ec5b66c9b1e0'],
        text: 'Next.js',
      },
      {
        _key: '4a58edd077882',
        _type: 'span',
        marks: [],
        text: ' and ',
      },
      {
        _key: '4a58edd077883',
        _type: 'span',
        marks: ['1f8991913ea8'],
        text: 'Sanity',
      },
      {
        _key: '4a58edd077884',
        _type: 'span',
        marks: [],
        text: '.',
      },
    ],
    markDefs: [
      {
        _key: 'ec5b66c9b1e0',
        _type: 'link',
        href: 'https://nextjs.org/',
      },
      {
        _key: '1f8991913ea8',
        _type: 'link',
        href: 'https://sanity.io/',
      },
    ],
    style: 'normal',
  },
]

export const ogImageTitle = 'A Next.js Blog with a Native Authoring Experience'

// Footer initial values
export const footerInitialValues = {
  title: 'Footer indhold',
  companySection: {
    title: 'Om os',
    description: 'Marcel Tielemans er en professionel leverandør af infrastrukturløsninger med fokus på bæredygtighed og høj kvalitet.',
  },
  competenciesSection: {
    title: 'Kompetencer',
    competencies: [
      { name: 'Vejservice' },
      { name: 'Traditionelle anlægsopgaver' },
      { name: 'Store infrastrukturopgaver' },
      { name: 'Asfalt' },
    ],
  },
  contactSection: {
    title: 'Kontakt',
    phone: '+45 40 48 64 80',
    email: 'm.t@live.dk',
    address: 'Kollund Byvej 45\n7400 Herning',
  },
  linksSection: {
    title: 'Links',
    links: [
      { title: 'Privatlivspolitik', url: '/privatlivspolitik' },
      { title: 'Cookiepolitik', url: '/cookiepolitik' },
      { title: 'Årsrapporter', url: '/aarsrapporter' },
      { title: 'Job og karriere', url: '/job-karriere' },
    ],
  },
  copyright: 'Marcel Tielemans',
}
