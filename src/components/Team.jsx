import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            विभिन्न कुराहरूका कारण उत्पन्न हुने समस्याहरू, जसमा मानिसहरू अलमलमा पर्छन्। उनीहरूका भनाइहरू, प्रयासहरू र कठिनाइहरूका बाबजुद पनि, धेरै कुराहरू सहनुपर्ने अवस्था आउँछ।
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;