import Icon from "@mdi/react";
import classNames from "classnames"
import {mdiStar} from "@mdi/js"
import reactCss from "./rating.css";
function Rating({rating,maxRating}){
    return (
        <div className="rating">
            {new Array(maxRating).fill(0).map((_, index) => {
                const isActive = rating >= index + 1;
                return (
                    <Icon
                        key={index}
                        className={classNames("rating__star", {
                            "rating__star--active": isActive
                        })}
                        size={1}
                        path={mdiStar}
                    />
                );
            })}{" "}
        </div>
    );}

export default Rating