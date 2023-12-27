import { type NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { FeaturesContainer } from "~/components/features-container";
import { AnalyticsIcon, HourglassIcon, MegaphoneIcon, PeopleIcon, RocketIcon, ToolsIcon } from "~/components/icons";
import { Button } from "baseui/button";
import { useRouter } from 'next/router'

interface Features {
  text: string;
  title: string;
  Icon: ReactNode;
}

const featuresList: Features[] = [
  {
    title: "Save Time",
    text: "Spend less time on administrative work and more time on high-value activities.",
    Icon: <HourglassIcon size="48" />
  },
  {
    title: "Analytics",
    text: "Overview of your business's performance metrics on a single dashboard.",
    Icon: <AnalyticsIcon size="48" />
  },
  {
    title: "Marketing",
    text: "Data-driven approach gives you actionable insights into your marketing efforts.",
    Icon: <MegaphoneIcon size="48" />
  },
  {
    title: "Personnel Management",
    text: "Monitor employees' work hours, approve or reject leave requests, etc.",
    Icon: <PeopleIcon size="48" />
  },
  {
    title: "Customer Experience",
    text: "Run your business like a pro and give your customers the best experience!",
    Icon: <RocketIcon size="48" />
  },
  {
    title: "Online Support",
    text: "Available 24 hours a day, 7 days a week, and 365 days a year!",
    Icon: <ToolsIcon size="48" />
  }
]

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>SetItApp</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center md:p-20 p-8">
        <div className="flex flex-col items-center justify-around gap-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Your <span className="text-[#5856B9]">business management</span> made simple.
          </h1>
          <div className="text-center md:px-72 px-8">{"The future of your business is data-driven and prosperous. Our Business Management Platform is here to guide you on your journey to success. Embrace the power of information and unlock your business's full potential today!"}</div>
          <div className="grid grid-cols-1 gap-4">
            <Button onClick={() => router.push('/login')}
              overrides={{
                BaseButton: {
                  style: () => ({
                    background: "linear-gradient(55deg, rgba(88,86,185,1) 0%, rgba(148,203,196,1) 100%);"
                  })
                }
              }}>Start for free</Button>
            {/* <Button onClick={() => router.push('/pricing')} overrides={{
              BaseButton: {
                style: () => ({
                  outline: "#5856B9 solid",
                  backgroundColor: 'white',
                  color: "#5856B9",
                  ":hover": {
                    color: "black",
                    backgroundColor: 'white',
                  },
                })
              }
            }}>See Pricing →</Button> */}
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-center pt-12">
            Why choose <span className="text-[#5856B9]">SetApp</span>
          </h2>
          <div className="grid md:grid-cols-6 gap-4 sm:grid-cols-2 px-12">
            {featuresList.map((item: Features) => <FeaturesContainer title={item.title} text={item.text} CustomIcon={item.Icon} key={`key${item.title}`} />)}
          </div>
          <div className="w-screen bg-[#0D0C0F] h-[24rem] md:h-[32rem]">
            <div className="text-white text-3xl font-bold p-6">{"Take control of"}<span className="text-[#94cbc4]"> {"business"}</span>  {"like never before"}</div>
            <div className="grid md:grid-cols-1 justify-center items-center">
              <div className="text-white text-xl font-bold md:px-24 leading-10 hidden md:block">
                {"Whether you're a small startup or an established enterprise, our app is tailored to cater to your"}
                <span className="text-[#94cbc4]"> {"unique business needs."}</span> {"Here's what SetApp can do for you:"}
              </div>
            </div>
          </div>
          {/* <h2 className="text-3xl font-extrabold tracking-tight text-center">
            Our <span className="text-[#5856B9]">Pricing</span>
          </h2> */}
          <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1 md:gap-8">
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
