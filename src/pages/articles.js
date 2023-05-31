import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/musica3.png";
import article2 from "../../public/images/articles/mongo.png";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../public/images/articles/create modal component in react using react portals.png";
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article7 from "../../public/images/articles/What is Redux with easy explanation.png";
import article8 from "../../public/images/articles/What is higher order component in React.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
    rounded-br-3xl
    "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Simple Portfolio Built with Nextjs | Articles Page</title>
        <meta
          name="description"
          content="Browse through CodeBucks's collection of software engineering articles and 
        tutorials on Next.js, React.js, web development, and more. 
        Gain valuable insights and stay up-to-date with SEO tips for building a developer portfolio."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          "
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={article1}
              title="Arte & Ticmas"
              time="9 min read"
              summary="
 

              El Arte y La empresa Tic
              
              
              
              Creo que uno de los desafíos de las nuevas tecnologías y de las empresas de desarrollo es integrar las partes del sistema que se vieron afectadas por el avance tecnologico ,que venimos viviendo, se que en un futuro próximo esto comenzara a transformarse por que si un programador estuviera en contacto con un músico o con un artista plástico, de manera directa reconocería en esa conexión una similitud semejante que se sorprendería.
              
              Materializar una idea un proyecto, o Tocar una partitura de Bach en Cello, Violín, Solfear marcar el Ritmo leer el pentagrama mientras tus dedos tocan las notas, crear tus propios sonidos, tomar viejas estructuras, cambiarlas y crear nuevos solfeos en medio devolver un ArrayList o poner una condición un silencio.
              
              Están mas conectados de lo que parece, me encantaría que estas empresas integren músicos en vivo artistas plásticos en medio de los arquitectos del software … inspirados
              
              y que estas artes transformen los sistemas para la integración para la armonía de todos los integrantes.
              
              Lo comparto como un :
              
              Un Chelista en potencia… Un programador en potencia…."
              link="https://www.linkedin.com/pulse/el-arte-y-la-empresa-tic-parte-2-mariano-h-manzo/?trackingId=ozftNiw4THS2nGjeAPofcA%3D%3D"
            />

            <FeaturedArticle
              img={article2}
              title="Cambiar flujos y disparadores con el tutorial de Node.js"
              time="10 min read"
              summary="A veces necesita reaccionar inmediatamente a los cambios en su base de datos. Tal vez desee realizar un pedido con un distribuidor siempre que el inventario de un artículo caiga por debajo de un umbral determinado. O tal vez desee enviar una notificación por correo electrónico cada vez que cambie el estado de un pedido. Independientemente de su caso de uso particular, siempre que desee reaccionar de inmediato a los cambios en su base de datos MongoDB, los flujos de cambio y los disparadores son opciones fantásticas."
              link="https://www.mongodb.com/developer/languages/javascript/nodejs-change-streams-triggers/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Articulos de Interes
          </h2>
          <ul className="flex flex-col items-center relative">
            <Article
              title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
              img={article3}
              date="January 27, 2023"
              link=""
            />
            <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              img={article4}
              date="January 30, 2023"
              link=""
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
   
              date="January 29, 2023"
              link=""
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
            
              date="January 28, 2023"
              link=""
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
