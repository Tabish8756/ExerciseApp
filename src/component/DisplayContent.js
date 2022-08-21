import { useContext } from 'react';
import { Details } from '../Context';
import './DisplayContent.css'
const DisplayContent = ({ id, img, bodyPart, name, list }) => {
    const { activity, setActivity } = useContext(Details);
    return (
        <div className="contentData" key={id}>
            <div className="contentDetails">
                <img className="contentImg" src={`http://d205bpvrqc9yn1.cloudfront.net/${id}.gif`} alt="exercise" />
                {/* <h4>Name: {name}</h4> */}
                <h5>Body Part- {bodyPart}</h5>
                
                {activity.includes(list) ? <button className='contentBtn'
                    onClick={() => setActivity(activity.filter((c) => c.id !== list.id))} >Remove Activity</button>
                    : <button className="contentBtn" onClick={() => setActivity([...activity, list])}>Add to Activity</button>}

            </div>

        </div>
    )
}
export default DisplayContent