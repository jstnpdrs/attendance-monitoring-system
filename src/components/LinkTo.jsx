import { NavLink } from "react-router-dom";

export default function LinkTo({ to, icon, caption, isShown }) {
    return <NavLink to={to}>
        {icon}
        {isShown ?
            <span className="ml-3 text-xl">{caption}</span>
            : null
        }
    </NavLink>


}