import { Bebas_Neue, Roboto } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import ProjectCardSingle from "./projectCardSingle";
import { forwardRef } from "react";
const Bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Robot = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const projectDetails = [
  {
    title: "BitTree links manager",
    description:
      "BitTree is a links manager app where you can display all your social media and other links on a single page. BitTree is a clone of LinkTree, but remember, LinkTree is not free, whereas BitTree is free to use and accessible all over the world.",
    link: "https://bitreelinks.vercel.app",
    image: "/web1.png",
    stack: [1, 10, 6],
  },
  {
    title: "Your Way - Plan Your journey",
    description:
      "Your Way is a travel planning app where you can create a complete plan for your journey. Simply provide your destination, the number of days, and the number of people traveling, and Your Way will make a full itinerary with the best hotels and places to visit",
    link: "https://your-way-traveler.vercel.app",
    image: "/web2.png",
    stack: [2, 11, 6, 13],
  },
  {
    title: "BitLinks-URL shortner",
    description:
      "BitLinks is a URL shortener app. Here you can shorten your long links and simplify them. Just provide the actual link you want to shorten, and BitLinks will create a short URL for you.",
    link: "https://shortenurl-pied.vercel.app",
    image: "/web3.png",
    stack: [1, 10, 6],
  },
  {
    title: "Chatly chat app - Websockets + Database",
    description:
      "Chatly is a chat app that sends messages using WebSockets. If the receiver is disconnected, the message is stored in the database, and when the user reconnects, the message is sent to them. This is only a test version.",
    link: "https://chatly-test.vercel.app",
    image: "/web4.png",
    stack: [2, 11, 6, 14],
  },
  {
    title: "AHR Trades Full-stack E-commerce",
    description:
      "AHR Traders is a full-stack e-commerce app focused on laptops. Products can be added to this website dynamically. The app is divided into two parts: the main website, where users can buy products, and the admin area, where we can add or delete products and manage orders",
    link: "https://bitreelinks.vercel.app",
    image: "/web5.png",
    stack: [1, 5, 10, 6],
  },
  {
    title: "Deluxe - WorkFlow manager",
    description:
      "Deluxe is a workflow management app. Users can create workflows with the help of Deluxe. They can also connect their Slack, Discord, and Notion accounts to Deluxe. Deluxe integrates with Slack, Discord, and Notion, allowing users to send messages as well.",
    link: "https://deluxe-sooty.vercel.app",
    image: "/web6.png",
    stack: [1, 5, 9, 6, 15],
  },
];
const Projects = forwardRef<HTMLDivElement, object>((_props, ref) => {
  return (
    <div
    ref={ref}
      className={`mb-10  ${Robot.className} 3xl:w-[1632px] w-full justify-self-center text-black`}
    >
      <div className="xl:px-15 lg:px-5 px-2  flex flex-col gap-5">
        <div className={`${Bebas.className} text-[48px] text-black`}>
          Projects
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 2xl:px-[15px] lg:px-[1vw] md:px-[1.25vw] px-[2.5vw]">
          {projectDetails &&
            projectDetails.map((item, index) => (
              <ProjectCardSingle
                key={index}
                title={item.title}
                description={item.description}
                link={item.link}
                image={item.image}
                stack={item.stack}
              />
            ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
