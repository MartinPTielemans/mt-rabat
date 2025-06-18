import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  title,
  description,
  ogImage
}`);

export const homepageQuery = defineQuery(`*[_type == "homepage"][0]{
  hero{
    title,
    subtitle,
    backgroundImage{
      asset->{
        _id,
        url
      },
      alt
    },
    primaryButtonText,
    secondaryButtonText
  },
  mainContent{
    title,
    description,
    features[]{
      title,
      description,
      icon
    }
  },
  capabilities{
    title,
    description,
    leftColumn{
      title,
      content
    },
    rightColumn{
      title,
      content
    }
  },
  contactSection{
    title,
    description,
    buttonText
  },
  recentProjects{
    title,
    description,
    viewAllText
  }
}`);

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`;

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`;

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ${linkFields},
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`);

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);

// Gallery page query
export const galleryPageQuery = defineQuery(`*[_type == "galleryPage"][0]{
  title,
  description,
  categories[]{
    name,
    slug
  },
  images[]{
    image{
      asset->{
        _id,
        url,
        metadata{
          dimensions,
          blurhash,
          lqip
        }
      },
      alt
    },
    title,
    description,
    category,
    alt,
    featured
  },
  loadMoreText,
  callToAction{
    title,
    description,
    primaryButtonText,
    secondaryButtonText,
    phoneNumber
  }
}`);

// Contact page query
export const contactPageQuery = defineQuery(`*[_type == "contactPage"][0]{
  title,
  description,
  contactInfo{
    phone,
    phoneHours,
    email,
    emailResponse,
    address,
    emergencyPhone,
    emergencyHours
  },
  serviceAreas{
    title,
    description,
    areas[]
  },
  contactForm{
    title,
    serviceOptions[]{
      label,
      value
    },
    submitButtonText,
    privacyNotice
  }
}`);

// Services page query
export const servicesPageQuery = defineQuery(`*[_type == "servicesPage"][0]{
  title,
  description,
  services[]{
    title,
    description,
    icon,
    features[]
  },
  callToAction{
    title,
    description,
    buttonText,
    buttonLink
  }
}`);

// About page query
export const aboutPageQuery = defineQuery(`*[_type == "aboutPage"][0]{
  title,
  description,
  companyDescription,
  values[]{
    title,
    description,
    icon
  },
  contactInfo{
    phone,
    email,
    address
  }
}`);

// Competencies page query
export const competenciesPageQuery = defineQuery(`*[_type == "competenciesPage"][0]{
  title,
  description,
  coreCompetencies{
    sectionTitle,
    competencies[]{
      title,
      description,
      icon
    }
  },
  technicalExpertise{
    sectionTitle,
    equipment{
      title,
      items[]
    },
    methods{
      title,
      items[]
    }
  },
  experienceStats{
    sectionTitle,
    stats[]{
      number,
      title,
      description
    }
  },
  materialsSection{
    sectionTitle,
    materials{
      title,
      items[]
    },
    capacity{
      title,
      items[]
    }
  }
}`);

// Footer query
export const footerQuery = defineQuery(`*[_type == "footer"][0]{
  title,
  companySection{
    title,
    description
  },
  competenciesSection{
    title,
    competencies[]{
      name
    }
  },
  contactSection{
    title,
    phone,
    email,
    address
  },
  linksSection{
    title,
    links[]{
      title,
      url
    }
  },
  copyright
}`);
