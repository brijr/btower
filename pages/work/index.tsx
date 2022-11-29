import Current from "../../components/Current";
import Previous from "../../components/Previous";
import Projects from "../../components/Projects";

export default function Work() {
  return (
    <div>
      <div className="my-16">
        <h2 className="text-2xl">Work and Projects</h2>
        <h3 className="text-xl">
          &quot;Live by Design not by Default&quot; <small>-Unknown</small>
        </h3>
      </div>

      <Current />
      <Previous />
      <Projects />

    </div>
  );
}
