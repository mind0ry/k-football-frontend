import { useEffect, useState } from "react";
import axios from "axios";

function NextMatch() {

    const [game, setGame] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/main/next_game")
        .then((res) => {
            console.log(res.data);
            setGame(res.data); 
        })
        .catch((err) => console.log(err));
    }, []);

    if (!game) return <div>Loading...</div>;  

  return (
    <div className="col-lg-6">
      <div className="widget-next-match" style={{height:"100%"}}>
        <div className="widget-title">
          <h3>다음 경기</h3>
        </div>

        <div className="widget-body mb-3" style={{marginTop:90}}>
          <div className="widget-vs">
            <div className="d-flex align-items-center justify-content-around justify-content-between w-100">
              <div className="team-1 text-center">
                <img src={game.home_logo} alt="Image" />
                <h3 style={{marginTop:15}}>{game.home_team}</h3>
              </div>

              <div>
                <span className="vs">
                  <span>VS</span>
                </span>
              </div>

              <div className="team-2 text-center">
                <img src={game.away_logo} alt="Image" />
                <h3 style={{marginTop:15}}>{game.away_team}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center widget-vs-contents mb-4">
          <h4 style={{marginTop:50}}>{game.round}라운드</h4>

          <p className="mb-5">
            <span className="d-block" style={{marginTop:30}}>{game.kickoff_date}</span>
            <span className="d-block" style={{paddingBottom:"30px"}}>{game.kickoff_time}</span>
            <strong className="text-primary">{game.tvo.stadium}</strong>
          </p>

          <div id="date-countdown2" className="pb-1"></div>
        </div>
      </div>
    </div>
  );
}
export default NextMatch;
