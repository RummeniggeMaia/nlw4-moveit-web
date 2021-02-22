import "../styles/global.css"

const ExperienceBar = (props: any) => {
  return (
    <header className="experience-bar">
      <span>8 xp</span>
        <div>
          <div style={{ width: '50%'}} />
          <span className="current-experience" style={{ left: '50%'}}>
            300 xp
          </span>
        </div>
      <span>688 xp</span>
    </header>
  );
}

export default ExperienceBar;