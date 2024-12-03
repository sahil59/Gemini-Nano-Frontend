import { useSelector } from "react-redux";
import Summary from "./Summary";
import Translate from "./Translate";
import Write from "./Write";
import Rewrite from "./Rewrite";

const ActionsUIOverlay = () => {

    const {fileAction, fileData} = useSelector(state => state.fileActionState);

    return (
        <div className="w-full h-full rounded-[5px]">
            {fileAction === 'summary' && <Summary fileDetails={fileData}/>}
            {fileAction === 'translate' && <Translate fileDetails={fileData}/>}
            {fileAction === 'write' && <Write fileDetails={fileData}/>}
            {fileAction === 'rewrite' && <Rewrite fileDetails={fileData}/>}
        </div>
    )
}

export default ActionsUIOverlay;