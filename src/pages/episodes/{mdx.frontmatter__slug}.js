import React, { useState } from 'react';
import Bottom from "../../images/bottom.svg";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Footer from "../../components/footer";
import { graphql, Link } from 'gatsby'
import Arrow from "../../images/arrow.svg";
import Seo from '../../components/seo'


  const Episode = ({ data, children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const components = {};

    return (
        <main>
        <div className="bg-zinc-900 font-peyda w-full h-screen p-6 md:p-16 flex flex-col justify-between" dir="rtl">
        <Header toggleMenu={toggleMenu} />
        <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />

          <div className='md:h-[257px] my-8 overflow-y-scroll rounded-xl overflow-hidden'>
            <Link to="/episodes">

              <span className="text-sm md:text-base bg-zinc-700 bg-opacity-30 backdrop-filter backdrop-blur-md rounded-2xl px-4 w-28 h-[45px] items-center mb-3 hover:w-32 duration-200 font-peyda font-bold text-white inline-flex justify-between">
                <img src={Arrow} alt="Close" className="w-4 -rotate-90 inline" />
                بازگشت
              </span>
            </Link>

            <div className='flex-col md:flex-row-reverse flex rounded-xl bg-zinc-700 bg-opacity-30 backdrop-filter overflow-hidden'>
              <div className='w-full md:w-1/3'
                dangerouslySetInnerHTML={{ __html: data.mdx.frontmatter.iframe }}
              />

              <div className='w-full md:w-2/3 md:h-[200px] overflow-y-scroll px-8 py-8 rounded-xl overflow-hidden'>

                <h1 className="font-bold text-3xl mb-2 text-white">{data.mdx.frontmatter.title}</h1>
                <div className='text-white'>
                  {React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                      return React.cloneElement(child, {
                        components: {
                          ...components,
                          h1: (props) => <h1 className="text-4xl font-bold mt-4 mb-2" {...props} />,
                          h2: (props) => <h2 className="text-3xl font-bold mt-4 mb-2" {...props} />,
                          h3: (props) => <h3 className="text-2xl font-bold mt-4 mb-2" {...props} />,
                          h4: (props) => <h4 className="text-xl font-bold mt-4 mb-2" {...props} />,
                          h5: (props) => <h5 className="text-lg font-bold mt-4 mb-2" {...props} />,
                          h6: (props) => <h6 className="text-base font-bold mt-4 mb-2" {...props} />,
                          li: (props) => <li className="mb-2" {...props} />,
                          a: (props) => <a className="underline" {...props} />
                        }
                      });
                    }
                    return child;
                  })}

                </div>


              </div>

            </div>


          </div>






        <Footer />
        </div>
        <div className="absolute bottom-0 w-full pointer-events-none">
          <img src={Bottom} alt="Bottom decoration" className="w-full object-cover h-60" />
        </div>
      </main>
    )
  }
  

  export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        description
        iframe
      }
    }
  }`
  
  export const Head = ({data}) => (
    <Seo 
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
    />
  )

  export default Episode