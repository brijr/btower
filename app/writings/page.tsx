import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fbrijr.medium.com%2Ffeed"
  );
  // You can return Date, Map, Set, etc.
  // map the data
  const data = await res.json();
  const mappedData = data.items.map(
    (item: {
      title: string;
      link: any;
      pubDate: Date;
      thumbnail: any;
      description: any;
    }) => {
      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: item.thumbnail,
        description: item.description,
      };
    }
  );
  return mappedData;
}

export default async function Page() {
  const data = await getData();

  return (
    <>
      <Link className="my-8 block w-fit py-2 px-4 bg-slate-50 rounded-md" href="/">{"<"}- Back to Homepage</Link>
      <div>
        {data.map((item: any) => (
          <div key={item.title}>
            <h2 className="mb-8 mt-64 first:mt-12 text-3xl">{item.title}</h2>
            {/* <p className="my-4">{item.pubDate}</p> */}
            <div className="medium" dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        ))}
      </div>
    </>
  );
}
