import Image from "next/image";
import venn from "../public/venn.png";
import btIcon from "../public/icon.jpeg";

export default function Intro() {
  return (
    <div>
      <div className="mt-12 mb-24">
        <h2 className="text-2xl">
          Works and Resume
        </h2>
        <h2 className="text-xl">
          Frontend Designer, Product Marketer, and Web Developer located in{" "}
          <a
            href="https://goo.gl/maps/u25hR137vAGcUXtP9"
            target="_blank"
            rel="noreferrer"
          >
            Salt Lake City
          </a>
          .
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
