import Head from "next/head";
import Image from "next/image";
import ArticleAndImage from "../core/components/ArticleAndImage/ArticleAndImage";
import Btn from "../core/components/btn/Btn/Btn";
import DipatchImagesInChildren from "../core/components/DispatchImagesInChildren/DipatchImagesInChildren";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <DipatchImagesInChildren dir={["home/desktop/"]}>
          <ArticleAndImage
            style="black"
            content={{
              title: "Create and share your photo stories.",
              text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
              button: <Btn type="arrow" text="get an invite"></Btn>,
            }}
          ></ArticleAndImage>
          <ArticleAndImage
            style="white--invert"
            content={{
              title: "BEAUTIFUL STORIES every time",
              text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
              button: <Btn type="arrow" text="view the stories"></Btn>,
            }}
          ></ArticleAndImage>
          <ArticleAndImage
            style="white"
            content={{
              title: "Designe for everyone",
              text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
              button: <Btn type="arrow" text="view the stories"></Btn>,
            }}
          ></ArticleAndImage>
        </DipatchImagesInChildren>
      </section>
    </div>
  );
}
