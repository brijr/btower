import Image from "next/image";
import venn from "../public/venn.png";
import btIcon from "../public/icon.jpeg";

export default function Intro() {
  return (
    <div>
      <div className="mt-12 mb-24">
        <div className="w-24 ring-2 outline outline-offset-2 outline-1 my-12 outline-[#bbb] rounded-full">
          <Image
            className="rounded-full"
            src={btIcon}
            alt="Icon of Bridger Tower on a Laptop probably coding or designing"
          ></Image>
        </div>

        <h1 className="text-4xl">
          Bridger Tower
          <small className="block">
            aka. <a href="https://b98.io">B98</a>,{" "}
            <a href="https://github.com/brijr">brijr</a>, and{" "}
            <a href="https://youtube.com/@code-craft">CodeCraft</a>
          </small>
        </h1>
        <h2 className="text-lg">
          Frontend Designer, Product Marketer, and Web Developer from Salt Lake
          City, UT
        </h2>
      </div>
      <h3>
        I live for <span>design</span>, <span>code</span>, and{" "}
        <span>marketing</span>.
      </h3>
      <p>
        As one passionate about design, development and marketing and I seek to
        bridge the gaps between them.
      </p>
      <p>
        I believe the combination and collaboration of design, code, and
        marketing leads to powerful products, impactful websites, and further
        innovation.
      </p>
      <div className="max-w-[750px] my-8">
        <Image
          src={venn}
          alt="Venn diagram of Bridger Tower's Favorite Place"
        />
      </div>
    </div>
  );
}
