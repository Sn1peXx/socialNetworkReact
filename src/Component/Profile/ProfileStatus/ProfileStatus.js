import {useEffect, useRef, useState} from "react";
import React from "react";

import profileStyle from "../Profile.module.css";

// Мой статус
const ProfileStatus = ({status, updateUserStatus}) => {

    const [editStatus, setEditStatus] = useState(false);
    const [stateStatus, setStateStatus] = useState(status + "");

    const toggleStatusMode = () => {
        setEditStatus(!editStatus);
        updateUserStatus(stateStatus);
    }

    const onStatusChange = e => {
        setStateStatus(e.target.value);
    }

    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }

    const prevStatus = usePrevious(stateStatus);
    useEffect(() => {
        if (prevStatus !== stateStatus) {
            setStateStatus(stateStatus);
        }
    }, [prevStatus, stateStatus])

    return (
        <div className={profileStyle.status}>
            <h2 className={profileStyle.profile_title}>Мой статус</h2>
            {
                editStatus
                    ?<form>
                        <input
                            type="text"
                            onChange={onStatusChange}
                            value={stateStatus}
                            placeholder="Что у вас нового?"
                            autoFocus={true}
                            onBlur={toggleStatusMode}
                            className={profileStyle.posts_input}
                        />
                    </form>
                    :<p className={profileStyle.profile_answer} onDoubleClick={toggleStatusMode}>{status || "-------"}</p>
            }
        </div>
    )
}

export default ProfileStatus;