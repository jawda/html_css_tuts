import { Link } from "react-router-dom";
// take in the props from Home or whereever 
const DeckLogList = ({matchlogs, title, handleDelete}) => {



    return (  
        <div className="dlog-list">
            <h2 className="dlog-title">{title}</h2>
             {matchlogs.map((dlog) => (
                <div className="dlog-preview" key={dlog.matchup_id}>
                    {/* pass the id in the link to the details page */}
                    {/* need to figure out how to structure data object and utilize it */}
                    {/* TODO: need to create the log page still */}
                    <Link to={`/decklogs/${dlog.matchup_id}`}>
                        <h2>{ dlog.deck_name }</h2>
                        <p>VS { dlog.opponent_deck }</p>
                    </Link>
                   
                </div>
            ))}
        </div>
    );
}
 
export default DeckLogList;