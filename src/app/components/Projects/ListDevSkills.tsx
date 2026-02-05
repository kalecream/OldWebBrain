const Technologies = ["CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "MDX"];

export const Tech = () => {
  return (
    <div className="tech">
      <h2>Technologies</h2>
      <div className="tech__container">
        {Technologies.map((tech, index) => (
          <div className="tech__container__item" key={index}>
            <h3>{tech}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
