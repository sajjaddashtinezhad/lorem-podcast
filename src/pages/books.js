import React, { useState } from 'react';
import Bottom from "../images/bottom.svg";
import Header from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { graphql, Link } from 'gatsby';
import Seo from '../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Episodes = ({ data }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };



    return (
    <main>
      <div className="bg-zinc-900 font-peyda w-full h-svh md:h-screen p-6 md:p-16 flex flex-col justify-between" dir="rtl">
      <Header toggleMenu={toggleMenu} />
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full overflow-y-scroll my-8 rounded-xl overflow-hidden'>
            {
        data.allMdx.nodes
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
        .map((node) => {
          const image = getImage(node.frontmatter.hero_image);
          return (
            <article key={node.id} className="bg-zinc-700 bg-opacity-50 text-white rounded-xl flex flex-col justify-between w-full">
              <div className='flex flex-col md:flex-row md:h-full'>
                <GatsbyImage
                  image={image}
                  alt={node.frontmatter.hero_image_alt}
                  className='h-full w-full md:w-1/3 object-cover rounded-tr-xl rounded-tl-xl md:rounded-tl-none md:rounded-tr-xl md:rounded-br-xl'
                />
                <div className='w-full md:w-2/3 px-6 md:flex md:flex-col md:justify-between'>
                  <div className='py-6'>
                    <h2 className="text-xl md:text-2xl font-bold">{node.frontmatter.title}</h2>
                    <h3 className='font-bold mb-2'>نویسنده: {node.frontmatter.subtitle}</h3>
                    <p className="text-base mb-4">{node.frontmatter.description}</p>
                  </div>
                  <Link to={`/${node.frontmatter.slug}`} className="bg-zinc-900 px-8 py-4 rounded-t-md block w-min text-nowrap duration-500 hover:px-10" style={{ whiteSpace: 'nowrap' }}>
                    درباره‌ی کتاب
                  </Link>
                </div>
              </div>
            </article>
          );
        })
            }
      </div>
      <Footer />
      </div>
      <div className="absolute bottom-0 w-full pointer-events-none">
        <img src={Bottom} alt="Bottom decoration" className="w-full object-cover h-60" />
      </div>
    </main>
    );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "book" } } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          subtitle
          description
          date
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
        }
        }
      }
    }
  }
`;

export default Episodes;

export const Head = () => (
  <Seo 
    title='معرفی کتاب'
    description='در پادکست لورم، با راهکارهای مختلف در رابطه با بازاریابی، تعامل با مشتری، بهبود کیفیت و سرعت کار و… آشنا شوید.'
  />
)