import { useHistory, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DeckDetails = () => {
    const { id } = useParams();// this allows us to grab params from the url 
    const {data: dlog, error, isPending} = useFetch('http://localhost:8000/decklogs/' + id);// pass in id to our custom  hook 


    return (
        <div className="deck-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { dlog && (
                <article>
                    <h2>{dlog.deck_name} VS {dlog.opponent_deck}</h2>
                </article>
            )}
        </div>
    )

}

export default DeckDetails;